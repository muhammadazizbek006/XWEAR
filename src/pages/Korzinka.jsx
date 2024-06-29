import React from "react";
import { useSelector } from "react-redux";

const Korzinka = () => {
  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar
  );

  console.log(tanlanganMahsulotlar.data);

  return (
    <>
      <section className="py-10">
        <div className="containerb">
          <h2 className="text-3xl font-black mb-4">Рассчитать стоимость</h2>
          <div className="text-base font-medium max-w-[1013px] ">
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
        </div>
      </section>
    </>
  );
};

export default Korzinka;
