import React from 'react'

export default async function fetchAlbumAPI(albumName, albumArtist, setAlbumInfo) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=89eb74b244a1e79c252a051f0d012e0e&artist=${albumArtist}&album=${albumName}&format=json`
    try {
      const res = await fetch(url);
      const albumData = await res.json();
      setAlbumInfo(albumData.album);
      console.log(albumData.album);
    } catch (err) {
      console.log(err);
    }
  }
