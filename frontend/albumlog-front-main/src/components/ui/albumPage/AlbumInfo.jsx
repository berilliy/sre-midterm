import React from 'react'
import { Link } from 'react-router-dom';

export default function AlbumInfo(props) {

  const token = localStorage.getItem('token')
  const { albumInfo } = props;
  return (
    <>
        <div className="albumInfoPage">
            <div className="albumInfo">
                <div className="albumInfoImage">
                    <img src={albumInfo.image[5]['#text']} alt="" />
                </div>
                <div className="albumInfoTitle">
                    <h3>{albumInfo.name}</h3>
                    <p>{albumInfo.artist}</p>
                </div>
            </div>
            <div className="albumInfoTracks">
                <h2>Track List</h2>
                <div className="albumInfoTracksList">
                    {albumInfo.tracks.track.map((track, index) => {
                        return <p key={index}>{index + 1}. {track.name} </p>
                    })}
                </div>
                <div className="reviewButton">
                    <h2>Rating: 4.3/5</h2>
                    
                    {token ? (<button>
                        <Link to={`/reviews/create/${albumInfo.artist}/${albumInfo.name}`}>
                            Leave Review
                        </Link>
                    </button>) : ''}
                </div>
            </div>
        </div>
    </>

  )
}
