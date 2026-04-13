import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Home from '../pages/Home'
import HomeMobile from '../pages/mobilePages/HomeMobile'

export default function HomeController() {
    
    const isMobile = useMediaQuery({ query: '(min-width: 770px)' })
    
    return (
    <>
        {isMobile ? <Home /> : <HomeMobile />}
    </>
  )
}
