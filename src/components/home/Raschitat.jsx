import React from 'react'
import { Link } from 'react-router-dom'
// img
import bir from '../../img/rachot/1.svg'
import ikki from '../../img/rachot/2.svg'
import telefon from '../../img/rachot/telefon.png'
import nextwhite from '../../img/nextwhite.svg'

const Raschitat = () => {
  return (
    <>
        <section className='raschitat pt-20 pb-72'>
            <div className="containerb flex relative ">
                {/* left */}
                <div className='max-w-[748px]'>
                    <h2 className='font-black text-5xl text-white mb-5'>Рассчитать стоимость</h2>
                    <p className='font-bold text-xl mb-6 text-white'>Если вам не удалось найти то, что искали, вы всегда можете воспользоваться автоматическим расчетом стоимость заказа на маркетплейсе Poizon, включая комиссию сервиса и доставку.</p>
                    <div className='flex  items-center space-x-14  mb-10 '>
                        {/* left */}
                        <div className='flex' >
                            <img className='border-2 border-white py-7 px-8 rounded-full mr-5'  src={bir} alt="bir" />
                            <p className='text-white text-base font-semibold'>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                        </div>

                            {/* right */}
                            <div className='flex' >
                            <img className='border-2 border-white py-7 px-8 rounded-full mr-5'  src={ikki} alt="bir" />
                            <p className='text-white text-base font-semibold'>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                        </div>
                    </div>
                    <Link className='flex items-center bg-black w-64 py-6 pl-6 rounded-md'>
                        <p className='text-white font-extrabold mr-6 '>Рассчитать стоимость</p>
                        <img src={nextwhite} alt='next' />
                    </Link>
                </div>
                {/* right */}
                <img className='absolute -top-56 right-0' src={telefon} alt="telefon" />
            </div>
        </section>
    </>
  )
}

export default Raschitat