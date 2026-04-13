import React, { useEffect, useState } from 'react'
import HeaderSite from '../components/HeaderSite'
import { useParams } from 'react-router-dom';
import fetchAlbumAPI from '../tools/FetchAlbums/fetchAlbumAPI';
import fetchPostReview from '../tools/fetchPostReview';
import FooterSite from '../components/FooterSite';

export default function CreateReviewPage(props) {

  const { albumName, albumArtist } = useParams(); 
  const [albumInfo, setAlbumInfo] = useState(null)
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchAlbumAPI(albumName, albumArtist, setAlbumInfo)
  }, [])

  const submitData = async () => {
    const title = document.querySelector('#Title').value;
    const text = document.querySelector('#Text').value;
    let rating = '';
    document.querySelectorAll('.ratingChoice').forEach(item => {
        if (item.checked) {
            rating = item.value
        }
    });

    const object = {
        title,
        text,
        rating,
        albumArtist,
        albumName
    }

    const jsonObject = JSON.stringify(object);

    const res = await fetchPostReview(jsonObject, token)

    console.log(res)

    if (res[0].status === 400) {
        alert(res[1][0].msg)
    }

    if (res[0].status === 200) {
        alert('Successful post! Redirecting now...')
        setTimeout(() => {window.location.href = '/'}, 2000)
    }

    if (res[0].status === 500) {
        alert('Unable to post. Try later.')
    }
}

  return (
    <>
        <HeaderSite />
        
        <div className="contentReviewCreatePage">
            { albumInfo ? (
                <div className="albumInfo">
                <div className="albumReviewCreateImage">
                    <img src={albumInfo.image[5]['#text']} alt="" />
                </div>
                <div className="albumInfoTitle">
                    <h3>{albumInfo.name}</h3>
                    <p>{albumInfo.artist}</p>
                </div>
            </div>
            ) : <p>Loading...</p>}
            <div className="reviewPage">
                    <h1>Create Review</h1>
                <form action="" method="get" className="reviewForm">
                <div className="reviewForm">
                    <h3>Title</h3>
                    <input type="text" name="Title" id="Title" required />
                </div>
                <div className="reviewForm">
                    <h3>Text</h3>
                    <textarea type="text" name="Text" id="Text" required></textarea>
                </div>
                </form>
                <div>
                    <input type="radio" className='ratingChoice' id="reviewChoice1" name="review" value="1" />
                    <label for="reviewChoice1">1</label>

                    <input type="radio" className='ratingChoice' id="reviewChoice2" name="review" value="2" />
                    <label for="reviewChoice2">2</label>

                    <input type="radio" className='ratingChoice' id="reviewChoice3" name="review" value="3" />
                    <label for="reviewChoice3">3</label>

                    <input type="radio" className='ratingChoice' id="reviewChoice3" name="review" value="4" />
                    <label for="reviewChoice3">4</label>

                    <input type="radio" className='ratingChoice' id="reviewChoice3" name="review" value="5" />
                    <label for="reviewChoice3">5</label>
                </div>
                <div className="reviewForm">
                    <button onClick={() => {submitData()}}>
                        Post Review
                    </button>
                </div>
            </div>
        </div>
        <FooterSite />
    </>
  )
}
