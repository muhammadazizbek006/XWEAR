import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SotibOlish = () => {
  const [name, setName] = useState("");
  const [oblast, setoblast] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [ishadress, setishadress] = useState("");
  const [message, setMessage] = useState("");

  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handlePhone = (event) => {
    setphone(event.target.value);
  };
  const handleoblast = (event) => {
    setoblast(event.target.value);
  };
  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const handleemail = (event) => {
    setemail(event.target.value);
  };
  const handleadress = (event) => {
    setishadress(event.target.value);
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    if (name === "" || oblast === "" || phone === "" || message === "" || email === "" || ishadress === "") {
      alert("Iltimos malumotni to'ldiring");
    } else {
      const telegram_bot_id = "7474706019:AAHwOjFku-IDBC6KcJXtL1XL4gIzRg4eTRk";
      const chat_id = "6932003276";

      const telegramMessage = `Name: ${name}\noblast: ${oblast}\nPhone Number : ${phone}\nMessage: ${message}\nemail: ${email}\nishadress: ${ishadress}`;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setoblast("");
          setphone("");
          setMessage("");
          setemail("");
          setishadress("");
        });
      alert("Malumot yuborildi");
    }
  };

  return (
    <>
      <section className="py-12">
            <h2 className="text-4xl font-semibold mb-6 containerb">Оформление заказа</h2>
        <div className="containerb flex justify-between">
          {/* Оформление заказа */}
          <div className="w-[70%]">
            <form onSubmit={handleSubmitInput}>
              <ul>
                <li className="bg-white rounded-lg shadow-md p-12">
                  <div>
                    <div className="flex justify-between mb-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Телефон *
                        </label>
                        <input
                          onChange={handlePhone}
                          value={phone}
                          required
                          className="w-[452px] py-2 px-3 rounded-md border-2 border-[#c2c6d1]"
                          type="tel"
                          placeholder="+998"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Ф.И.О *
                        </label>
                        <input
                          onChange={handleName}
                          value={name}
                          required
                          className="w-[452px] py-2 px-3 rounded-md border-2 border-[#c2c6d1]"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mb-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Область *
                        </label>
                        <select
                          onChange={handleoblast}
                          value={oblast}
                          required
                          className="w-[452px] pt-2 pb-3 px-3 rounded-md border-2 border-[#c2c6d1]"
                        >
                          <option disabled value="Выберите">
                            Выберите
                          </option>
                          <option value="Город Ташкент">Город Ташкент</option>
                          <option value="Андижанская область">Андижанская область</option>
                          <option value="Навоийская область">Навоийская область</option>
                          <option value="Самаркандская область">Самаркандская область</option>
                          <option value="Наманганская область">Наманганская область</option>
                          <option value="Ферганская область">Ферганская область</option>
                          <option value="Джизакская область">Джизакская область</option>
                          <option value="Бухарская область">Бухарская область</option>
                          <option value="Кашкадарьинская область">Кашкадарьинская область</option>
                          <option value="Сурхандарьинская область">Сурхандарьинская область</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Адрес *
                        </label>
                        <input
                          onChange={handleemail}
                          value={email}
                          required
                          className="w-[452px] py-2 px-3 rounded-md border-2 border-[#c2c6d1]"
                          type="email"
                          placeholder="Выберите Адрес"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between mb-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Комментарий к заказу
                        </label>
                        <textarea
                          onChange={handleMessage}
                          value={message}
                          className="w-[452px] pt-2 pb-3 px-3 rounded-md border-2 border-[#c2c6d1] resize-none"
                        ></textarea>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-labelcolor mb-1" htmlFor="">
                          Ваш рабочий адрес
                        </label>
                        <textarea
                          onChange={handleadress}
                          value={ishadress}
                          className="w-[452px] pt-2 pb-3 px-3 rounded-md border-2 border-[#c2c6d1] resize-none"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button className="px-8 py-3 bg-black text-white rounded-md mr-4">Заказать</button>
                      <Link className="px-8 pt-3 pb-4 text-base hover:bg-black hover:text-white duration-500 rounded-md" to="/">
                        Назад
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
          {/* Ваши выбранные товары */}
          <div className="w-[20%] bg-white rounded-lg shadow-md p-6 flex flex-col  ">
            <h3 className="text-base font-semibold mb-4">В корзине {tanlanganMahsulotlar.length} товара</h3>
            <ul>
              {tanlanganMahsulotlar.map((product) => (
                <li key={product.id} className="flex  justify-between mb-4">
                  <div className="inline-block mr-4">
                    <img className="w-20 h-20 " src={product.img} alt={product.title} />

                  </div>
                  <div>
                    <h4 className="text-base ">{product.title}</h4>
                    <div className="flex">
                      <p className="text-sm mr-3">{product.brend}</p>
                      <p className="text-sm">{product.narxi} ₽</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SotibOlish;
