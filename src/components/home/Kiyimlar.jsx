import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// img
import next from '../../img/next.svg'
import reyting from '../../img/reytingb.svg'
import  { data } from "../../data/data";

// data


const Kiyimlar = () => {
    const [KatalogMahsulotlari, setKatalogMahsulotlari] = useState([]);
    useEffect(() => {
      const filteredProducts = data
        .filter((product) => {
          return product.type === "kiyim";
        })
        .slice(0, 4);
  
      setKatalogMahsulotlari(filteredProducts ? filteredProducts : []);
    }, []);
  return (
    <>
        <section className='pt-12  '>
            <div className="containerb ">
                {/* top */}
                <div className='flex flex-col sm:flex-row items-center justify-between mb-10'>
                    <h2 className='text-3xl font-bold'>Одежда</h2>
                    <Link to='/katalog/kiyim' className='flex items-center'>
                        <p className='mr-2 text-base'>больше товаров</p>
                        <img src={next} alt="next" />
                    </Link>
                </div>
                <div className='flex flex-col items-center sm:items-stretch'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 '>
                    {
                        KatalogMahsulotlari.map((e)=>{
                            return(
                                <li key={e.id} className=' bg-white pl-3 w-80 rounded-md sm:w-full'> 
                                    <Link to={`/product/${e.id}`} className='' >
                                    <div className=' flex flex-col items-end mb-3 '>
                                        <img className='mr-5  pt-5' src={reyting} alt={e.brend} />
                                        <img src={e.img} alt={e.title} />

                                    </div>
                                        <div>
                                            <p className='text-xl font-semibold  mb-4'>{e.title}</p>
                                            <p className='text-xl'> от  {e.narxi} ₽ </p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                </div>

            </div>
        </section>
    </>
  )
}

export default Kiyimlar