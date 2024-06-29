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
              <div>
                {/* Ваше имя: */}
                <input type="text" placeholder="Ваше имя:" />
                <input type="email" placeholder="Ваш email:" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontackt;
