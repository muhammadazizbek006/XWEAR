import React from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,  } from 'swiper/modules';

// data
import catalog from '../../data/data';

const Hero = () => {
  return (
    <>
      <section className='pt-12'>
        <div className="containerb">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          
            modules={[Autoplay, ]}
            className="mySwiper"
          >
            {
              catalog.herocarusel.map((e) => {
                return (
                  <SwiperSlide
                    style={{ backgroundImage: `url(${e.img})`, backgroundSize: 'cover',  }}
                    className=' md:h-[500px] xl:h-[631px] rounded-lg'
                    key={e.id}
                  >
                  
                    <div className=' max-w-96 lg:max-w-[671px] pb-12 md:pb-1 pt-24 pl-3 md:pl-24 text-start space-y-5 rounded-md'>
                      <h2 className=' md:text-3xl lg:text-4xl xl:text-5xl font-black mb-5'>{e.title}</h2>
                      <h3 className=' text-sm md:text-xl  inline-block mb-5'>{e.sharx}</h3>
                      <Link to="/katalog/kiyim" className='bg-black  text-white py-3 xl:py-6 px-8 rounded-md inline-block'>Перейти в каталог</Link>
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
}

export default Hero;
