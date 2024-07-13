import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Drawer, IconButton, input } from "@material-tailwind/react";
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

import { addProductToLike } from "../store/slice/laykSlice";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishlist } from "../store/slice/productsWishlistDataSlice";

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

  // maxsulotlarni korzinkaga qo'shish


  const mahsulotniWishlistgaQoshish = (product) => {
    dispatch(addProductToWishlist(product));
  };
  return (
    <>
      <section className="bg-white py-12 ">
        {/* draw */}
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col  space-y-5 items-start">
                  {open === 1 &&
                    categories.map((category, index) => (
                      <button
                        className="text-sm font-semibold "
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(2)}>
                  Размеры (EU)
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="grid grid-cols-3 gap-3 mb-6">
                  {open === 2 &&
                    sizes.map((size, index) => (
                      <button
                        className="text-sm font-semibold rounded border-2 px-8 py-2"
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(3)}>
                  Брэнды
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col items-start">
                  {open === 3 &&
                    brands.map((brand, index) => (
                      <button
                        className="text-sm font-medium mb-5"
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 4}
                icon={<Icon id={4} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(4)}>
                  Цвета
                </AccordionHeader>
                <AccordionBody onClick={closeDrawerLeft} className="flex flex-col items-start">
                  {open === 4 &&
                    colors.map((color, index) => (
                      <button
                        className="text-sm font-medium "
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

        {/* filter va maxsulotlar */}
        <div className="containerb flex flex-col md:flex-row justify-between">
          <div className="mr-5">
            <button
              onClick={openDrawerLeft}
              className="w-80 h-16 block md:hidden border-2 rounded-md flex items-center justify-between px-2 mb-5 border-[#E6E7EB]"
            >
              <p className="text-xl font-extrabold">Открыть Фильтры</p>
              <img src={vector} alt="btn filter" />
            </button>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 1}
                icon={<Icon id={1} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(1)}>
                  Категории
                </AccordionHeader>
                <AccordionBody className="flex flex-col items-start space-y-5">
                  {open === 1 &&
                    categories.map((category, index) => (
                      <button
                        className="text-sm font-medium"
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 2}
                icon={<Icon id={2} open={open} />}
              >
                <AccordionHeader className="text-sm font-black" onClick={() => handleOpen(2)}>
                  Размеры (EU)
                </AccordionHeader>
                <AccordionBody className="grid grid-cols-3 gap-3 mb-6">
                  {open === 2 &&
                    sizes.map((size, index) => (
                      <button
                        className="text-sm  font-medium rounded border  py-2"
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
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
                open={open === 3}
                icon={<Icon id={3} open={open} />}
              >
                <AccordionHeader className="text-sm font-semibold" onClick={() => handleOpen(3)}>
                  Брэнды
                </AccordionHeader>
                <AccordionBody className="flex flex-col space-y-5 items-start">
                  {open === 3 &&
                    brands.map((brand, index) => (
                      <div onClick={() => setSelectedBrand(brand)} className="flex items-center" key={index}> 
                          <input  className="mr-3 w-5 h-5" type="checkbox" />
                          <label htmlFor="brand">{brand}</label>
                      </div>

                    ))}
                </AccordionBody>
              </Accordion>
            </div>

            <div className="mb-12 hidden md:block">
              <Accordion
                className="md:w-60 xl:w-[318px] border-2 rounded-md px-4 border-[#E6E7EB]"
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
                        className="text-sm font-medium mb-5"
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

          <div className="flex flex-col items-center">
            {   filteredProducts.length > 0 ? (
              <ul className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                {filteredProducts.map((e) => (
                  <li key={e.id} className="bg-white pl-3 relative w-80 sm:w-full">
                    <button
                      className="absolute right-7"
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
                      </div>
                    </Link>
                    <div className="flex  justify-around items-start">
                      <div className="">
                        <p className="text-base lg:text-xl">{e.title}</p>
                        <p>от {e.narxi} ₽</p>

                      </div>
                      <button onClick={() => mahsulotniWishlistgaQoshish(e)}>
                      <svg width="28" height="26" viewBox="0 0 18 16" fill="black" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.0905 2.91311H16.7397C17.2062 2.91311 17.5482 3.35211 17.4353 3.80391L15.9785 9.63048C15.9025 9.93446 15.6378 10.1539 15.3251 10.1723L3.86762 10.8456C4.07245 11.3243 4.54702 11.6529 5.09162 11.6529H13.0982C14.2967 11.6529 15.2717 12.628 15.2717 13.8264C15.2717 15.0249 14.2967 16 13.0982 16C11.5964 16 10.5406 14.502 11.0544 13.0868H7.13056C7.645 14.5038 6.58692 16 5.08677 16C3.27933 16 2.26409 13.9081 3.37522 12.4891C2.75894 12.0009 2.40119 11.2825 2.34268 10.6204C1.43419 0.498541 1.47444 0.946953 1.55953 1.89506L1.56008 1.9012C1.61714 2.53699 1.6934 3.38676 1.51811 1.43385H0.716927C0.320978 1.43385 0 1.11288 0 0.716927C0 0.320978 0.320978 0 0.716927 0H2.17355C2.54465 0 2.85443 0.28322 2.88761 0.652847L3.0905 2.91311ZM4.3471 13.8264C4.3471 14.2343 4.67894 14.5661 5.08677 14.5661C5.49463 14.5661 5.82647 14.2343 5.82647 13.8264C5.82647 13.4186 5.49463 13.0868 5.08677 13.0868C4.67894 13.0868 4.3471 13.4186 4.3471 13.8264ZM13.0982 14.5661C12.6903 14.5661 12.3585 14.2343 12.3585 13.8264C12.3585 13.4186 12.6903 13.0868 13.0982 13.0868C13.506 13.0868 13.8379 13.4186 13.8379 13.8264C13.8379 14.2343 13.506 14.5661 13.0982 14.5661ZM3.67463 9.42062L14.7152 8.77181L15.8215 4.34693H3.21921L3.67463 9.42062Z" fill="black"/>
                      </svg>
                      </button>
                    </div>

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
