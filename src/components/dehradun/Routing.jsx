import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from './Home Page/Home'
import Shopping from './Shopping/Shopping'
import Food from './Food and Flavours/Food'
import Entertainment from './Entertainment/Entertainment'
import Happening from './Happening/Happening'
import Blog from '../Blog/Blog'

function Routing() {
  return (
    <>
    {/* <Router> */}
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dehradun' element={<Home/>}/>
        <Route path='/shopping' element={<Shopping/>}/>
        <Route path='/food-flavours' element={<Food/>}/>
        <Route path='/entertainment' element={<Entertainment/>}/>
        <Route path='/happening' element={<Happening/>}/>
        {/* <Route path='/blog' element={<Blog/>}/> */}
      </Routes>

      <Footer/>
    {/* </Router> */}
    </>
  )
}

export default Routing