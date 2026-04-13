import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import fetchMyProfile from '../../../tools/FetchProfile/fetchMyProfile'

export default function UserButton() {

  const token = localStorage.getItem('token')
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
      fetchMyProfile(token, setProfileData)
  }, [])

  return (
    <>
      {token ? (profileData ? <a href={`/user/${profileData[1]._id}`}>My profile</a> : <p>My profile</p>) : <div className="user-btn">
          <Link to='/user/login'> Log In </Link>
          <Link to='/user/signin'> Sign In </Link>
    </div>}
    </>
  )
}

