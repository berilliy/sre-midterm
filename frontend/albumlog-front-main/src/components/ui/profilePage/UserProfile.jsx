import React, { useEffect, useState } from 'react'
import fetchOneProfile from '../../../tools/FetchProfile/fetchOneProfile'
import { useParams } from 'react-router-dom';
import ProfilePageReviews from './ui/ProfilePageReviews';

export default function UserProfile() {
    const { userId } = useParams(); 
    const [oneProfileData, setOneProfileData] = useState(null)

    useEffect(() => {
      async function fetchData() {
        await fetchOneProfile(userId, setOneProfileData)
      }

      fetchData()
    }, [])
    
    return (
    <>

    {oneProfileData ? 
    (
      <div className="profilePage">
            <div className="profilePageInfo">
                <img src="https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png" alt="" />
                <h2>{oneProfileData[1].nickname}</h2>
                <h4>Registration Date: {oneProfileData[1].createdAt.substring(0, 10)}</h4>
            </div>
            <div className="profilePageReviews">
                <ProfilePageReviews profileData={oneProfileData[1]}/>
            </div>
        </div>
    ) : <p>Loading...</p>}
        
    </>
  )
}
