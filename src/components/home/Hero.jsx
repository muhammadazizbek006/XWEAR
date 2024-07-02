import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';

// data
import catalog from '../../data/data';
const Hero = () => {
    
  return (
    <>
        <section className='pt-12 hero'>
         <div className="containerb ">
         <Swiper
        spaceBetween={30} 
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Autoplay,  Navigation]}
        className="mySwiper"
      >
        {
            catalog.herocarusel.map((e)=>{
                return(
                    <SwiperSlide className='flex justify-between  h-[631px] ' key={e.id}>
                        {/* left */}
                        <div className='max-w-[571px] text-start space-y-5'>
                            <h2 className='text-5xl font-black mb-5'>{e.title}</h2>
                            <h3 className='text-xl  inline-block'>{e.sharx}</h3>
                            <Link className='bg-black text-white py-6 px-8 rounded-md'>Перейти в каталог  </Link>
                        </div>
                        {/* right */}
                        <div>
                            <img className='bg-transparent h-[660px] absolute right-20' src={e.img} alt={e.title} />
                        </div>
                    </SwiperSlide>
                )
            })
        }
        
      </Swiper>

        </div>
        </section>
    </>
  )
}

export default Hero