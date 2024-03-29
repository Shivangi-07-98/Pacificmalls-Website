import React from 'react'
import logo from './logo.png'
import './Footer.scss'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='columns'>
        <div className='column1'>
          <div className='dwarkaLogo'>
            <img src={logo} alt="logo" />
          </div>

          <ul className='links'>
            <li><Link to="https://www.facebook.com/pacificmalls">
              <svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z">
                </path>
              </svg>
            </Link></li>

            <li><Link to="https://www.youtube.com/channel/UChv9pxE_y0NgRNgJIX35MEg">

              <svg stroke="currentColor"
                fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z">
                </path>
              </svg>
            </Link></li>

            <li><Link to="https://www.linkedin.com/company/pacific-development-corporation-ltd/">
              <svg
                stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path
                  d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z">
                </path>
              </svg>
            </Link></li>

            <li><Link to="https://www.instagram.com/pacificmalldwarka/">
              <svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z">
                </path>
              </svg>
            </Link></li>
          </ul>
          
        </div>
        <div className='column2'>
          <ul>
            <h2>USEFUL LINKS</h2>
            <li>About Us</li>
            <li>Floor Map</li>
            <li>Facilities</li>
            <li>Safety Measures</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='column3'>
          <ul>
            <h2>CONTACT INFORMATION</h2>
            <li>Pacific D21 Mall, Dwarka Sector 21 Metro Station New Delhi -110077</li>
            <li>Call Us: +91-9953399833</li>
            <li>Daily, From 11:00 AM Till 10:00 PM</li>
            <li>Care.Dwk@Pacificindia.In</li>
          </ul>
        </div>
        <div className='column4'>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5792418141145!2d77.05568251508079!3d28.552364082449433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0fd98b09a1%3A0xb8f6a564c61b7722!2sPacific%20D21%20Mall!5e0!3m2!1sen!2sin!4v1674904157093!5m2!1sen!2sin"
              width="300" height="250" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
      </div>
    </>
  )
}

export default Footer