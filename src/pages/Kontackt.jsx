import React, { useState, useEffect } from "react";
import axios from "axios";
// img
import week from '../img/kontackt/week.svg'
import telegram from '../img/kontackt/telegram.svg'
import whatsapp from '../img/kontackt/whatsapp.svg'
import { kontackt } from "../data/data";
import kok from '../img/kontackt/kok.svg'

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

  const handleSubmitInput = (event) =>  {
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
            <form onSubmit={handleSubmitInput} className="flex flex-col items-center sm:items-start" action="">
              <div className=" flex flex-col items-center xl:flex-row space-y-4 xl:space-y-0 mb-8">
                {/* Ваше имя: */}
                <input required onChange={handleName}
                    value={name} className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md lg:mr-8 border-2 border-[#c2c6d1]" type="text" placeholder="Ваше имя:" />
                <input required onChange={handleEmail}
                    value={email} className="bg-slate-100 w-[320px] py-4 pl-5 rounded-md border-2 border-[#c2c6d1]"  type="email" placeholder="Ваш email:" />
              </div>

              <div className="flex flex-col mb-8">
                <input required onChange={handlePhone}
                    value={phone} className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md mb-8 border-2 border-[#c2c6d1]" type="tel"   placeholder="Номер телефона:"/>
                <textarea required onChange={handleMessage}
                    value={message}  className="bg-slate-100 w-[320px] xl:w-[666px] py-4 pl-5 rounded-md resize-none border-2 border-[#c2c6d1]" placeholder="Текст сообщения:"></textarea>
              </div>
              <button className="bg-black mb-5 md:mb-0   text-white h-[66px] w-[230px] rounded-md">Задать вопрос</button>
            </form>
          </div>
          {/* Связаться с нами */}
          <div className="flex flex-col items-center text-center">
            <h3 className="font-extrabold text-xl xl:text-2xl mb-2">Связаться с нами</h3>
            <p className=" text-sm lg:text-base mb-5">Вы можете связаться с нами любым удобным для вас способом:</p>
            <ul className="grid grid-cols-2 gap-x-16 gap-8 mb-9">
              {
                kontackt.map((e)=>{
                  return(
                    <li className="flex max-w-[198px]">
                      <div className="relative mr-5">
                        <img className="z-50 relative w-6"  src={e.img} alt={e.title} />
                        <img className="absolute z-0 top-1 -right-2" src={kok} alt="" />
                      </div>
                      {/* malumot */}
                      <div>
                        <p className="text-base font-semibold">{e.title}</p>
                        <a href="">{e.malumot}
                          
                        </a>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 ">
             
              <a className="flex pl-3 space-x-4 items-center   lg:px-8 border-2 sm:mr-5 border-blue-500 rounded-md w-72 h-14" href="https://t.me/umarov_dev">
                <img  src={telegram} alt="telegram" />
                <p className="text-sm font-extrabold">Написать в Telegram</p>
              </a>
             
              <a className="flex pl-3 space-x-4 items-center  lg:px-8 border-2 border-lime-400 rounded-md  w-72 h-14" href="https://wa.me/+998914750612">
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
