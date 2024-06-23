// Fayllar import qilish
import vector from '../img/vector.svg';
import kiyim from '../img/hero/kiyim.png';
// import kresofka from '../img/hero/krasofka.png';
import kepka from '../img/hero/kepka.png';


// Header link
export const links = [
    {
        id: 1,
        link: 'Одежда',
        URL: '/Одежда',
        img: vector,
    },
    {
        id: 2,
        link: 'Обувь',
        URL: '/Обувь',
        img: vector,
    },
    {
        id: 3,
        link: 'Аксессуары',
        URL: '/Аксессуары',
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
        link: 'Расчет стоимости',
        URL: '/Расчет',
        img: '', // Agar tasvir bo'lmasa bo'sh qoldiriladi
    },
    {
        id: 6,
        link: 'Информация',
        URL: '/Информация',
        img: vector,
    },
];

// Hero carousel
export const herocarusel = [
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
];
