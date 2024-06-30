import React, { useState } from "react";
import { useSelector } from "react-redux";
// img
import delet from '../img/korzinka/delete.svg'

const Korzinka = () => {
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleDelete = (id) => {
    const updatedProducts = tanlanganMahsulotlar.filter(product => product.id !== id);
    useSelector(updatedProducts);
  };
  return (
    <>
      <section className="py-10">
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
            {tanlanganMahsulotlar &&
              tanlanganMahsulotlar.map((e) => (
                <li className="shadow-lg relative flex flex-col items-center text-center pb-6 rounded-md">
                  {/* delete */}
                  <button className="absolute  top-5 right-5" onClick={() => handleDelete(e.id)}>
                    <img className=" " src={delet} alt="delet" />  
                  </button>
                  <img className="" src={e.img} alt={e.title} />
                  <div>
                    <p>{e.brend}</p>
                    <p className="mb-6">{e.title}</p>
                   
                    <div className="flex items-center space-x-4  ">
                     <button
                      onClick={decrement}
                      className="px-6 text-3xl hover:bg-red-500 hover:text-white duration-300  bg-gray-200 text-gray-700 rounded"
                    >
                      - 
                    </button>
                    <span className="mx-2">{count}</span>
                    <button
                      onClick={increment}
                      className="px-6 text-2xl hover:bg-green-500 hover:text-white duration-300  bg-gray-200 text-gray-700 rounded"
                    >
                      +
                    </button>
                  </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Korzinka;

// <li key={e.id} className="border-y-2 border-dashed flex justify-between items-center ">
//   {/* title va img wrapper */}
//   <div className="flex items-center flex-col sm:flex-row mr-40 sm:mr-0">
//         {/* left */}
//     <div className="w-40 md:mr-40 lg:mr-60  ">
//     <img src={e.img} alt={e.title} />
//   </div>
//   {/* brend va title */}
//   <div>
//     <p className=" text-xs sm:text-base font-medium">{e.brend}</p>
//     <p className="text-xs sm:text-base   font-medium">{e.title}</p>
//   </div>
//   </div>

//   {/* qo'shish va ayrish */}
//   <div className="flex items-center space-x-4  ">
//     <button
//       onClick={decrement}
//       className="px-6 text-3xl hover:bg-red-500 hover:text-white duration-300  bg-gray-200 text-gray-700 rounded"
//     >
//       - 
//     </button>
//     <span className="mx-2">{count}</span>
//     <button
//       onClick={increment}
//       className="px-6 text-2xl hover:bg-green-500 hover:text-white duration-300  bg-gray-200 text-gray-700 rounded"
//     >
//       +
//     </button>
//   </div>
//   {/* delete */}
//   <button className="mb-auto sm:mb-0  top-2" onClick={() => handleDelete(e.id)}>
//     <img className=" " src={delet} alt="delet" />  
//   </button>
// </li>