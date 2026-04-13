import React, { useEffect, useState } from 'react'
import ReviewCard from '../../reviewCard/ReviewCard'
import fetchRecentReviewsUser from '../../../../tools/FetchReviews/fetchRecentReviewsUser';

export default function ProfilePageReviews(props) {

  const { profileData } = props;
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
    const obj = {
      userId: profileData._id
    };
    fetchRecentReviewsUser(obj, setRecentReviews, setPageCount, currentPage)
  }, [currentPage])

  return (
    <div className="albumRecentReviews">
        <h2>Recent Reviews</h2>
        {recentReviews ? (recentReviews.length ? recentReviews.map((review, index) => {
            return <ReviewCard key={index} reviewInfo={review}/>
        }) : <p>No reviews</p>) : <p>Loading...</p>}
        {recentReviews ? (recentReviews.length ? <div className='chartPageButtons'>
        <button disabled={removeButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a - 1)}}>
            <i className="fa-solid fa-circle-left"></i>
        </button>
        <p>{currentPage} / {pageCount} </p>
        <button disabled={addButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a + 1)}}>
            <i className="fa-solid fa-circle-right"></i>
        </button>
        </div> : '') : ''}
    </div>
  )
}
