import React, { useEffect, useState } from 'react'
import HeaderSite from '../components/HeaderSite'
import fetchMyProfile from '../tools/FetchProfile/fetchMyProfile'
import { useParams } from 'react-router-dom'
import MyProfile from '../components/ui/profilePage/MyProfile';
import UserProfile from '../components/ui/profilePage/UserProfile';
import FooterSite from '../components/FooterSite';

export default function ProfilePage() {
    
    const token = localStorage.getItem('token');
    const [profileData, setProfileData] = useState(null);
    const [myProfile, setMyProfile] = useState(false)
    const { userId } = useParams();
    
    let data;

    useEffect(() => {
        const fetchData = async () => {
            data = await fetchMyProfile(token, setProfileData);
        }

        fetchData().then(() => {
            console.log(data)
            if (data[1]._id === userId) {
                setMyProfile(true)
            }
        })
    }, [])



    return (
    <>
        <HeaderSite /> 
        <div className="contentProfilePage">
            {myProfile ? ( profileData ? <MyProfile profileData={profileData} /> : <p>Loading...</p>) : ( profileData ? <UserProfile /> : <p>Loading...</p> ) }
        </div>
        <FooterSite />
    </>
  )
}
