import React from "react";
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";

// data
import catalog from "../data/data";
import { Link } from "react-router-dom";

// img
import logo from "../img/logo.svg";
import like from '../img/like.svg'
import shop from "../img/headshop.svg";
import linkmenyu from "../img/linkmenyu.svg";

  // like snacbar
import { addProductToWishlist } from "../store/slice/productsWishlistDataSlice";
import { useSelector } from "react-redux";

const Header = () => {

  const [openLeft, setOpenLeft] = React.useState(false);

  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);

  const Closedraw = () => {
    setOpenLeft(false)
  }
  const productliked = useSelector(
    (store) => store.likemaxsulotlar.data
  );

  const tanlanganMahsulotlar = useSelector(
    (store) => store.tanlanganMahsulotlar.data
  );
  return (
    <header className="py-10 bg-black">
      <div className="containerb flex items-center justify-between">
        <div className="flex">
          {/* logo */}
          <Link className="mr-14" to="/">
            <img src={logo} alt="logo" />
          </Link>

          <button onClick={openDrawerLeft} className="inline-block sm:hidden">
            <img src={linkmenyu} alt="menyu" />
          </button>
        </div>

        {/* center */}
        <div className="flex space-x-12 items-center">
        
            <ul className="flex   md:space-x-5 lg:space-x-8 xl:space-x-12 items-center">
              {catalog.links.map((e) => {
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
          {/* )} */}
        </div>
        {/* right */}
        <div className="flex items-center space-x-8">

          <Link className="w-5 relative" to='/yoqtrilganlar'>
            <img src={like} alt="reyting" />
            <span className="bg-white absolute  px-2 -top-2 -right-4 rounded-full">{productliked.length}</span>
          </Link>

          <Link className=" relative" to='/korzinka'>
            <img src={shop} alt="shop" />
            <span className="bg-white absolute  px-2 -top-2 -right-4 rounded-full">{tanlanganMahsulotlar.length}</span>
          </Link>
        </div>
      </div>
      <Drawer
        placement="left"
        open={openLeft}
        onClose={closeDrawerLeft}
        className="fixed top-0 left-0 h-full w-full z-50 p-5 bg-black text-white"
        overlayProps={{ className: "bg-black bg-opacity-0" }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6 flex items-center justify-between  ">
          <Link to='/'>
            <img onClick={closeDrawerLeft} className='w-10' src={logo} alt="logo" />
          </Link>
          <button
            className="right-0"
            variant="text"
            color="blue-gray"
            onClick={Closedraw}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

        </div>

        <div className='flex flex-col space-y-6 text-sm font-bold'>
          <Link to='/' onClick={closeDrawerLeft}>Главная</Link>
          {catalog.links.map((e) => (
            <Link  className='' key={e.id} to={e.URL} onClick={closeDrawerLeft}>
              {e.link}
            </Link>
          ))}
        </div>

      </Drawer>
    </header>
  );
};

export default Header;
