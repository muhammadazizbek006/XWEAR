import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// img
import next from "../../img/next.svg";
import like2 from '../../img/like2.svg'
import like3 from '../../img/like3.svg';
import shop from '../../img/shop.svg'
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
    // maxsulotlarni korzinkaga qo'shish


    const mahsulotniWishlistgaQoshish = (product) => {
      dispatch(addProductToWishlist(product));
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
                  <li key={e.id} className="  relative px-4 py-3 bg-white w-80 ">
                     <button
                      className="absolute right-3"
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
                      <div className="mb-1">
                        <p className="text-xl font-semibold ">{e.title}</p>
                         <p className="text-base"><span className="text-xl font-semibold">категория: </span>{e.kategoria}</p>
                      </div>
                    </Link>
                    {/* shop btn va kategoria */}
                    <div className="flex justify-between">
                        <p  className="text-base"> <span className="text-base font-semibold">расходы: </span>от {e.narxi} ₽ </p>
                      <button onClick={() => mahsulotniWishlistgaQoshish(e)} className="bg-black px-8 py-2 rounded-md ">
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

export default OyoqKiyimlar;
