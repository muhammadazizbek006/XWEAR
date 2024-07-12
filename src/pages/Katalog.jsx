import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Drawer, IconButton } from "@material-tailwind/react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
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

import vector from '../img/vectorblack.svg'
import like from "../img/like2.svg";
import like3 from '../img/like3.svg';
import { useDispatch } from "react-redux";
import { addProductToLike } from "../store/slice/laykSlice";

const Katalog = () => {
  const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
  const [open, setOpen] = useState(0);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { type } = useParams();

  useEffect(() => {
    const filteredProducts = data.filter((product) => product.type === type);
    setKatalogMahsulotlari(filteredProducts ? filteredProducts : []);

    const uniqueCategories = [
      ...new Set(filteredProducts.map((product) => product.kategoria)),
    ];
    setCategories(uniqueCategories);

    const uniqueSizes = [
      ...new Set(filteredProducts.flatMap((product) => product.razmer)),
    ];
    setSizes(uniqueSizes);

    const uniqueBrands = [
      ...new Set(filteredProducts.map((product) => product.brend)),
    ];
    setBrands(uniqueBrands);

    const uniqueColors = [
      ...new Set(filteredProducts.flatMap((product) => product.rang)),
    ];
    setColors(uniqueColors);
  }, [type]);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const dispatch = useDispatch()

  const filteredProducts = KatalogMahsulotlari.filter((product) => {
    return (
      (selectedCategory ? product.kategoria === selectedCategory : true) &&
      (selectedSize ? product.razmer.includes(selectedSize) : true) &&
      (selectedBrand ? product.brend === selectedBrand : true) &&
      (selectedColor ? product.rang.includes(selectedColor) : true)
    );
  });

  const [openLeft, setOpenLeft] = useState(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  const Closedraw = () => setOpenLeft(false);

  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (product) => {
    const updatedLikedProducts = {
      ...likedProducts,
      [product.id]: !likedProducts[product.id],
    };
    setLikedProducts(updatedLikedProducts);
    dispatch(addProductToLike(product));
  };

  return (
    <>
      <section className="bg-white py-12 ">
        <Drawer
          placement="left"
          open={openLeft}
          onClose={closeDrawerLeft}
          className="fixed top-0 left-0 md:-left-12 h-full shadow-lg z-50 p-4 w-full max-w-[500px]"
          overlayProps={{ className: "bg-black bg-opacity-0" }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <div className="mb-12">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col items-start">
                  {open === 1 &&
                    categories.map((category, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(2)}>
                  Размеры (EU)
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="grid grid-cols-3 gap-3 mb-6">
                  {open === 2 &&
                    sizes.map((size, index) => (
                      <button
                        className="text-base font-semibold rounded border-2 px-8 py-2"
                        key={index}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(3)}>
                  Брэнды
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col items-start">
                  {open === 3 &&
                    brands.map((brand, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedBrand(brand)}
                      >
                        {brand}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 4}
                icon={<Icon id={4} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(4)}>
                  Цвета
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col items-start">
                  {open === 4 &&
                    colors.map((color, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </Drawer>

        <div className="containerb flex flex-col md:flex-row justify-between">
          <div className="mr-5">
            <button
              onClick={openDrawerLeft}
              className="w-80 h-16 block md:hidden border-2 rounded-md flex items-center justify-between px-2 border-gray-500"
            >
              <p className="text-xl font-extrabold">Открыть Фильтры</p>
              <img src={vector} alt="btn filter" />
            </button>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start">
                  {open === 1 &&
                    categories.map((category, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(2)}>
                  Размеры (EU)
                </AccordionHeader>
                <AccordionBody className="grid grid-cols-3 gap-3 mb-6">
                  {open === 2 &&
                    sizes.map((size, index) => (
                      <button
                        className="text-base font-semibold rounded border-2 px-8 py-2"
                        key={index}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(3)}>
                  Брэнды
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start">
                  {open === 3 &&
                    brands.map((brand, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedBrand(brand)}
                      >
                        {brand}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-gray-500"
                open={open === 4}
                icon={<Icon id={4} open={open} />}
              >
                <AccordionHeader className="" onClick={() => handleOpen(4)}>
                  Цвета
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start">
                  {open === 4 &&
                    colors.map((color, index) => (
                      <button
                        className="text-base font-semibold mb-5"
                        key={index}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                </AccordionBody>
              </Accordion>
            </div>
          </div>

          <div className="">
            {   filteredProducts.length > 0 ? (
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((e) => (
                  <li key={e.id} className="bg-white pl-3 relative w-80 sm:w-full">
                    <button
                      className="absolute right-2"
                      onClick={() => toggleLike(e)}
                    >
                      <img
                        src={likedProducts[e.id] ? like3 : like}
                        alt={e.brend}
                      />
                    </button>
                    <Link to={`/product/${e.id}`} className="block">
                      <div>
                        <img src={e.img} alt={e.title} />
                        <p className="text-base lg:text-xl">{e.title}</p>
                        <p>от {e.narxi} ₽</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-4xl">Нет такого товара</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Katalog;
