import React from 'react'
// import { sharxlar } from '../../data/data/sharxlar'

const Sharxlar = () => {
    // Sharxlar ma'lumotlari
const sharxlar = [
    {
      id: 1,
      author: 'Ali',
      rating: 5,
      comment: 'Bu mahsulot juda ajoyib!',
    },
    {
      id: 2,
      author: 'Vali',
      rating: 4,
      comment: 'Yaxshi mahsulot, lekin narxi biroz qimmat.',
    },
    {
      id: 3,
      author: 'Gulnora',
      rating: 3,
      comment: 'Oʻrtacha sifat, lekin xizmat yaxshi.',
    },
  ];
    return (
    <div className="sharxlar">
    <h2 className="text-2xl font-bold mb-4">Sharxlar</h2>
    <ul className='grid grid-cols-4'>
    {sharxlar.map((review) => (
      <li key={review.id} className="sharx p-4 mb-4 border rounded shadow">
        <h3 className="text-xl font-semibold">{review.author}</h3>
        <div className="rating text-yellow-500">
          {'⭐'.repeat(review.rating)}
        </div>
        <p className="comment mt-2">{review.comment}</p>
      </li>
))}
    
    </ul>
  </div>
  )
}

export default Sharxlar