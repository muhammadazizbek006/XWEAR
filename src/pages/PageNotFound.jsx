import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
        <section className='py-12'>
            <div className="containerb flex flex-col items-center  ">
                <h2 className=' text-2xl sm:text-3xl md:text-4xl lg:text-6xl  font-bold mb-2'>404</h2>
                <strong className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6'>Page Not Found</strong>
                <Link className=' px-5 md:px-8 py-4 bg-black text-white rounded-md hover:bg-green-500 duration-500'>домашняя страница</Link>
            </div>
        </section>
    </>
  )
}

export default PageNotFound