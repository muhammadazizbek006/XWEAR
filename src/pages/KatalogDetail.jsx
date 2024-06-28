import { data } from '../data/data';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NashBlock from '../components/home/NashBlock'
// img
import reyting from '../img/reytingb.svg';
import next from '../img/nextwhite.svg'
const KatalogDetail = () => {
    const { id } = useParams();
    // id may be a string, convert it to a number if your data ids are numbers
    const [selectedSize, setSelectedSize] = useState(''); // State to track selected size
    const Detail = data.filter((e) => e.id.toString() === id);

    return (
        <>
            <section className='py-16'>
                <div className="containerb">
                    {/* maxsulot map */}
                    <ul>
                        {
                            Detail.map((e) => {
                                return (
                                    // maxsulot data map
                                    <li className='flex  ' key={e.id}>
                                        {/* left */}
                                        <div className='relative mr-12 max-w-[504px]'>
                                            <img className='right-12 absolute' src={reyting} alt='reyting' />
                                            <img className='w-[480px]  bg-transparent' src={e.img} alt={e.title} />
                                        </div>
                                        {/* right */}
                                        <div className=''>
                                            <h3 className='text-3xl mb-5 font-black'>{e.title}</h3>
                                            {/* razmer */}
                                            <div className='mb-7'>
                                                <p className='text-base mb-4 font-semibold'>EU размеры:</p>
                                                <div className='grid grid-cols-5 gap-6'>
                                                    {e.razmer.map((size, index) => (
                                                        <button
                                                            key={index}
                                                            className={`border-2 px-7 py-3 rounded text-base font-semibold ${
                                                                selectedSize === size ? 'border-blue-500 bg-blue-500 text-white' : 'border-black'
                                                            }`}
                                                            onClick={() => setSelectedSize(size)}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* narx va sotib olish */}
                                            <div className='flex mb-8'>
                                                {/* narx va razmer */}
                                                <div className='mr-9'>
                                                    <p className='text-xl'>
                                                        {e.narxi} ₽ 
                                                    </p>
                                                     <p className='text-base font-semibold'> размер - {selectedSize && `${selectedSize}`}</p>
                                                
                                                </div>

                                                <button className='text-xs flex  rounded-md font-extrabold text-white  py-6 px-7 bg-black'>
                                                    <p className='mr-6'>Добавить в корзину</p>
                                                    <img src={next} alt="next" />
                                                </button>
                                            </div>
                                            {/* malumotlar */}
                                            <div className='max-w-[325px] space-y-6 '>
                                            {/* kategoria */}
                                            <div className='flex justify-between border-b-2 border-dashed border-gray-300 items-center'>
                                                <h4 className='text-sm font-medium'>Категория</h4>
                                                <p className='text-sm font-medium '>{e.type}</p>
                                            </div>
                                            {/* Бренд */}
                                            <div className='flex justify-between border-b-2 border-dashed border-gray-300 items-center'>
                                                <h4 className='text-sm font-medium'>Бренд</h4>
                                                <p className='text-sm font-medium'>{e.brend}</p>
                                            </div>
                                            {/* Модель */}
                                            <div className='flex justify-between border-b-2 border-dashed border-gray-300 items-center'>
                                                <h4 className='text-sm font-medium'>Модель</h4>
                                                <p className='text-sm font-medium'>{e.title}</p>
                                            </div>
                                            {/* Цвет */}
                                            <div className='flex justify-between border-b-2 border-dashed border-gray-300 items-center'>
                                                <h4 className='text-sm font-medium'>Цвет</h4>
                                                <p className='text-sm font-medium'>{e.rang}</p>
                                            </div>

                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </section>
            <NashBlock/>
        </>
    )
}

export default KatalogDetail;
