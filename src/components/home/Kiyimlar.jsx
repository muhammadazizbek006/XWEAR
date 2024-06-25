import React from 'react'
import { Link } from 'react-router-dom'
// img
import next from '../../img/next.svg'
import reyting from '../../img/reytingb.svg'
// data
import { kiyimlar } from '../../data/data'

const Kiyimlar = () => {
    const slised = kiyimlar.slice(0, 4)

  return (
    <>
        <section className='pt-12  '>
            <div className="containerb ">
                {/* top */}
                <div className='flex flex-col sm:flex-row items-center justify-between mb-10'>
                    <h2 className='text-3xl font-bold'>Одежда</h2>
                    <Link className='flex items-center'>
                        <p className='mr-2 text-base'>больше товаров</p>
                        <img src={next} alt="next" />
                    </Link>
                </div>
                <div className='flex flex-col items-center sm:items-stretch'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 '>
                    {
                        slised.map((e)=>{
                            return(
                                <li key={e.id} className=' bg-white pl-3 w-80 rounded-md sm:w-full'> 
                                    <Link className='' >
                                    <div className=' flex flex-col items-end mb-3 '>
                                        <img className='mr-5  pt-5' src={reyting} alt={e.brend} />
                                        <img src={e.img} alt={e.title} />

                                    </div>
                                        <div>
                                            <p className='text-xl'>{e.title}</p>
                                            <p> от  {e.narxi} ₽ </p>
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