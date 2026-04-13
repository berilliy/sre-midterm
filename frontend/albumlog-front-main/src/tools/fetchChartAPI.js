import React from 'react'

export default async function fetchChartAPI(setData, genre, page) {
    const url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&limit=11&tag=${genre}&api_key=89eb74b244a1e79c252a051f0d012e0e&page=${page}&format=json`
    try {
      const res = await fetch(url)
      const chartData = await res.json()
      setData(chartData.albums.album)
    } catch (err) {
      console.log(err)
    }
  }
