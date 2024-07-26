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
              style={{ backgroundImage: `url(${e.img})` }}
              onClick={() => handleSlideClick(e.URL)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                {/* Add content here if needed */}
              </div>
              <div className=" w-full overflow-hidden rounded-lg">
                <img className="w-full h-96 object-cover" src={e.img} alt={e.title} />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination" style={{ marginTop: "10px" }}></div>
        </Swiper>
        <button
            className="absolute top-1/2 transform -translate-y-1/2 left-[-20px] z-10"
            onClick={handlePrev}
          >
            <img src={left} alt="Previous" />
          </button>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-[-20px] z-10"
            onClick={handleNext}
          >
            <img src={right} alt="Next" />
          </button>
      </div>
    </section>
  );
};

export default Aksiya;
