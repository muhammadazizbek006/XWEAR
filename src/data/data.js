// Import images
import vector from '../img/vector.svg';
import kiyim from '../img/hero/kiyim.png';
import kepka from '../img/hero/kepka.png';
import o1 from '../img/Обувь/o1.jpg';
import o2 from '../img/Обувь/o2.jpg';
import o3 from '../img/Обувь/o3.jpg';
import o4 from '../img/Обувь/o4.jpg';
import o5 from '../img/Обувь/o5.jpg';
import o6 from '../img/Обувь/o6.jpg';
import o7 from '../img/Обувь/o7.jpg';
import o8 from '../img/Обувь/o8.jpg';
import o9 from '../img/Обувь/o9.jpg';
import o10 from '../img/Обувь/o10.jpg';
import o11 from '../img/Обувь/o11.jpg';
import o12 from '../img/Обувь/o12.jpg';
import o13 from '../img/Обувь/o13.jpg';
import o14 from '../img/Обувь/o14.jpg';
import o15 from '../img/Обувь/o15.jpg';
import o16 from '../img/Обувь/o16.jpg';
import o17 from '../img/Обувь/o17.jpg';
import o18 from '../img/Обувь/o18.jpg';
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
        { id: 1, im: o1, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699 },
        { id: 2, im: o2, title: 'Air Force 1 Ultra', brend: 'Nike', narxi: 4699 },
        { id: 3, im: o3, title: 'Air Force 1 Ultra Flyknit', brend: 'Air', narxi: 4299 },
        { id: 4, im: o4, title: 'Nike Court Zoom 2', brend: 'Nike', narxi: 4709 },
        { id: 5, im: o5, title: 'Air Force 2 Ultra', brend: 'Nike', narxi: 4699 },
        { id: 6, im: o6, title: 'Nike Court Zoom Cage 5', brend: 'gucci', narxi: 2699 },
        { id: 7, im: o7, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 7699 },
        { id: 8, im: o8, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4399 },
        { id: 9, im: o9, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699 },
        { id: 10, im: o10, title: 'Nike Court Zoom Cage 2', brend: 'Nike', narxi: 4699 },
        { id: 11, im: o11, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699 },
        { id: 12, im: o12, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699 },
        { id: 13, im: o13, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699 },
        { id: 14, im: o14, title: 'polo Court Zoom Cage 2', brend: 'polo', narxi: 4699 },
        { id: 15, im: o15, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699 },
        { id: 16, im: o16, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699 },
        { id: 17, im: o17, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699 },
        { id: 18, im: o18, title: 'Humara Court Zoom Cage 2', brend: 'Humara', narxi: 4699 },
    ],
    kiyimlar: [
        { id: 1, img: kiyim1, title: "Adidas Ultraboost 21", brend: "Adidas", narxi: 5500 },
        { id: 2, img: kiyim2, title: "Puma RS-X", brend: "Puma", narxi: 4900 },
        { id: 3, img: kiyim3, title: "Reebok Nano X1", brend: "Reebok", narxi: 4300 },
        { id: 4, img: kiyim4, title: "Nike Air Max 270", brend: "Nike", narxi: 5200 },
    ],
    aksessuarlar: [
        { id: 1, img: ac1, title: "New Era 59FIFTY", brend: "New Era", narxi: 1500 },
        { id: 2, img: ac2, title: "Herschel Little America Backpack", brend: "Herschel", narxi: 4500 },
        { id: 3, img: ac3, title: "Nike Heritage 86 Cap", brend: "Nike", narxi: 1200 },
        { id: 4, img: ac4, title: "Adidas Originals Waist Bag", brend: "Adidas", narxi: 2300 },
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
    ]
};

export default catalog;
