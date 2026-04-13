import React, { useEffect, useState } from 'react'
import fetchSearchAlbum from '../tools/FetchAlbums/fetchSearchAlbum';
import { useParams } from 'react-router-dom';
import HeaderSite from '../components/HeaderSite';
import FooterSite from '../components/FooterSite';
import TrackCard from '../components/ui/TrackCard/TrackCard';
import fetchSearchProfile from '../tools/FetchProfile/fetchSearchProflie';
import ProfileCard from '../components/ui/profilePage/ui/ProfileCard';

export default function SearchPage() {
    
    const { searchId } = useParams();
    const [albumInfo, setAlbumInfo] = useState(null) 
    const [profileData, setProfileData] = useState(null) 
    const [currentPage, setCurrentPage] = useState(1) 

    const [ addButton, setAddButton ] = useState(false)
    const [ removeButton, setRemoveButton ] = useState(true)

    useEffect(() => {

        if (Number(currentPage) === 3) {
            setAddButton(true)
        } else {
            setAddButton(false)
        }
    
        if (Number(currentPage) === 1) {
            setRemoveButton(true)
        } else {
            setRemoveButton(false)
        }
      }, [currentPage])

    useEffect(() => {
        setAlbumInfo(null)
        fetchSearchAlbum(searchId, setAlbumInfo, currentPage)
    }, [currentPage])

    useEffect(() => {
        fetchSearchProfile(searchId, setProfileData)
    }, [])
    return (
    <>
        <HeaderSite />
        <div className="content">
            <div className='tracksChart'>
            <h1>Album results for '{searchId}'</h1>
                {albumInfo ? (albumInfo.length ? albumInfo.map((track, index) => {
                    return <TrackCard key={index} trackName={track.name} trackArtist={track.artist} trackImage={track.image[3]['#text']} />
                }) : <p>Albums not found.</p>) : <p>Loading...</p>}
                {albumInfo ? (albumInfo.length ? 
                <div className='chartPageButtons'>
                    <button disabled={removeButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a - 1)}}>
                        <i className="fa-solid fa-circle-left"></i>
                    </button>
                    <p>{currentPage}</p>
                    <button disabled={addButton} onClick={() => {const a = Number(currentPage); setCurrentPage(a + 1)}}>
                        <i className="fa-solid fa-circle-right"></i>
                    </button>
                </div> : '') : ''}
            </div>
            <div className='tracksChart'>
            <h1>User results for '{searchId}'</h1>
                {profileData ? (profileData.length ? profileData.map((profile, index) => {
                    return <ProfileCard key={index} nickname={profile.nickname} userId={profile._id}/>
                }) : <p>Users not found.</p>) : <p>Loading...</p>}
            </div>
        </div>
        
        <FooterSite />
    </>
  )
}
