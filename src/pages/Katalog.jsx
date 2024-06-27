import React, { useEffect, useState } from "react";
import reyting from "../img/reytingb.svg";
import { Link, useParams } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { data } from "../data/data";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Katalog = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  const [open, setOpen] = useState(0);
  const [categories, setCategories] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const filteredProducts = data.filter((product) => product.type === type);
    setKatalogMahsulotlari(filteredProducts ? filteredProducts : []);

    const uniqueCategories = [
      ...new Set(filteredProducts.map((product) => product.kategoria)),
    ];
    setCategories(uniqueCategories);
  }, [type]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section className="bg-white pt-12">
        <div className="containerb flex">
          {/* left */}
          <div className="mr-7">
            {/* kategoria */}
            <div className="mb-12">
              <Accordion
                className="w-[318px] border-2 rounded-md pt-4 px-4 border-gray-500"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="mb-5" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start">
                  {open === 1 &&
                    categories.map((category, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                      >
                        {category}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
            {/* razmer */}
            <div>
              <Accordion
                className="w-[318px] border-2 rounded-md pt-4 px-4 border-gray-500"
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader className="mb-5" onClick={() => handleOpen(2)}>
                  Размеры (EU)
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start">
                  {open === 2 &&
                    categories.map((category, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                      >
                        {category}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          {/* o'rta */}
          <div>
            {/* maxsulotlar */}
            <ul className="grid grid-cols-3 gap-x-8 gap-y-12">
              {KatalogMahsulotlari.map((e) => (
                <li key={e.id} className="bg-white pl-3 w-80 sm:w-full">
                  <Link className="">
                    <div className="flex flex-col items-end mb-3">
                      <img className="mr-5 pt-5" src={reyting} alt={e.brend} />
                      <img src={e.img} alt={e.title} />
                    </div>
                    <div>
                      <p className="text-xl">{e.title}</p>
                      <p> от {e.narxi} ₽ </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Katalog;
