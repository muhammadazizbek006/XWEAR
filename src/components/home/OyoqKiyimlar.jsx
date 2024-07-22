import React, { useEffect, useState } from "react";
import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination} from 'swiper/modules';
import { Link } from "react-router-dom";
// img
import next from "../../img/next.svg";
import like2 from '../../img/like2.svg'
import like3 from '../../img/like3.svg';
import shop from '../../img/shop.svg'
import left from '../../img/hero/cartleft.svg';
import right from '../../img/hero/cartright.svg';


import { useDispatch } from "react-redux";
import { addProductToLike } from "../../store/slice/laykSlice";
// data
import  { data } from "../../data/data";
import { addProductToWishlist } from "../../store/slice/productsWishlistDataSlice";

const OyoqKiyimlar = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  useEffect(() => {
    const filteredProducts = data
      .filter((product) => {
        return product.type === "krasofka";
      })
      

    setKatalogMahsulotlari(filteredProducts ? filteredProducts : []);
  }, []);


// like btn va qo'shish
const dispatch = useDispatch()
  const [likedProducts, setLikedProducts] = useState({});
  const toggleLike = (product) => {
    const updatedLikedProducts = {
      ...likedProducts,
      [product.id]: !likedProducts[product.id],
    };
    setLikedProducts(updatedLikedProducts);
    dispatch(addProductToLike(product));
  };
    // maxsulotlarni korzinkaga qo'shish


    const mahsulotniWishlistgaQoshish = (product) => {
      dispatch(addProductToWishlist(product));
    };
    // swiper
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
      <section className="py-12  ">
        <div className="containerb flex flex-col  ">
          {/* top */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Обувь</h2>
            <Link to="/katalog/krasofka" className="flex items-center">
              <p className="mr-2 text-base">больше товаров</p>
              <img src={next} alt="next" />
            </Link>
          </div>

          <div className="flex flex-col items-center sm:items-stretch">
          <Swiper
          ref={swiperRef}
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
        clickable: true,
        el: '.swiper-pagination',
        dynamicBullets: true
    }}
    
    autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    modules={[Pagination]}
    breakpoints={{
      // Ekran o'lchamlari bo'yicha slaydlarni ko'rsatish uchun breakpoints
      100: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      622: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      1280: {
          slidesPerView: 4,
          spaceBetween: 30
      }
  }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    style={{ paddingBottom: '60px' }} // Pagination uchun 30px pastda joylashtirish
>
    {
        KatalogMahsulotlari.map((e) => {
            return (
                <SwiperSlide key={e.id} className="relative px-4 py-3 swiper-slide  rounded-lg  " style={{  width: '318px' }}>
                    {/* like */}
                    <button
                        className="absolute right-3"
                        onClick={() => toggleLike(e)}
                    >
                        <img
                            src={likedProducts[e.id] ? like3 : like2}
                            alt={e.brend}
                        />
                    </button>

                    <Link to={`/product/${e.id}`} className="flex flex-col justify-between">
                        <div className="flex flex-col items-center mb-3">
                            <img src={e.img} alt={e.title} />
                        </div>
                        <div className="mb-1 flex flex-col items-start justify-between">
                            <p className="text-xl font-semibold">{e.title}</p>
                            <p className="text-base"><span className="text-xl font-semibold">категория: </span>{e.kategoria}</p>
                        </div>
                    </Link>
                    {/* shop btn va kategoria */}
                    <div className="flex justify-between">
                        <p className="text-base"><span className="text-base font-semibold">расходы: </span>от {e.narxi} ₽</p>
                        <button onClick={() => mahsulotniWishlistgaQoshish(e)} className="bg-black px-8 py-3 rounded-md">
                            <img src={shop} alt="" />
                        </button>
                    </div>
                </SwiperSlide>
            );
        })
    }
    <div className="flex items-center">
    <button className='w-14 md:w-[67px] absolute top-[470px] left-[650px] z-50' onClick={handlePrev}>
      <img src={left} alt="Previous" />
    </button>
      <div className="swiper-pagination" style={{ marginTop: '30px' }}></div> {/* Pagination uchun joy */}
      <button className='w-14 md:w-[67px] absolute top-[470px] right-[650px] z-50' onClick={handleNext}>
         <img src={right} alt="Next" />
       </button>
    </div>
        </Swiper>

          </div>
        </div>
      </section>
    </>
  );
};

export default OyoqKiyimlar;
