import React, { useState } from 'react';
import './Home.scss'
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bg1 from './img/bg1.jpg'
import bg2 from './img/bg2.jpg'

function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMall, setSelectedMall] = useState('');
  const malls = ['Mall 1', 'Mall 2', 'Mall 3', 'Mall 4', 'Mall 5', 'Mall 6', 'Mall 7'];

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectMall = (mall) => {
    setSelectedMall(mall);
    setIsOpen(false);
  };

  return (
    <>
    <nav>
      <h1>PACIFIC</h1>
    </nav>

    <main>     
    <div className='overlay'></div>
    <div className='main'>
        
        <Swiper
            slidesPerView={1}
            spaceBetween={1000}
            
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            fade={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}

            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            
          >
            
        <div className='images'>
          <SwiperSlide><img src={bg1} alt=''></img></SwiperSlide>
          <SwiperSlide><img src={bg2} alt=''></img></SwiperSlide>
        </div>
        
      </Swiper>
    </div>
    </main>

    <div className='dropdown'>
    <ul>
    <li><Link to="/the-mall-of-faridabad">The Mall of Faridabad</Link></li>
    <li><Link to="/tagore-garden">Tagore Garden</Link></li>
    <li><Link to="/dehradun">Dehradun</Link></li>
    <li><Link to="/dwarka">Dwarka</Link></li>
    <li><Link to="/nsp-pitampura">NSP Pitampura</Link></li>
    <li><Link to="/jasola">Premium Outlets Jasola</Link></li>
    <li><Link to="/ghaziabad">Ghaziabad</Link></li>
    </ul>
    </div>



    <footer>
      <div>© 2023 Pacific Development Corporation Ltd. All Rights Reserved.</div>
    </footer>
    </>
  )
}

export default Home