import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';

// data
import catalog from '../../data/data';
// img
import left from '../../img/hero/left.svg';
import right from '../../img/hero/right.svg';

const Hero = () => {
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

  return (
    <>
      <section className='pt-12'>
        <div className="containerb">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {
              catalog.herocarusel.map((e) => {
                return (
                  <SwiperSlide
                    style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover' }}
                    className='md:h-[500px] xl:h-[631px] rounded-lg'
                    key={e.id}
                  >
                    <div className='max-w-96 lg:max-w-[671px] pb-12 md:pb-1 pt-24 pl-3 md:pl-24 text-start space-y-5 rounded-md'>
                      <h2 className='md:text-3xl lg:text-4xl xl:text-5xl font-black mb-5'>{e.title}</h2>
                      <h3 className='text-sm md:text-xl inline-block mb-5'>{e.sharx}</h3>
                      <div className='flex flex-col items-start'>
                        <Link to="/katalog/kiyim" className='bg-black text-white py-3 xl:py-6 px-8 mb-16 rounded-md inline-block'>Перейти в каталог</Link>
                        <div>
                          <button className='mr-4 w-14 md:w-[67px]' onClick={handlePrev}>
                            <img src={left} alt="Previous" />
                          </button>
                          <button className='w-14 md:w-[67px]' onClick={handleNext}>
                            <img src={right} alt="Next" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Hero;
