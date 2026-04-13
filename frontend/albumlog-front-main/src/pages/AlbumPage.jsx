import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchAlbumAPI from '../tools/FetchAlbums/fetchAlbumAPI';
import HeaderSite from '../components/HeaderSite';
import AlbumInfo from '../components/ui/albumPage/AlbumInfo';
import FooterSite from '../components/FooterSite';
import AlbumPageReviews from '../components/ui/albumPage/AlbumPageReviews';

export default function AlbumPage() {
  const [ albumInfo , setAlbumInfo] = useState();
  const { albumName, albumArtist } = useParams(); 
  
  useEffect(() => {
    fetchAlbumAPI(albumName, albumArtist, setAlbumInfo)
  }, [])

  return (
    <div>
        <HeaderSite />
        <div className="contentAlbumPage">
            {albumInfo ? <AlbumInfo albumInfo={albumInfo} /> : <p>Loading...</p>}
            {albumInfo ? <AlbumPageReviews albumInfo={albumInfo} /> : <p>Loading...</p>}
        </div>
        <FooterSite />
    </div>
  )
}
