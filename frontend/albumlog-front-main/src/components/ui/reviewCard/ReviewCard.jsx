import React, { useEffect, useState } from 'react'
import fetchAlbumAPI from '../../../tools/FetchAlbums/fetchAlbumAPI';
import fetchOneProfile from '../../../tools/FetchProfile/fetchOneProfile';
import { Link } from 'react-router-dom';

export default function ReviewCard(props) {

  const { reviewInfo } = props;
  const [albumInfo, setAlbumInfo] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    fetchAlbumAPI(reviewInfo.albumName, reviewInfo.albumArtist, setAlbumInfo);
    fetchOneProfile(reviewInfo.user._id, setUserInfo)
  }, [])

  return (
    <div className="reviewCard">
        <div className="reviewCardTop">
          {userInfo ? (<Link to={`/user/${userInfo[1]._id}`}><i className="fa-solid fa-circle-user"></i> {userInfo[1].nickname}</Link>) : <p>Loading...</p>}
          <div className="reviewCardAlbum">
            <div className="reviewCardAlbumName">
              <div className="trackName">
                <p>{reviewInfo.albumName}</p>
              </div>
              <div className="trackArtist">
                <p>{reviewInfo.albumArtist}</p>
              </div>
            </div>
            <div className="reviewCardAlbumCover">
              {albumInfo ? ( <img src={albumInfo.image[5]['#text']} alt="" />) : <p>Loading...</p>}
            </div>
          </div>
        </div>
        <div className="reviewCardTitle">
          <h1>{reviewInfo.title}</h1>
        </div>
        <div className="reviewCardBody">
          <p>{reviewInfo.text}</p>
        </div>
        <div className="reviewCardRating">
          <h2>{reviewInfo.rating} / 5</h2>
        </div>
    </div>
    
  )
}
