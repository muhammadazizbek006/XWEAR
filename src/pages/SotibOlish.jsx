import React from "react";

const SotibOlish = () => {
  return (
    <>
      <section className="">
        <div className="containerb">
          <h2 className="text-4xl font-semibold mb-6">Оформление заказа</h2>
          <form className="" action="">
            <ul>
              {/* left */}
              <li className="bg-white rounded-lg shadow-md p-12 w-[1014px]" >
                    {/* top */}
                    <div>
                    {/* telefotn F.I.O */}
                    <div className="flex justify-between">
                        {/* telefon */}
                        <div className="flex flex-col">
                        <label
                            className="text-sm font-medium text-labelcolor mb-4"
                            htmlFor=""
                        >
                            Телефон *
                        </label >
                        <input className="w-[452px] py-2 px-3 rounded-md border-2 border-[#c2c6d1] " type="tel" placeholder="+998" />
                        </div>
                        {/* F.I.O */}
                        <div className="flex flex-col">
                        <label  className="text-sm font-medium text-labelcolor mb-4" htmlFor=""> Ф.И.О *</label>
                        <input className="w-[452px] py-2 px-3 rounded-md border-2 border-[#c2c6d1] " type="tel" value={+998} />
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
