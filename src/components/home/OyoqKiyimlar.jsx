import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// img
import next from "../../img/next.svg";
import like2 from '../../img/like2.svg'

import like3 from '../../img/like3.svg';

import { useDispatch } from "react-redux";
import { addProductToLike } from "../../store/slice/laykSlice";
// data
import  { data } from "../../data/data";

const OyoqKiyimlar = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  useEffect(() => {
    const filteredProducts = data
      .filter((product) => {
        return product.type === "krasofka";
      })
      .slice(0, 4);

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
  return (
    <>
      <section className="pt-12 ">
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
            <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-6 gap-x-8">
              {KatalogMahsulotlari.map((e) => {
                return (
                  <li key={e.id} className=" bg-white relative pl-3 w-80 ">
                     <button
                      className="absolute right-2"
                      onClick={() => toggleLike(e)}
                    >
                      <img
                        src={likedProducts[e.id] ? like3 : like2}
                        alt={e.brend}
                      />
                    </button>

                    <Link to={`/product/${e.id}`} className="">
                      <div className=" flex flex-col items-end mb-3 ">
                        <img src={e.img} alt={e.title} />
                      </div>
                      <div>
                        <p className="text-xl font-semibold mb-4">{e.title}</p>
                        <p className="text-xl"> от {e.narxi} ₽ </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OyoqKiyimlar;
