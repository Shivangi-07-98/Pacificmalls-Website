import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import './Home.scss'
import banner from './img/banner.jpg'
import picasso from './img/picasso.jpg'
import {Link} from 'react-router-dom'
import brand1 from './img/brand1.jpg'
import brand2 from './img/brand2.jpg'
import brand3 from './img/brand3.jpg'
import brand4 from './img/brand4.jpg'
import brand5 from './img/brand5.jpg'
import brand6 from './img/brand6.jpg'
import brand7 from './img/brand7.jpg'
import brand8 from './img/brand8.jpg'
import brand9 from './img/brand9.jpg'
import brand10 from './img/brand10.jpg'
import brand11 from './img/brand11.jpg'
import cafe from './img/cafe.png'

function Home() {
  return (
    <>
    <div className='home1'>
      <div className='image'>
        <img src={banner} alt="" />
      </div>
      <p>
      We are located in the heart of Dwarka, at the Dwarka Sector 21 metro station. With more than 100 brands at your leisure, over 20 food and beverage brands to choose from, a big food court, cafes and restaurants, a PVR movie theatre, and a gaming zone, Pacific D21 Mall, Dwarka is the go-to shopping, dining and entertainment destination in Asia’s largest suburb.
      </p>
    </div>
    
    <div className='home2'>
      <h2>What is Happening</h2>
      <div className='heading'>
      <p>Sit tight and indulge in timeless, authentic and breath-taking experiences.</p>
      <Link to="/dwarka/happening"><button>View All</button></Link>
      </div>

      <div className='row'>
      <div className='left'>
        <img src={picasso} alt="" />
      </div>
      <div className='right'>
        <p className='first'>Little Picasso</p>
        <p className='first'>
          Entry Fee: Just ₹99</p>

          <p className='first'>Date: 3rd &amp; 4th Feb 2024</p>
          <p className='first'>Timings: 3 PM Onwards</p>
          <p className='first'>Theme: Save water</p>
        <p className='second'>This event is going to be beyond art! Every stroke counts in making a splash for a better planet. Be part of this vibrant canvas of creativity and witness how pint-sized Picassos turn imagination into inspiration. Make a wave and save the day!</p>

        <p className='third'>Click
          <Link to="https://bit.ly/Pacific-D21-Little-Picasso"> <strong>HERE</strong> </Link>
          to register your kids!</p>

        <p className='fourth'>Dive into creativity at 'Little Picasso'! Join us at Pacific D21 Mall, Dwarka, for a splash of fun as young artists express their talent on canvas, celebrating the theme 'Save Water' in the most colourful way possible. From water-themed masterpieces to eco-friendly crafts, let your child's imagination flow.</p>
      </div>
      </div>
    </div>

    <div className='home3'>
      <h2>Brands</h2>
      <div className='heading'>
      <p>The undisputed hub to offer you an unmatched shopping experience from top Indian & International Brands..</p>
      <Link to="/dwarka/shopping"><button>View All</button></Link>
      </div>
      

    </div>

    <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {/* <div class="swiper mySwiper"> */}
    <div className='brands3 swiper-wrapper'>
    <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand3} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand4} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand5} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand6} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand1} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand2} alt="" /></SwiperSlide>
    </div>
    {/* <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div> */}
  {/* </div> */}
      </Swiper>

    <div className='home4'>
      <h2>Food & Flavours</h2>
      <div className='heading'>
      <p>Hop into our pool of cuisines – Chinese, Italian, Indian – and that are not all! Explore to your heart’s content because good vibes and good food end here!</p>
      <Link to="/dwarka/food-flavours"><button>View All</button></Link>
      </div>

    </div>
    
    <Swiper
        slidesPerView={4}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        {/* <div class="swiper mySwiper"> */}
    <div className='brands4 swiper-wrapper'>
    <SwiperSlide><img src={brand7} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand8} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand9} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand10} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand11} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand7} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand8} alt="" /></SwiperSlide>
    <SwiperSlide><img src={brand9} alt="" /></SwiperSlide>
    </div>
    {/* <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div> */}
  {/* </div> */}
      </Swiper>

    <div className='home5'>

      <div className='items'>
        <div className='item'>Food Court</div>
        <div className='item'>Restaurant</div>
        <div className='item'>Cafe</div>
      </div>
      <div className='border'></div>

<div className='row'>
      <div className='left'>
        <div className='foodcourt'>
          <p>Salt, Pacific D21 Mall, Dwarka</p>
          <p>The wide variety of offerings at the food court at Pacific Mall is a matter of sheer culinary pride. From desi street delights to Oriental cuisine, Mughlai to Continental, Pizzas, and Burgers to sweet sinful Donuts, we have an array of popular fast food brands at our Food Court. Explore all flavors like Mughlai, Punjabi and South Indian, here at Pacific Mall.

</p>
        </div>
        <div className='Restaurant'>
          <p>Restaurant</p>
          <p>A great meal is important after a crazy shopping spree. To ensure that you have the best dining experience with your family, friends, and colleagues, we offer a wide range of restaurants to choose from.</p>
        </div>
        <div className='cafe'>
          <p>Cafe</p>
          <p>Pacific is your favorite hangout destination for coffee and conversations. Head to any of the wonderful cafes at Pacific Mall to savor coffee, desserts and more.</p>
        </div>
      </div>
      <div className='right'>
        <img src={cafe}></img>
      </div>
      </div>
    </div>


    </>
  )
}

export default Home