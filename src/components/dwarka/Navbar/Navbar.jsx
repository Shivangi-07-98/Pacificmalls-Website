import React from 'react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import './Navbar.scss'

function Navbar() {
  return (
    <>

    <div className='menu'>

    <div className='dwarkaLogo'>
      <img src={logo} alt="logo" />
    </div>

    <ul>
      <li><Link to="/dwarka/shopping">Shopping</Link></li>
      <li><Link to="/dwarka/food-flavours">Food & Flavours</Link></li>
      <li><Link to="/dwarka/entertainment">Entertainment</Link></li>
      <li><Link to="/dwarka/happening">What's Happening</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>

    </div>

    </>
  )
}

export default Navbar