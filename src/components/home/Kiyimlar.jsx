import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// img
import next from "../../img/next.svg";
import like2 from "../../img/like2.svg";
import like3 from "../../img/like3.svg";
import shop from '../../img/shop.svg'
import { useDispatch } from "react-redux";
import { addProductToLike } from "../../store/slice/laykSlice";
import { data } from "../../data/data";

// data

const Kiyimlar = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  useEffect(() => {
    const filteredProducts = data
      .filter((product) => {
        return product.type === "kiyim";
      })
      .slice(0, 4);

    setKatalogMahsulotlari(filteredProducts ? filteredProducts : []);
  }, []);

  // like btn va qo'shish
  const dispatch = useDispatch();
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
      <section className="pt-12  ">
        <div className="containerb ">
          {/* top */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Одежда</h2>
            <Link to="/katalog/kiyim" className="flex items-center">
              <p className="mr-2 text-base">больше товаров</p>
              <img src={next} alt="next" />
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-stretch">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 ">
              {KatalogMahsulotlari.map((e) => {
                return (
                  <li
                    key={e.id}
                    className=" bg-white shadow-md relative px-4 py-3 rounded-md w-80"
                  >
                    <button
                      className="absolute right-2"
                      onClick={() => toggleLike(e)}
                    >
                      <img
                        src={likedProducts[e.id] ? like3 : like2}
                        alt={e.brend}
                      />
                    </button>
                    <Link to={`/product/${e.id}`} className="flex flex-col">
                    <div className=" flex flex-col items-end mb-3 ">
                        <img src={e.img} alt={e.title} />
                      </div>
                      <div className="mb-1">
                        <p className="text-xl font-semibold ">{e.title}</p>
                         <p className="text-base"><span className="text-xl font-semibold">категория: </span>{e.kategoria}</p>
                      </div>
                     
                    </Link>
                     {/* shop btn va kategoria */}
                    <div className="flex justify-between">
                        <p  className="text-base"> <span className="text-base font-semibold">расходы: </span>от {e.narxi} ₽ </p>
                      <button className="bg-black px-8 py-2 rounded-md hover:bg-green-500 duration-300">
                        <img src={shop} alt="" />
                      </button>
                    </div>
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

export default Kiyimlar;
