import { data } from '../data/data';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// img
import reyting from '../img/reytingb.svg';

const KatalogDetail = () => {
    const { id } = useParams();
    // id may be a string, convert it to a number if your data ids are numbers
    const [selectedSize, setSelectedSize] = useState(''); // State to track selected size
    const Detail = data.filter((e) => e.id.toString() === id);

    return (
        <>
            <section className='py-16'>
                <div className="containerb">
                    <ul>
                        {
                            Detail.map((e) => {
                                return (
                                    <li className='flex ' key={e.id}>
                                        {/* left */}
                                        <div className='relative mr-8 max-w-[604px]'>
                                            <img className='right-12 absolute' src={reyting} alt='reyting' />
                                            <img className='w-[500px]  bg-transparent' src={e.img} alt={e.title} />
                                        </div>
                                        {/* right */}
                                        <div>
                                            <h3 className='text-3xl mb-5 font-black'>{e.title}</h3>
                                            {/* razmer */}
                                            <div className='mb-7'>
                                                <p className='text-base mb-4 font-semibold'>EU размеры:</p>
                                                <div className='grid grid-cols-5 gap-6'>
                                                    {e.razmer.map((size, index) => (
                                                        <button
                                                            key={index}
                                                            className={`border-2 p-2 ${
                                                                selectedSize === size ? 'border-blue-500' : 'border-black'
                                                            }`}
                                                            onClick={() => setSelectedSize(size)}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* narx va sotib olish */}
                                            <div>
                                                <p className='text-xl'>
                                                    {selectedSize && `${selectedSize} razmer: `}{e.narxi} ₽ 
                                                </p>
                                            </div>
                                        </div>
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

export default KatalogDetail;
