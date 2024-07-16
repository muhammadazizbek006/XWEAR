import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// img
import maxsulotyoq from "../img/korzinka/maxsulotyoq.png";
import { deleteUserOfferLinkData } from "../store/slice/productsWishlistDataSlice";
import minus from '../img/counter/minus.png'
import pilus from '../img/counter/pilus.png'

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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = tanlanganMahsulotlar.reduce((acc, product) => {
      return acc + product.narxi * counts[product.id];
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [counts, tanlanganMahsulotlar]);

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
      <section className="py-10 relative bg-slate-100 ">
        {tanlanganMahsulotlar.length > 0 ? (
          <div className="containerb ">
            <div>
              <h2 className="text-3xl font-black mb-4">Рассчитать стоимость</h2>
              <div className="text-base font-medium max-w-[1013px] mb-10 ">
                <p className="mb-9">
                  Мы ежедневно добавляем новые товары на сайт, но если вам не
                  удалось найти то, что искали, вы всегда можете воспользоваться
                  автоматическим расчетом стоимость заказа на маркетплейсе
                  Poizon, включая комиссию сервиса и доставку. Если у вас еще
                  нет приложения Poizon, тогда можете посмотреть статью ниже. В
                  приложении есть любые кроссовки и одежда дешевле на 40% чем в
                  РФ.
                </p>
                <p>
                  Если вы не хотите устанавливать приложение, вы всегда можете
                  написать нам в Telegram или WhatsApp, какую вещь хотите
                  купить. Для этого напишите ее название или пришлите фотографию
                  к нам в чат. Наши операторы сами найдут нужный вам товар и
                  рассчитают его стоимость.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start">
                <ul className="bg-white shadow drop-shadow-md rounded-lg py-3 px-2 sm:px-8 w-full md:w-4/6 md:mr-12 mb-8 md:mb-0">
                  {tanlanganMahsulotlar.map((e) => (
                    <li
                      key={e.id}
                      className="flex justify-between items-center border-b-2 relative"
                    >
                      <div className="flex flex-col lg:flex-row items-center">
                        <div className="mr-4">
                          <img className="w-32 h-32" src={e.img} alt="" />
                        </div>
                        <div>
                          <h3 className="text-sm lg:text-base font-medium sm:font-semibold mb-2">
                            {e.title}
                          </h3>
                          <span className="text-sm lg:text-base font-medium sm:font-semibold">
                            {e.brend}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 top-4 right-16 absolute sm:static">
                        <button onClick={() => decrement(e.id)} className="">
                          <img src={minus} alt="" />
                        </button>
                        <span className="mx-2">{counts[e.id]}</span>
                        <button onClick={() => increment(e.id)} className="">
                          <img src={pilus} alt="" />
                        </button>
                      </div>
                      <div>
                        <p className="text-base">
                          <span className="text-sm sm:text-base font-medium sm:font-semibold">
                            категория:
                          </span>{" "}
                          {e.kategoria}
                        </p>
                        <p className="text-base">
                          <span className="text-sm sm:text-base font-medium sm:font-semibold">
                            расходы:
                          </span>{" "}
                          {e.narxi} ₽
                        </p>
                      </div>
                      <div className="absolute lg:relative right-4 top-4">
                        <button onClick={() => handleDelete(e.id)} className="group">
                          <svg
                            fill="current color"
                            className="w-6 h-6 fill-current text-black group-hover:text-red-500 duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="30px"
                            height="30px"
                          >
                            <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z" />
                          </svg>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="bg-white drop-shadow-md shadow-lg py-8  h-48 rounded-md flex flex-col items-center w-56">
                  <p className="mb-3 lg:text-base font-semibold">
                    В корзине {tanlanganMahsulotlar.length} товара
                  </p>
                  <div className="text-center mb-4">
                    <p className="text-base font-medium">Общая сумма:</p>
                    <p className="text-base font-semibold">{totalPrice} ₽</p>
                  </div>
                  <Link
                    to="/sotibolish"
                    className="px-8 py-3 bg-black rounded-md text-white hover:bg-green-500 duration-500"
                  >
                    скручивание
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="containerb flex flex-col items-center">
            <div className="max-w-[637px] flex flex-col items-center text-center">
              <img
                className="w-20 h-24 object-cover mb-5"
                src={maxsulotyoq}
                alt=""
              />
              <h3 className="text-2xl font-extrabold mb-4">
                Ваша корзина на данный момент пуста.
              </h3>
              <p className="text-base mb-5">
                Прежде чем приступить к оформлению заказа, вы должны добавить
                некоторые товары в корзину. На странице "Каталог" вы найдете
                много интересных товаров.
              </p>
              <Link
                to="/katalog/krasofka"
                className="px-7 py-6 bg-black rounded-md text-white text-sm"
              >
                Перейти в каталог
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Korzinka;
