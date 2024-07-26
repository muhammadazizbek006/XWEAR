import React from "react";
import { useState } from "react";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import like2 from "../img/like2.svg";
import like3 from "../img/like3.svg";
import shop from "../img/shop.svg";

import { useDispatch } from "react-redux";
import { addProductToLike } from "../store/slice/laykSlice";

import { addProductToWishlist } from "../store/slice/productsWishlistDataSlice";
const AksiyaProduct = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  const dispatch = useDispatch();
  const [likedProducts, setLikedProducts] = useState({});
  // Chegirmali mahsulotlarni filtrlaymiz
  const discountedProducts = data.filter(e => e.chegirma);
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
  return (
    <section className="py-12">
      <div className="containerb">
        {/* top */}
        <div className=" mb-9">
          <h2 className="text-4xl font-bold mb-5">Замечательные акции и скидки!</h2>
          <p className="text-base font-medium">
            Мы рады объявить о начале грандиозной акции, которая продлится весь месяц! В рамках этой акции вы сможете приобрести любимые товары по невероятно выгодным ценам. Не упустите свой шанс сэкономить и порадовать себя и своих близких отличными покупками!
            Каждый день акции – это новые возможности для выгодных приобретений. Мы подготовили для вас эксклюзивные предложения, которые позволят вам наслаждаться шопингом и экономить.
          </p>
          <div className="mb-4">
            <h3 className="mb-3 font-semibold text-xl">Скидки:</h3>
            <p className="text-base font-medium">
              20% скидка на всю одежду. <br />
              10% скидка на бытовую технику. <br />
              30% скидка на косметику.
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="mb-3 font-semibold text-xl">Специальные предложения:</h3>
            <p className="text-base font-medium">
              15% скидка на каждый третий товар. <br />
              Бесплатная доставка при покупке на сумму свыше 100,000 сум.
            </p>
          </div>
        </div>
        {/* aksiya product */}
        <h2 className="text-2xl font-bold mb-12">Товары со скидкой</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
          {discountedProducts.map((e) => (
            <li key={e.id} className="relative px-4 py-3 swiper-slide rounded-lg">

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
                  <p className="text-base ">
                    <span className="text-xl font-semibold">расходы: </span>
                    <span className="line-through">от {e.narxi} ₽</span>
                  </p>
                  </div>
                </Link>
                <div className="flex justify-between">
                    <p className="text-base">
                      <span className="text-xl font-semibold">скидка: </span>
                      {e.aksiyaNarxi}  ₽
                    </p>
                  <button
                    onClick={() => mahsulotniWishlistgaQoshish(e)}
                    className="bg-black px-8 py-3 rounded-md"
                  >
                    <img src={shop} alt="" />
                  </button>
                </div>

            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AksiyaProduct;
