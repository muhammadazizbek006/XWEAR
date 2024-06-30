import React from "react";

const Kontackt = () => {
  return (
    <>
      <section className="pt-12 pb-28">
        <div className="containerb">
          <h2 className="text-3xl font-black mb-14">Наши контакты</h2>
          {/* напишите нам */}
          <div>
            <h3 className="text-2xl font-extrabold mb-5">напишите нам</h3>
            <form action="">
              <div className="mb-8">
                {/* Ваше имя: */}
                <input className="bg-slate-100 w-[312px] py-4 pl-5 rounded-md mr-8" type="text" placeholder="Ваше имя:" />
                <input className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md"  type="email" placeholder="Ваш email:" />
              </div>

              <div className="flex flex-col mb-8">
                <input className="bg-slate-100 w-[666px] py-4 pl-5 rounded-md mb-8" type="tel"   placeholder="Номер телефона:"/>
                <textarea  className="bg-slate-100 w-[666px] py-4 pl-5 rounded-md resize-none" placeholder="Текст сообщения:"></textarea>
              </div>
              <button className="bg-black text-white py-6 px-12 rounded-md">Задать вопрос</button>
            </form>
          </div>
          {/* Связаться с нами */}
        </div>
      </section>
    </>
  );
};

export default Kontackt;
