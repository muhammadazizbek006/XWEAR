import React from "react";


const AksiyaProduct = () => {
  return (
    <section className="py-12">
      <div className="containerb">
        {/* top */}
        <div>
          <h2 className="text-4xl  font-bold">Замечательные акции и скидки!</h2>
          <p>
            Мы объявили различные скидки, чтобы создать для вас удобство. Теперь
            вы можете приобрести ваши любимые товары по еще более низким ценам!
          </p>
          <div className="mb-4">
            <h3 className="mb-3 font-semibold text-xl">Скидки:</h3>
            <p className="text-base font-medium">
              20% скидка на всю одежду. <br />
              10% скидка на бытовую технику. <br />
              30% скидка на косметику.
            </p>
          </div>
          {/*  */}
          <div>
            <h3 className="mb-3 font-semibold text-xl">
              Специальные предложения:
            </h3>
            <p>
              15% скидка на каждый третий товар. <br />
              Бесплатная доставка при покупке на сумму свыше 100,000 сум.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AksiyaProduct;
