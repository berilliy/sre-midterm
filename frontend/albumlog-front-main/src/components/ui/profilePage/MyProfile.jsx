import React from 'react'
import ProfilePageReviews from './ui/ProfilePageReviews';

export default function MyProfile(props) {
    
    const { profileData } = props;
    
    return (
    <>
        <div className="profilePage">
            <div className="profilePageInfo">
                <img src="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" alt="" />
                <h2>{profileData[1].nickname}</h2>
                <h4>Registration Date: {profileData[1].createdAt.substring(0, 10)}</h4>
                <h4>My profile</h4>
                <button onClick={() => {localStorage.clear(); document.location.reload();}}>
                    Sign out
                </button>
            </div>
            <div className="profilePageReviews">
                <ProfilePageReviews profileData={profileData[1]}/>
            </div>
        </div>
    </>
  )
}
