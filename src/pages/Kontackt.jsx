import React from "react";
// img
import week from '../img/kontackt/week.svg'
import telegram from '../img/kontackt/telegram.svg'
import whatsapp from '../img/kontackt/whatsapp.svg'

const Kontackt = () => {
  return (
    <>
      <section className="pt-12 pb-28">
        <div className="containerb flex flex-col md:flex-row justify-between items-center">
          {/* напишите нам */}
          <div className="mr-2">
            <h2 className=" text-xl sm:text-3xl font-black mb-14">Наши контакты</h2>
            <h3 className=" text-base sm:text-2xl font-extrabold mb-5">напишите нам</h3>
            <form className="flex flex-col items-center" action="">
              <div className=" flex flex-col items-center xl:flex-row space-y-4 mb-8">
                {/* Ваше имя: */}
                <input className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md md:mr-8" type="text" placeholder="Ваше имя:" />
                <input className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md"  type="email" placeholder="Ваш email:" />
              </div>

              <div className="flex flex-col mb-8">
                <input className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md mb-8" type="tel"   placeholder="Номер телефона:"/>
                <textarea  className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md resize-none" placeholder="Текст сообщения:"></textarea>
              </div>
              <button className="bg-black mb-5 md:mb-0   text-white py-6 px-12 rounded-md">Задать вопрос</button>
            </form>
          </div>
          {/* Связаться с нами */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-extrabold text-xl xl:text-2xl mb-2">Связаться с нами</h3>
            <p className=" text-sm lg:text-base mb-5">Вы можете связаться с нами любым удобным для вас способом:</p>
            <ul className="grid grid-cols-2 gap-x-16 gap-8 mb-9">
              <li>
                <a href="">Телефон: <br /> +7 993 608 38 85</a>
              </li>
              <li>
                <a href="">Email: <br /> info@xwear.info </a>
              </li>
              <li>
                <a href="">График работы: <br /> Пн-Пт с 9:00 до 18:00 <br />
                Сб-Вс. Выходные</a>
              </li>
              <li>
                <a href="">
                  <p className="mb-2">Наши соц.сети:</p>
                  <img src={week} alt="week" />
                </a>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 ">
             
              <a className="flex space-x-4 items-center py-3 px-4 lg:px-8 border-2 sm:mr-5 border-blue-500 rounded-md" href="">
                <img src={telegram} alt="telegram" />
                <p className="text-sm font-extrabold">Написать в Telegram</p>
              </a>
             
              <a className="flex space-x-4 items-center py-3   px-4 lg:px-8 border-2 border-lime-400 rounded-md" href="">
                <img src={whatsapp} alt="telegram" />
                <p className="text-sm font-extrabold">Написать в Telegram</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontackt;
