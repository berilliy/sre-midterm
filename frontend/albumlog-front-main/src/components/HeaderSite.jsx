import React from 'react'
import HomeButton from './ui/header/HomeButton'
import SearchBar from './ui/header/SearchBar'
import UserButton from './ui/header/UserButton'

export default function HeaderSite() {
  return (
    <header className='desktop'>
        <HomeButton />
        <SearchBar />
        <UserButton />
    </header>
  )
}
