import React from 'react'
import { Link } from 'react-router-dom'
// img
import xwear from '../img/footer/xwear.svg'
import telegram from '../img/footer/telegram.svg'
import whatsapp from '../img/footer/whatsapp.svg'
import week from '../img/footer/week.svg'

const Footer = () => {
  return (
    <>
      <section className='bg-black pt-11 pb-12'>
        <div className="containerb grid grid-cols-2 sm:grid-cols-3  ">
          {/* katalog */}
          <div className='text-white'>
            <div className=' flex flex-col space-y-2 mb-14'>
               <h3 className='text-base font-black  '>Каталог</h3>
               <Link to='/katalog/kiyim' className='text-base'>Одежда</Link>
               <Link to='/katalog/krasofka'  className='text-base'>Обувь</Link>
               <Link to='/katalog/acsesuar'  className='text-base'>Аксессуары</Link>
               <Link to='/katalog/kiyim'  className='text-base' >Расчет стоимости</Link>
            </div>
            <img src={xwear} alt="" />
          </div>
          
          {/* Информация */}
           <div className='text-white'>
            <div className=' flex flex-col space-y-2 mb-14'>
               <h3 className='text-base font-black  '>Информация</h3>

               <Link to='/kontackt'  className='text-base'>Контакты</Link>
               <Link  className='text-base'>Доставка</Link>

               <Link to='/faq'  className='text-base' >FAQ</Link>

            </div>

          </div>

        {/* Контакты */}
          <div className='text-white'>
            <div className=' flex flex-col space-y-2 mb-14'>
               <h3 className='text-base font-black  '>Контакты</h3>
              <a href="email">info@xwear.info</a>
              <p>+7 993 608 38 85</p>
              {/* Мессенджеры */}
              <div >
                <h4 className='mb-2'>Мессенджеры</h4>
                <div className='flex space-x-4'>
                <a href="">
                  <img src={telegram} alt="telegram" />
                </a>

                <a href="">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                </div>
  
              </div>
              {/* Наши соц.сети */}
              <div>
                <h4 className='mb-2'>Наши соц.сети</h4>
                <img src={week} alt="week" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Footer