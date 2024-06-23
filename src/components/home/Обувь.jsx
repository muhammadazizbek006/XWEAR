import React from 'react'
import { Link } from 'react-router-dom'
// img
import next from '../../img/next.svg'
import reyting from '../../img/reyting.svg'
// data
import { krasofkalar } from '../../data/data'
const Обувь = () => {
  return (
    <>
        <section className='pt-12'>
            <div className="containerb">
                {/* top */}
                <div className='flex justify-between'>
                    <h2 className='text-3xl font-bold'>Обувь</h2>
                    <Link className='flex items-center'>
                        <p className='mr-2 text-base'>больше товаров</p>
                        <img src={next} alt="next" />
                    </Link>
                </div>

                <ul className='grid grid-cols-4 gap-x-8'>
                    {
                        krasofkalar.map((e)=>{
                            return(
                                <li className='bg-white'> 
                                    <Link >
                                        <img src={reyting} alt={e.brend} />
                                        <img src={e.im} alt={e.title} />
                                        <div>
                                            <p>{e.title}</p>
                                            <p> OT {e.narxi} ₽ </p>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    </>
  )
}

export default Обувь