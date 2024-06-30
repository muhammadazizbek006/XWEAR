// Import images
import vector from '../img/vector.svg';
import kiyim from '../img/hero/kiyim.png';
import kepka from '../img/hero/kepka.png';
import o1 from '../img/Обувь/o1.png';
import o2 from '../img/Обувь/o2.png';
import o3 from '../img/Обувь/o3.png';
import o4 from '../img/Обувь/o4.png';
import o5 from '../img/Обувь/o5.png';
import o6 from '../img/Обувь/o6.png';
import o7 from '../img/Обувь/o7.png';
import o8 from '../img/Обувь/o8.png';
import o9 from '../img/Обувь/o9.png';
import o10 from '../img/Обувь/o10.png';
import o11 from '../img/Обувь/o11.png';
import o12 from '../img/Обувь/o12.png';
import o13 from '../img/Обувь/o13.png';
import o14 from '../img/Обувь/o14.png';
import o15 from '../img/Обувь/o15.png';
import o16 from '../img/Обувь/o16.png';
import o17 from '../img/Обувь/o17.png';
import o18 from '../img/Обувь/o1.png';

import kiyim1 from '../img/kiyimlar/kiyim1.png';
import kiyim2 from '../img/kiyimlar/kiyim2.png';
import kiyim3 from '../img/kiyimlar/kiyim3.png';
import kiyim4 from '../img/kiyimlar/kiyim4.png';
import ac1 from '../img/acsesuar/ac1.png';
import ac2 from '../img/acsesuar/ac2.png';
import ac3 from '../img/acsesuar/ac3.png';
import ac4 from '../img/acsesuar/ac4.png';
import nash1 from '../img/nashblock/nash1.png';
import nash2 from '../img/nashblock/nash2.png';
import nash3 from '../img/nashblock/nash3.png';
import nash4 from '../img/nashblock/nash1.png';



// Data
const catalog = {
    links: [
        {
            id: 1,
            link: 'Одежда',
            URL: '/katalog/kiyim',
            img: vector,
        },
        {
            id: 2,
            link: 'Обувь',
            URL: '/katalog/krasofka',
            img: vector,
        },
        {
            id: 3,
            link: 'Аксессуары',
            URL: '/katalog/acsesuar',
            img: vector,
        },
        {
            id: 4,
            link: 'Бренды',
            URL: '/Бренды',
            img: vector,
        },
        {
            id: 5,
            link: 'Контакты',
            URL: '/kontackt',
            img: '',
        },
        {
            id: 6,
            link: 'Информация',
            URL: '/Информация',
            img: vector,
        },
    ],
    herocarusel: [
        {
            id: 1,
            title: 'Широкий ассортимент Одежды',
            sharx: 'Одежда от известные брендов у нас в каталоге. Только качественные вещи.',
            img: kiyim,
        },
        {
            id: 2,
            title: 'Обуви ассортимент Одежды',
            sharx: 'Обуви от известные брендов у нас в каталоге. Только качественные вещи.',
            img: kiyim,
        },
        {
            id: 3,
            title: 'Кепка ассортимент Одежды',
            sharx: 'Кепка от известные брендов у нас в каталоге. Только качественные вещи.',
            img: kepka,
        },
    ],
    krasofkalar: [
        { id: 1, im: o1, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 2, im: o2, title: 'Air Force 1 Ultra', brend: 'Nike', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 3, im: o3, title: 'Air Force 1 Ultra Flyknit', brend: 'Air', narxi: 4299, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 4, im: o4, title: 'Nike Court Zoom 2', brend: 'Nike', narxi: 4709, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 5, im: o5, title: 'Air Force 2 Ultra', brend: 'Nike', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 6, im: o6, title: 'Nike Court Zoom Cage 5', brend: 'gucci', narxi: 2699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 7, im: o7, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 7699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 8, im: o8, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4399, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 9, im: o9, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 10, im: o10, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 11, im: o11, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 12, im: o12, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 13, im: o13, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 14, im: o14, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 15, im: o15, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 16, im: o16, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 17, im: o17, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
        { id: 18, im: o18, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699, razmer: ['40', '41', '42'], rang: ['black', 'white'], kategoria: 'Кроссовки' },
    ],
    kiyimlar: [
        { id: 1, img: kiyim1, title: "Adidas Ultraboost 21", brend: "Adidas", narxi: 5500, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'blue'], kategoria: 'Футболки' },
        { id: 2, img: kiyim2, title: "Puma RS-X", brend: "Puma", narxi: 4900, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'blue'], kategoria: 'Футболки' },
        { id: 3, img: kiyim3, title: "Reebok Nano X1", brend: "Reebok", narxi: 4300, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'blue'], kategoria: 'Футболки' },
        { id: 4, img: kiyim4, title: "Nike Air Max 270", brend: "Nike", narxi: 5200, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'blue'], kategoria: 'Футболки' },
    ],
    aksessuarlar: [
        { id: 1, img: ac1, title: "New Era 59FIFTY", brend: "New Era", narxi: 1500, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'red'], kategoria: 'Кепки' },
        { id: 2, img: ac2, title: "Herschel Little America Backpack", brend: "Herschel", narxi: 4500, razmer: ['Small', 'Medium', 'Large'], rang: ['black', 'white', 'red'], kategoria: 'Рюкзаки' },
        { id: 3, img: ac3, title: "Nike Heritage 86 Cap", brend: "Nike", narxi: 1200, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'red'], kategoria: 'Кепки' },
        { id: 4, img: ac4, title: "Adidas Originals Waist Bag", brend: "Adidas", narxi: 2300, razmer: ['Small', 'Medium', 'Large'], rang: ['black', 'white', 'red'], kategoria: 'Сумки' },
    ],
    nashblock: [
        {
            id: 1,
            img: nash1,
            title: `Делаем скидки на всю женскую одежду осеннего сезона`,
            sharx: `Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.`,
        },
        {
            id: 2,
            img: nash2,
            title: `Джинсы для всех друзей. Скидки на большие покупки`,
            sharx: `Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.`,
        },
        {
            id: 3,
            img: nash3,
            title: `Мы снова работаем! Скидки в честь открытия`,
            sharx: `Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.`,
        },
        {
            id: 4,
            img: nash4,
            title: `Распродажа зимних вещей. Скидки на покупку от 5-ти вещей`,
            sharx: `Мы запускаем акцию. Готовься к осени с лета. На протяжении всего лета покупайте женские осенние вещи со скидками.`,
        },
    ],
    categoria: [
        { id:1, kategoria:`Кроссовки`,}, { id:2, kategoria:`Кеды`,}, { id:3, kategoria:`Лофферы`,}, { id:4, kategoria:`Сандали`,}, { id:4, kategoria:`Шлепки`,},
    ]
};

export default catalog;


// export const faq = [
//     {
//         id:1,
//         title:`ОБЩИЕ ВОПРОСЫ`,
//         savol:1,
//     },
// ]

export const data = [
  // krasofkalar
  {
    id: 1,
    type: "krasofka",
    img: o1,
    title: "Nike Court Zoom Cage 2",
    brend: "Nike",
    narxi: 4699,
    razmer: ["40", "41", "42"],
    rang:"Белый",
    kategoria: "Кроссовки",
  },
  {
    id: 2,
    type: "krasofka",
    img: o2,
    title: "Air Force 1 Ultra",
    brend: "Nike",
    narxi: 4699,
    razmer: ["40", "41", "42"],
    rang: ["Серый", "Голубой"],
    kategoria: "Кроссовки",
  },
  {
    id: 3,
    type: "krasofka",
    img: o3,
    title: "Air Force 1 Ultra Flyknit",
    brend: "Air",
    narxi: 4299,
    razmer: ["40", "41", "42"],
    rang: ["Желтый"],
    kategoria: "Кроссовки",
  },
  {
    id: 4,
    type: "krasofka",
    img: o4,
    title: "Nike Court Zoom 2",
    brend: "Nike",
    narxi: 4709,
    razmer: ["40", "41", "42"],
    rang: ["Зеленый"],
    kategoria: "Кроссовки",
  },
  {
    id: 5,
    type: "krasofka",
    img: o5,
    title: "Air Force 2 Ultra",
    brend: "Nike",
    narxi: 4699,
    razmer: ["40", "41", "42"],
    rang: ["Коричневый"],
    kategoria: "Кроссовки",
  },
  {
    id: 6,
    type: "krasofka",
    img: o6,
    title: "Nike Court Zoom Cage 5",
    brend: "gucci",
    narxi: 2699,
    razmer: ["40", "41", "42"],
    rang: ["Красный"],
    kategoria: "Classic",
  },
  {
    id: 7,
    type: "krasofka",
    img: o7,
    title: "polo Court Zoom Cage 2",
    brend: "polo",
    narxi: 7699,
    razmer: ["40", "41", "42"],
    rang: ["Оранжевый"],
    kategoria: "Classic",
  },
  {
    id: 8,
    type: "krasofka",
    img: o8,
    title: "Nike Court Zoom Cage 2",
    brend: "Nike",
    narxi: 4399,
    razmer: ["40", "41", "42"],
    rang: ["Черный"],
    kategoria: "Шлепки",
  },
  {
    id: 9,
    type: "krasofka",
    img: o9,
    title: "Nike Court Zoom Cage 2",
    brend: "Nike",
    narxi: 4699,
    razmer: ["33", "41", "42"],
    rang: ["Бордовый"],
    kategoria: "Classic",
  },
  {
    id: 10,
    type: "krasofka",
    img: o10,
    title: "Nike Court Zoom Cage 2",
    brend: "Nike",
    narxi: 4699,
    razmer: ["29", "41", "42"],
    rang: [ "Бордовый"],
    kategoria: "Classic",
  },
  {
    id: 11,
    type: "krasofka",
    img: o11,
    title: "polo Court Zoom Cage 2",
    brend: "polo",
    narxi: 4699,
    razmer: ["40",  "42"],
    rang: ["Бордовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 12,
    type: "krasofka",
    img: o12,
    title: "polo Court Zoom Cage 2",
    brend: "polo",
    narxi: 4699,
    razmer: ["41", "42"],
    rang: [ "Бордовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 13,
    type: "krasofka",
    img: o13,
    title: "polo Court Zoom Cage 2",
    brend: "polo",
    narxi: 4699,
    razmer: ["40", "41",],
    rang: [ "Фиолетовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 14,
    type: "krasofka",
    img: o14,
    title: "polo Court Zoom Cage 2",
    brend: "polo",
    narxi: 4699,
    razmer: ["28", "29", "31"],
    rang: ["Фиолетовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 15,
    type: "krasofka",
    img: o15,
    title: "Humara Court Zoom Cage 2",
    brend: "Humara",
    narxi: 4699,
    razmer: ["33", "34", "35"],
    rang: ["Кремовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 16,
    type: "krasofka",
    img: o16,
    title: "Humara Court Zoom Cage 2",
    brend: "Humara",
    narxi: 4699,
    razmer: ["36", "37"],
    rang: [ "Кремовый"],
    kategoria: "Кроссовки",
  },
  {
    id: 17,
    type: "krasofka",
    img: o17,
    title: "Humara Court Zoom Cage 2",
    brend: "Humara",
    narxi: 4699,
    razmer: ["38", "39"],
    rang: ["Кремовый", ],
    kategoria: "Кроссовки",
  },
  {
    id: 18,
    type: "krasofka",
    img: o18,
    title: "Humara Court Zoom Cage 2",
    brend: "Humara",
    narxi: 4699,
    razmer: ["40", "41",],
    rang: ["Молочный", "Кремовый"],
    kategoria: "Кроссовки",
  },
    // kiyimlar
    {
      id: 19,
      type: "kiyim",
      img: kiyim1,
      title: "Adidas Ultraboost 21",
      brend: "Adidas",
      narxi: 5500,
      razmer: ["S", "M", "L"],
      rang: ["Синий", "Молочный"],
      kategoria: "Футболки",
    },
    {
      id: 20,
      type: "kiyim",
      img: kiyim2,
      title: "Puma RS-X",
      brend: "Puma",
      narxi: 4900,
      razmer: ["M", "L"],
      rang: ["Серый"],
      kategoria: "Футболки",
    },
    {
      id: 21,
      type: "kiyim",
      img: kiyim3,
      title: "Reebok Nano X1",
      brend: "Reebok",
      narxi: 4300,
      razmer: ["S", "M"],
      rang: ["Желтый"],
      kategoria: "Футболки",
    },
    {
      id: 22,
      type: "kiyim",
      img: kiyim4,
      title: "Nike Air Max 270",
      brend: "Nike",
      narxi: 5200,
      razmer: ["S","L"],
      rang: ["Голубой"],
      kategoria: "Футболки",
    },
    // acsesuarlar
    { id: 23, img: ac1, title: "New Era 59FIFTY", type:"acsesuar", brend: "New Era", narxi: 1500, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'red'], kategoria: 'Кепки' },
    { id: 24, img: ac2, title: "Herschel Little America Backpack",  type:"acsesuar", brend: "Herschel", narxi: 4500, razmer: ['Small', 'Medium', 'Large'], rang: ['black', 'white', 'red'], kategoria: 'Рюкзаки' },
    { id: 25, img: ac3, title: "Nike Heritage 86 Cap",  type:"acsesuar",  brend: "Nike",  narxi: 1200, razmer: ['S', 'M', 'L'], rang: ['black', 'white', 'red'], kategoria: 'Кепки' },
    { id: 26, img: ac4, title: "Adidas Originals Waist Bag",  type:"acsesuar", brend: "Adidas", narxi: 2300, razmer: ['Small', 'Medium', 'Large'], rang: ['black', 'white', 'red'], kategoria: 'Сумки' },
  ];
  

// faq data

export const Faqs  = [
  {
    id:1,
    title:`ОБЩИЕ ВОПРОСЫ`,
    savol:`ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?`,
    javob:`разные продукты и бренды`,
  },
  {
    id:2,
    savol:`ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?`,
    javob:`Мы гарантируем полную безопасность ваших персональных данных. Если у вас есть вопросы, пожалуйста,
ознакомьтесь с нашей Политикой конфиденциальности.`,
  },
  {
    id:3,
    savol:`ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?`,
    javob:`Конечно, у нас 100% безопасность.`,
  },
  {
    id:4,
    savol:`ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ?`,
    javob:`Да, наша продукция от оригинальных брендов.`,
  },
  {
    id:5,
    savol:`ПОЧЕМУ ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА?`,
    javob:`потому что с увеличением размера потребляется больше продуктов и ресурсов`,
  },
  {
    id:6,
    savol:`СКОЛЬКО ИДЕТ ДОСТАВКА?`,
    javob:`в зависимости от разных регионов`,
  },
  {
    id:7,
    savol:`МОЖНО ЛИ ВЕРНУТЬ ТОВАР?`,
    javob:`да, если договор не соблюдается`,
  },
]