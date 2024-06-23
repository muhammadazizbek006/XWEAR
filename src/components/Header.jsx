import React, { useState } from "react";
// data
import { links } from "../data/data";
import { Link } from "react-router-dom";
// img
import logo from "../img/logo.svg";
import searchIcon from "../img/search.svg"; // search nomi bilan conflict bo'lmasligi uchun o'zgartirdim
import reyting from "../img/reyting.svg";
import shop from "../img/shop.svg";
import linkmenyu from "../img/linkmenyu.svg";

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <header className="py-10 bg-black">
      <div className="containerb flex items-center justify-between">
        <div className="flex">
          {/* logo */}
          <Link className="mr-14" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button className="inline-block md:hidden">
            <img src={linkmenyu} alt="menyu" />
          </button>
        </div>

        {/* center */}
        <div className="flex space-x-12 items-center">
          {showSearchInput ? (
            <input
              type="serach"
              className=" border-2 py-2  md:py-4 md:pr-80  lg:pr-[524px]  pl-7 xl:pr-[624px] hidden sm:block rounded-full text-white bg-transparent"
              placeholder="Поиск по каталогу товаров..."
            />
          ) : (
            <ul className="flex   md:space-x-5 lg:space-x-8 xl:space-x-12 items-center">
              {links.map((e) => {
                return (
                  <li
                    className="text-white text-sm hidden md:block  lg:font-semibold flex"
                    key={e.id}
                  >
                    <Link to={e.URL}>{e.link}</Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        {/* right */}
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Link className="hidden sm:block" onClick={onSearch}>
            <img src={searchIcon} alt="search" />
          </Link>
          <Link>
            <img src={reyting} alt="reyting" />
          </Link>
          <Link>
            <img src={shop} alt="shop" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
