import React, { useEffect, useState } from 'react'
import TrackCard from './ui/TrackCard/TrackCard'
import ReviewCard from './ui/reviewCard/ReviewCard'
import fetchRecentReviews from '../tools/FetchReviews/fetchRecentReviews'

export default function RecentReviews() {

  const [recentReviews, setRecentReviews] = useState(null)
  const [pageCount, setPageCount] = useState()
  const [currentPage, setCurrentPage] = useState(1) 

  const [ addButton, setAddButton ] = useState(false)
  const [ removeButton, setRemoveButton ] = useState(true)

  useEffect(() => {

    if (Number(currentPage) === pageCount) {
        setAddButton(true)
    } else {
        setAddButton(false)
    }

    if (Number(currentPage) === 1) {
        setRemoveButton(true)
    } else {
        setRemoveButton(false)
    }

    if (Number(pageCount) === 1) {
      setAddButton(true)
      setRemoveButton(true)
    }
  }, [currentPage, recentReviews])

  useEffect(() => {
    setRecentReviews(null)
    fetchRecentReviews(setRecentReviews, setPageCount, currentPage)
  }, [currentPage])

  return (
    <div>
        <h1>Recent Reviews</h1>
        {recentReviews ? recentReviews.map((review, index) => {
            return <ReviewCard key={index} reviewInfo={review}/>
        }) : <p>Loading...</p>}
        <div className='chartPageButtons'>
        <button disabled={removeButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a - 1)}}>
            <i className="fa-solid fa-circle-left"></i>
        </button>
        <p>{currentPage} / {pageCount} </p>
        <button disabled={addButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a + 1)}}>
            <i className="fa-solid fa-circle-right"></i>
        </button>
    </div>
    </div>
  )
}
