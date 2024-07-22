import React from 'react'

const LiComponent = () => {
  return (
    <>
                  <Swiper
    slidesPerView={4}
    spaceBetween={30}
    pagination={{
        clickable: true,
        el: '.swiper-pagination',
        dynamicBullets: true
    }}
    navigation={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
    modules={[Pagination, Navigation,]}
    breakpoints={{
      // Ekran o'lchamlari bo'yicha slaydlarni ko'rsatish uchun breakpoints
      100: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      622: {
          slidesPerView: 2,
          spaceBetween: 20
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30
      },
      1280: {
          slidesPerView: 4,
          spaceBetween: 30
      }
  }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    style={{ paddingBottom: '60px' }} // Pagination uchun 30px pastda joylashtirish
>
    {
        KatalogMahsulotlari.map((e) => {
            return (
                <SwiperSlide key={e.id} className="relative px-4 py-3 swiper-slide  rounded-lg" style={{  width: '318px' }}>
                    {/* like */}
                    <button
                        className="absolute right-3"
                        onClick={() => toggleLike(e)}
                    >
                        <img
                            src={likedProducts[e.id] ? like3 : like2}
                            alt={e.brend}
                        />
                    </button>

                    <Link to={`/product/${e.id}`} className="flex flex-col justify-between">
                        <div className="flex flex-col items-center mb-3">
                            <img className="h-64" src={e.img} alt={e.title} />
                        </div>
                        <div className="mb-1 flex flex-col items-start justify-between">
                            <p className="text-xl font-semibold">{e.title}</p>
                            <p className="text-base"><span className="text-xl font-semibold">категория: </span>{e.kategoria}</p>
                        </div>
                    </Link>
                    {/* shop btn va kategoria */}
                    <div className="flex justify-between">
                        <p className="text-base"><span className="text-base font-semibold">расходы: </span>от {e.narxi} ₽</p>
                        <button onClick={() => mahsulotniWishlistgaQoshish(e)} className="bg-black px-8 py-3 rounded-md">
                            <img src={shop} alt="" />
                        </button>
                    </div>
                </SwiperSlide>
            );
        })
    }
    <div className="swiper-pagination" style={{ marginTop: '30px' }}></div> {/* Pagination uchun joy */}
        </Swiper>
    </>
  )
}

export default LiComponent