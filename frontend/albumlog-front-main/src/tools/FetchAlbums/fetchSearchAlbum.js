import React from 'react'

export default async function fetchSearchAlbum(searchId, setAlbumInfo, page) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchId}&api_key=89eb74b244a1e79c252a051f0d012e0e&format=json&limit=11&page=${page}`
    try {
      const res = await fetch(url);
      const albumData = await res.json();
      setAlbumInfo(albumData.results.albummatches.album);
    } catch (err) {
      console.log(err);
    }
  }
