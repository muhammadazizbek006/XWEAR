import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import reyting from '../img/reytingb.svg'; // reyting rasmi uchun import
import { productliked } from '../store/slice/productsWishlistDataSlice';

const Yoqtrilganlar = () => {
  const dispatch = useDispatch();
  const productliked = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleDelete = (id) => {
    dispatch(deleteUserOfferLinkData(id));
  };

  return (
    <>
      <section className="bg-white py-12">
        <div className="containerb">
          <div className="flex flex-col items-center">
            {productliked.length > 0 ? (
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {productliked.map((product) => (
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
