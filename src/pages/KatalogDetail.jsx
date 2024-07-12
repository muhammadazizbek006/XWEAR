import { data } from "../data/data";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NashBlock from "../components/home/NashBlock";

// img
import like from "../img/like2.svg";
import like3 from "../img/like3.svg";
import next from "../img/nextwhite.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishlist } from "../store/slice/productsWishlistDataSlice";
import { addProductToLike } from "../store/slice/laykSlice";

const KatalogDetail = () => {
  const { id } = useParams();
  const productliked = useSelector((store) => store.tanlanganMahsulotlar.data);
  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size
  const Detail = data.filter((e) => e.id.toString() === id);

  const dispatch = useDispatch();

  const mahsulotniWishlistgaQoshish = (product) => {
    dispatch(addProductToWishlist(product));
  };

  const [likedProducts, setLikedProducts] = useState(
    productliked.reduce((acc, product) => {
      acc[product.id] = true;
      return acc;
    }, {})
  );

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
      <section className="py-16">
        <div className="containerb">
          {/* maxsulot map */}
          <ul>
            {Detail.map((e) => {
              const isLiked = likedProducts[e.id];
              return (
                // maxsulot data map
                <li
                  className="flex flex-col md:flex-row items-center md:items-start justify-between md:justify-around "
                  key={e.id}
                >
                  {/* left */}
                  <div className="relative mr-12 max-w-[380px] lg:max-w-[500px] xl:max-w-[664px]">
                    <button onClick={() => toggleLike(e)}>
                      <img
                        className="right-12 absolute top-2"
                        src={isLiked ? like3 : like}
                        alt={isLiked ? "liked" : "like"}
                      />
                    </button>
                    <img
                      className="w-[650px] h-[500px] bg-transparent object-cover"
                      src={e.img}
                      alt={e.title}
                    />
                  </div>

                  {/* right */}
                  <div className="">
                    <h3 className="lg:text-2xl xl:text-3xl mb-5 lg:font-bold xl:font-black">
                      {e.title}
                    </h3>
                    {/* razmer */}
                    <div className="mb-7">
                      <p className="text-base mb-4 font-semibold">
                        EU размеры:
                      </p>
                      <div className="grid grid-cols-4  gap-y-3">
                        {e.razmer.map((size, index) => (
                          <button
                            key={index}
                            className={`border-2 w-20 h-11 rounded text-base font-semibold ${
                              selectedSize === size
                                ? "border-blue-500 bg-blue-500 text-white"
                                : ""
                            }`}
                            onClick={() => setSelectedSize(size)}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* narx va sotib olish */}
                    <div className="flex mb-8">
                      {/* narx va razmer */}
                      <div className="mr-9">
                        <p className="text-xl">{e.narxi} ₽</p>
                        <p className="text-base font-semibold">
                          размер - {selectedSize && `${selectedSize}`}
                        </p>
                      </div>

                      <button
                        onClick={() => mahsulotniWishlistgaQoshish(e)}
                        className="text-xs flex items-center rounded-md font-medium lg:font-extrabold text-white py-3 lg:py-6 px-3 lg:px-7 bg-black"
                      >
                        <span className="mr-6">Добавить в корзину</span>
                        <img src={next} alt="next" />
                      </button>
                    </div>

                    {/* malumotlar */}
                    <div className="max-w-[325px] space-y-6 ">
                      {/* kategoria */}
                      <div className="flex justify-between border-b-2 border-dashed border-gray-300 items-center">
                        <h4 className="text-sm font-medium">Категория</h4>
                        <p className="text-sm font-medium ">{e.type}</p>
                      </div>
                      {/* Бренд */}
                      <div className="flex justify-between border-b-2 border-dashed border-gray-300 items-center">
                        <h4 className="text-sm font-medium">Бренд</h4>
                        <p className="text-sm font-medium">{e.brend}</p>
                      </div>
                      {/* Модель */}
                      <div className="flex justify-between border-b-2 border-dashed border-gray-300 items-center">
                        <h4 className="text-sm font-medium">Модель</h4>
                        <p className="text-sm font-medium">{e.title}</p>
                      </div>
                      {/* Цвет */}
                      <div className="flex justify-between border-b-2 border-dashed border-gray-300 items-center">
                        <h4 className="text-sm font-medium">Цвет</h4>
                        <p className="text-sm font-medium">{e.rang}</p>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <NashBlock />
    </>
  );
};

export default KatalogDetail;
