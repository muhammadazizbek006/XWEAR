import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// img
import delet from '../img/korzinka/delete.svg'
import maxsulotyoq from '../img/korzinka/maxsulotyoq.png'
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";

const Korzinka = () => {
  const dispatch = useDispatch();
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const initialCounts = tanlanganMahsulotlar.reduce((acc, product) => {
    acc[product.id] = 1; // Har bir mahsulot uchun boshlang'ich sanash qiymati
    return acc;
  }, {});

  const [counts, setCounts] = useState(initialCounts);

  const increment = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decrement = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] > 1 ? prevCounts[id] - 1 : 1,
    }));
  };

  const handleDelete = (id) => {
    dispatch(deleteUserOfferLinkData(id));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[id];
      return newCounts;
    });
  };

  return (
    <>
      <section className="py-10 ">
        {tanlanganMahsulotlar.length > 0 ? (
          <div className="containerb">
            <h2 className="text-3xl font-black mb-4">Рассчитать стоимость</h2>
            {/* malumot */}
            <div className="text-base font-medium max-w-[1013px] mb-10 ">
              <p className="mb-9">
                Мы ежедневно добавляем новые товары на сайт, но если вам не
                удалось найти то, что искали, вы всегда можете воспользоваться
                автоматическим расчетом стоимость заказа на маркетплейсе Poizon,
                включая комиссию сервиса и доставку. Если у вас еще нет приложения
                Poizon, тогда можете посмотреть статью ниже. В приложении есть
                любые кроссовки и одежда дешевле на 40% чем в РФ.
              </p>
              <p>
                Если вы не хотите устанавливать приложение, вы всегда можете
                написать нам в Telegram или WhatsApp, какую вещь хотите купить.
                Для этого напишите ее название или пришлите фотографию к нам в
                чат. Наши операторы сами найдут нужный вам товар и рассчитают его
                стоимость.
              </p>
            </div>
            {/* tanlangan maxsulot map */}
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
              {tanlanganMahsulotlar.map((e) => (
                <li key={e.id} className="shadow-lg relative flex flex-col items-center text-center pb-6 rounded-md">
                  {/* delete */}
                  <button className="absolute top-5 right-5" onClick={() => handleDelete(e.id)}>
                    <img className=" " src={delet} alt="delet" />  
                  </button>
                  <img className="" src={e.img} alt={e.title} />
                  <div>
                    <p>{e.brend}</p>
                    <p className="mb-6">{e.title}</p>
                   
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => decrement(e.id)}
                        className="px-6 text-3xl hover:bg-red-500 hover:text-white duration-300 bg-gray-200 text-gray-700 rounded"
                      >
                        - 
                      </button>
                      <span className="mx-2">{counts[e.id]}</span>
                      <button
                        onClick={() => increment(e.id)}
                        className="px-6 text-2xl hover:bg-green-500 hover:text-white duration-300 bg-gray-200 text-gray-700 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="containerb flex flex-col items-center ">
            <div className=" max-w-[637px] flex flex-col items-center text-center ">
              <img className="w-20 h-24 object-cover mb-5" src={maxsulotyoq} alt="" />
              <h3 className="text-2xl font-extrabold mb-4">Ваша корзина на данный момент пуста.</h3>
              <p className="text-base mb-5">Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину. На странице "Каталог" вы найдете много интересных товаров.</p>
              <Link to='/katalog/krasofka' className='px-7 py-6 bg-black rounded-md text-white text-sm'>Перейти в каталог</Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Korzinka;
