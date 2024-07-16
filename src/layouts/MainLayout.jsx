import React from 'react'

import { useEffect  } from "react";
import Header from "../components/Header";
import { Outlet, useLocation,  } from "react-router-dom";
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const path = location.pathname;
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <main className='grow bg-slate-100'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout