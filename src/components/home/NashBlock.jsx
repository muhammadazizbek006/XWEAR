import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

import { Link } from 'react-router-dom';
// img
import next from '../../img/next.svg';
import { nashblock } from '../../data/data';

const NashBlock = () => {
  return (
    <>
      <section className='py-20'>
        <div className="containerb">
          {/* top */}
          <div className='flex justify-between mb-10'>
            <h2 className='text-3xl font-bold'>Наш блог</h2>
            <Link className='flex items-center'>
              <p className='mr-2 text-base'>больше товаров</p>
              <img src={next} alt="next" />
            </Link>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper "
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {
              nashblock.map((e) => {
                return (
                  <SwiperSlide className='max-w-[500px] text-start' key={e.id}>
                    <img className='mb-3 rounded-md w-[500px]' src={e.img} alt={e.title} />
                    <h3 className=' text-base lg:text-xl xl:text-2xl font-bold mb-3'>{e.title}</h3>
                    <p className=' text-sm lg:text-base'>{e.sharx}</p>
                  </SwiperSlide>
                );
              })
            }

          </Swiper>
        </div>
      </section>
    </>
  );
}

export default NashBlock;
