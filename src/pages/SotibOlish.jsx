import React from "react";

const SotibOlish = () => {
  return (
    <>
      <section className="bg-[#f4f7fd]">
        <div className="containerb">
          <h2 className="text-4xl font-semibold">Оформление заказа</h2>
          <form className="" action="">
            <ul>
              {/* left */}
              <li className="bg-white shadow-md p-12">
                    {/* top */}
                    <div>
                    {/* telefotn F.I.O */}
                    <div className="flex">
                        {/* telefon */}
                        <div className="flex flex-col">
                        <label
                            className="text-sm font-medium text-labelcolor mb-4"
                            htmlFor=""
                        >
                            Телефон *
                        </label>
                        <input type="tel" value={+998} />
                        </div>
                        {/* F.I.O */}
                        <div>
                        <label htmlFor=""> Ф.И.О *</label>
                        <input type="tel" value={+998} />
                        </div>
                    </div>
                    </div>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </>
  );
};

export default SotibOlish;
