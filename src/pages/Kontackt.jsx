import React, { useState, useEffect } from "react";
import axios from "axios";
// img
import week from '../img/kontackt/week.svg'
import telegram from '../img/kontackt/telegram.svg'
import whatsapp from '../img/kontackt/whatsapp.svg'

const Kontackt = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setMessage] = useState("");

  
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setphone(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    // setNameSend("");
    // setEmailSend("");
    // setMessageSend("");
    // setcontextSend("");
    // setSubjectSend("");
    if (name == "" || email == "" || phone == "" || message == "") {
      alert("Iltimos malumotni to'ldiring");
    } else {
      //   setSubject(false);
      const telegram_bot_id = "7474706019:AAHwOjFku-IDBC6KcJXtL1XL4gIzRg4eTRk";
      const chat_id = "6932003276";

      const telegramMessage = `Name: ${name}\nEmail: ${email}\nPhone Number : ${phone}\nMessage: ${message}`;

      axios

        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setEmail("");
          setphone("");
          setMessage("");
        });
      alert("Malumot yuborildi");
    }
  };
  return (
    <>
      <section className="pt-12 pb-28">
        <div className="containerb flex flex-col md:flex-row justify-between items-center">
          {/* напишите нам */}
          <div className="mr-2">
            <h2 className=" text-xl sm:text-3xl font-black mb-14">Наши контакты</h2>
            <h3 className=" text-base sm:text-2xl font-extrabold mb-5">напишите нам</h3>
            <form onSubmit={handleSubmitInput} className="flex flex-col items-center" action="">
              <div className=" flex flex-col items-center xl:flex-row space-y-4 xl:space-y-0 mb-8">
                {/* Ваше имя: */}
                <input onChange={handleName}
                    value={name} className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md md:mr-8" type="text" placeholder="Ваше имя:" />
                <input onChange={handleEmail}
                    value={email} className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md"  type="email" placeholder="Ваш email:" />
              </div>

              <div className="flex flex-col mb-8">
                <input onChange={handlePhone}
                    value={phone} className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md mb-8" type="tel"   placeholder="Номер телефона:"/>
                <textarea onChange={handleMessage}
                    value={message}  className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md resize-none" placeholder="Текст сообщения:"></textarea>
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
             
              <a className="flex space-x-4 items-center py-3 px-4 lg:px-8 border-2 sm:mr-5 border-blue-500 rounded-md" href="https://t.me/umarov_dev">
                <img src={telegram} alt="telegram" />
                <p className="text-sm font-extrabold">Написать в Telegram</p>
              </a>
             
              <a className="flex space-x-4 items-center py-3   px-4 lg:px-8 border-2 border-lime-400 rounded-md" href="https://wa.me/+998914750612">
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
