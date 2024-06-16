import React, { useState } from 'react';
// data 
import { links } from '../data/data';
import { Link } from 'react-router-dom';
// img
import logo from '../img/logo.svg';
import searchIcon from '../img/search.svg'; // search nomi bilan conflict bo'lmasligi uchun o'zgartirdim
import reyting from '../img/reyting.svg';
import shop from '../img/shop.svg';

const Header = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const onSearch = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <header className='py-10 bg-black'>
      <div className="containerb flex items-center justify-between">
        {/* logo */}
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
        {/* center */}
        <div className='flex space-x-12 items-center'>
          {
            showSearchInput ? (
              <input type="serach" className=" border-2 p-4  pl-7 pr-[624px] rounded-full text-white bg-transparent" placeholder="Поиск по каталогу товаров..." />
            ) : (
              <ul className='flex space-x-12 items-center'>
                {
                  links.map((e) => {
                    return (
                      <li className='text-white text-sm font-semibold flex' key={e.id}>
                        <Link to={e.URL}>{e.link}</Link>
                      </li>
                    );
                  })
                }
              </ul>
            )
          }
        </div>
        {/* right */}
        <div className='flex items-center space-x-8'>
          <Link onClick={onSearch}>
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
}

export default Header;
