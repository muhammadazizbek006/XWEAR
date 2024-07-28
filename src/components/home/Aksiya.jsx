import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { aksiyalar } from '../../data/data';
// img
import left from '../../img/hero/cartleft.svg';
import right from '../../img/hero/cartright.svg';

const Aksiya = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleSlideClick = (url) => {
    window.location.href = url;
  };

  return (
    <section className="py-8 bg-gray-100 relative">
      <div className="containerb relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: '.prev-slide',
            nextEl: '.next-slide'
          }}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {aksiyalar.map((e) => (
            <SwiperSlide 
              key={e.id} 
              className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
              onClick={() => handleSlideClick(e.URL)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* Add content here if needed */}
              </div>
              <div className="w-full overflow-hidden rounded-lg">
                <img className="md:w-[1300px] lg:w-full h-80 lg:h-96 lg:object-cover" src={e.img} alt={e.title} />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" style={{ marginTop: "10px" }}></div>
        </Swiper>
       

        <button
            className="absolute top-[170px] transform -translate-y-1/2 left-2 z-10 md:left-[-20px] w-10 h-10  bg-white rounded-full shadow-lg md:w-auto md:h-auto"
            onClick={handlePrev}
          >
            <img src={left} alt="Previous" />
        </button>
        <button
            className="absolute top-[170px] transform -translate-y-1/2 right-2 z-10 md:right-[-20px] w-10 h-10 bg-white rounded-full shadow-lg md:w-auto md:h-auto"
            onClick={handleNext}
          >
            <img src={right} alt="Next" />
        </button>
        </div>

    </section>
  );
};

export default Aksiya;
