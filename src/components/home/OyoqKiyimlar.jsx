import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import next from "../../img/next.svg";
import like2 from '../../img/like2.svg';
import like3 from '../../img/like3.svg';
import shop from '../../img/shop.svg';
import left from '../../img/hero/cartleft.svg';
import right from '../../img/hero/cartright.svg';
import { useDispatch } from "react-redux";
import { addProductToLike } from "../../store/slice/laykSlice";
import { data } from "../../data/data";
import { addProductToWishlist } from "../../store/slice/productsWishlistDataSlice";

const OyoqKiyimlar = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  const dispatch = useDispatch();
  const [likedProducts, setLikedProducts] = useState({});

  useEffect(() => {
    const filteredProducts = data.filter((product) => product.type === "krasofka");
    setKatalogMahsulotlari(filteredProducts || []);
  }, []);

  const toggleLike = (product) => {
    const updatedLikedProducts = {
      ...likedProducts,
      [product.id]: !likedProducts[product.id],
    };
    setLikedProducts(updatedLikedProducts);
    dispatch(addProductToLike(product));
  };

  const mahsulotniWishlistgaQoshish = (product) => {
    dispatch(addProductToWishlist(product));
  };

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
    <section className="pt-12 mb-20">
      <div className="containerb">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Обувь</h2>
          <Link to="/katalog/krasofka" className="flex items-center">
            <p className="mr-2 text-base">больше товаров</p>
            <img src={next} alt="next" />
          </Link>
        </div>
        <div className="relative">
          <Swiper
            ref={swiperRef}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              dynamicBullets: true
            }}
            modules={[Pagination]}
            breakpoints={{
              100: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              622: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            style={{ paddingBottom: "60px" }}
          >
            {KatalogMahsulotlari.map((e) => (
              <SwiperSlide
                key={e.id}
                className="relative px-4 py-3 swiper-slide rounded-lg"
                style={{ width: "318px" }}
              >
                <button
                  className="absolute right-3"
                  onClick={() => toggleLike(e)}
                >
                  <img src={likedProducts[e.id] ? like3 : like2} alt={e.brend} />
                </button>
                <Link to={`/product/${e.id}`} className="flex flex-col justify-between">
                  <div className="flex flex-col items-center mb-3">
                    <img className="h-64" src={e.img} alt={e.title} />
                  </div>
                  <div className="mb-1 flex flex-col items-start justify-between">
                    <p className="text-xl font-semibold">{e.title}</p>
                    <p className="text-base">
                      <span className="text-xl font-semibold">категория: </span>
                      {e.kategoria}
                    </p>
                  </div>
                </Link>
                <div className="flex justify-between">
                  <p className="text-base">
                    <span className="text-base font-semibold">расходы: </span>
                    от {e.narxi} ₽
                  </p>
                  <button
                    onClick={() => mahsulotniWishlistgaQoshish(e)}
                    className="bg-black px-8 py-3 rounded-md"
                  >
                    <img src={shop} alt="" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination" style={{ marginTop: "30px" }}></div>
          </Swiper>
          <button
            className="absolute top-[170px] transform  -left-5 z-40"
            onClick={handlePrev}
          >
            <img src={left} alt="Previous" />
          </button>
          <button
            className="absolute top-[170px] transform  -right-5 z-40"
            onClick={handleNext}
          >
            <img src={right} alt="Next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OyoqKiyimlar;
