import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButton() {
  return (
    <div className="home-btn">
          <Link to='/'><i className="fa-solid fa-house"></i></Link>
    </div>
  )
}
