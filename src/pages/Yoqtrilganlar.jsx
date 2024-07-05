import React from 'react';
import { Link } from 'react-router-dom';
import { useLikedProducts } from './LikedProductsContext';
import reyting from '../img/reytingb.svg'; // reyting rasmi uchun import

const Yoqtrilganlar = () => {
  const { likedProducts } = useLikedProducts();

  return (
    <>
      <section className="bg-white py-12">
        <div className="containerb">
          <div className="flex flex-col items-center">
            {likedProducts.length > 0 ? (
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {likedProducts.map((product) => (
                  <li key={product.id} className="bg-white pl-3 w-80 sm:w-full">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="flex flex-col items-end mb-3">
                        <img className="mr-5 pt-5" src={reyting} alt={product.brend} />
                        <img src={product.img} alt={product.title} />
                      </div>
                      <div>
                        <p className=" text-base lg:text-xl">{product.title}</p>
                        <p> от {product.narxi} ₽ </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-4xl">Yoqtirilgan mahsulotlar yo'q</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Yoqtrilganlar;
