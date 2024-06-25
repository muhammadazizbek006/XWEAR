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
            <div className="containerb flex flex-col lg:flex-row items-center relative ">
                {/* left */}
                <div className=' max-w-[608px] xl:max-w-[748px]'>
                    <h2 className=' font-medium sm:font-semibold md:font-black text-4xl xl:text-5xl text-white mb-5'>Рассчитать стоимость</h2>
                    <p className='font-bold md:text-base xl:text-xl mb-6 text-white'>Если вам не удалось найти то, что искали, вы всегда можете воспользоваться автоматическим расчетом стоимость заказа на маркетплейсе Poizon, включая комиссию сервиса и доставку.</p>
                    <div className='flex flex-col sm:flex-row   items-center sm:items-start lg:space-x-14  mb-10 '>
                        {/* left */}
                        <div className='flex items-center mb-5' >
                            <img className='border-2 border-white py-5    px-6   xl:px-8  rounded-full mr-5'  src={bir} alt="bir" />
                            <p className='text-white text-sm  xl:text-base font-medium xl:font-semibold'>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                        </div>

                            {/* right */}
                        <div className='flex items-center' >
                            <img className='border-2 border-white  py-5    px-5  xl:px-8 rounded-full mr-5'  src={ikki} alt="bir" />
                            <p className='text-white text-sm  xl:text-base font-medium xl:font-semibold'>Подробная, пошаговая статья о том, как установить приложение Poizon</p>
                        </div>
                    </div>
                    <Link className='flex items-center bg-black w-64 py-6 pl-6 rounded-md'>
                        <p className='text-white font-extrabold mr-6 '>Рассчитать стоимость</p>
                        <img src={nextwhite} alt='next' />
                    </Link>
                </div>
                {/* right */}
                <img className='absolute -top-56 right-0 hidden lg:block lg:w-[500px] xl:w-[650px]' src={telefon} alt="telefon" />
            </div>
        </section>
    </>
  )
}

export default Raschitat