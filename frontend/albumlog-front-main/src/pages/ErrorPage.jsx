import React from 'react'
import HeaderSite from "../components/HeaderSite.jsx"
import FooterSite from '../components/FooterSite.jsx'

export default function ErrorPage() {
  return (
    <div>
        <HeaderSite />
        <div className="content">
            <div className='errorPageContainer'>
                <h1>404 Page not found. Try another URL.</h1>
            </div>
        </div>
        <FooterSite />
    </div>
  )
}
