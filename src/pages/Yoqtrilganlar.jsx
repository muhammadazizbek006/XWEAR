import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import like2 from '../img/like2.svg' // reyting rasmi uchun import
import { productliked } from '../store/slice/productsWishlistDataSlice';

const Yoqtrilganlar = () => {
  const dispatch = useDispatch();
  const productliked = useSelector(
    (store) => store.likemaxsulotlar.data
  );
  console.log(productliked);
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
          <h2 className='text-4xl font-semibold mb-6'>подобные</h2>

          <div className="flex flex-col items-center">
            {productliked.length > 0 ? (
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
                {productliked.map((product) => (
                  <li key={product.id} className="bg-white   pl-3 w-80 sm:w-full relative">
                        <button className="right-2 absolute top-2 w-5">
                          <img className="" src={like2} alt={product.brend} />
                        </button>
                    <Link to={`/product/${product.id}`} className="flex flex-col items-start">
                      <div className=" mb-3">
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
              <div className="text-4xl font-bold">Нет любимых продуктов</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Yoqtrilganlar;
