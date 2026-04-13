import React from 'react'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import AlbumPage from './pages/AlbumPage'
import CreateReviewPage from './pages/CreateReviewPage'


export default function App() {

  return (
    <>
      <Home />
      <ErrorPage />
      <AlbumPage /> 
      <CreateReviewPage/>
    </>                   
  )
}
