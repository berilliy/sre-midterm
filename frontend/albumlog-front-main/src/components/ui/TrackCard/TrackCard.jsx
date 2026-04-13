import React from 'react'
import { Link } from 'react-router-dom';

export default function TrackCard(props) {

  const {trackName, trackArtist, trackImage } = props;

  return (
    <div className='trackCard'>
        <div className='trackImage'>
            <img src={trackImage ? trackImage : 'https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png'} alt="" />
        </div>
        <div className="trackDesc">
            <div className='trackInfo'>
                <div className="trackName">
                    <p>{trackName}</p>
                </div>
                <div className="trackArtist">
                    <p>{trackArtist}</p>

                </div>
            </div>
            <div className="buttonCard">
                <button>
                    <Link to={`/albums/${trackArtist}/${trackName}`}>
                        See album
                    </Link>
                </button>
            </div>
        </div>
    </div>
  )
}
