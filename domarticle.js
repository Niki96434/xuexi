'use strict';
// navigator.platform; // OC
// navigator.userAgent; // браузер
// window.innerWidth; // ширина окна браузера
// history.back; // на прошлую страницу
// history.forward; // на следующую страницу

// const liElem = document.querySelectorAll('li'); // tag
// console.log(liElem);
// const classElem = document.querySelectorAll('.menu__list'); //обяз точку ставить
const classTagElem = document.querySelectorAll('li.menu__item'); // тэг с классом
const classTagFirstElem = document.querySelectorAll('.menu__item>li'); // первый уровень вложенности
// const classMoreElem = document.querySelectorAll('.header__inner, .menu__list'); //поиск по нескольким классам
// const elemSeven = document.querySelectorAll('.header__inner .dropdown'); //поиск вложенного 2го объекта в 1м объекте
// const searchID = document.querySelectorAll('#livesearch'); // поиск по айди
// const hrefSearch = document.querySelectorAll('[href="#"]'); // поиск по атрибуту

document.querySelectorAll('[href^="https"]'); // начинается с
document.querySelectorAll('[href$=".pdf"]'); // заканчивается на


// querySelector может возвращать все то же самое, что и querySelectorAll, но только первый полученный объект.
// const listItem1 = document.querySelector('li'); // ищет первый элемент по тегу
// console.log(listItem1);

// const classItem = document.querySelector('.menu__list'); // возвращает 1 объект 
// console.log(classItem);

// const elemId = document.getElementById('livesearch'); // поиск элемента по айди
// console.log(elemId);

// const elemTag = document.getElementsByTagName('li'); // поиск коллекции элементов по тегу
// console.log(elemTag);

// const elemClass = document.getElementsByClassName('menu__item');

//Живая коллекция - коллекция элементов-DOM, котора автоматически обновляется при изменениях на странице.

// const listItem2 = document.querySelector('li');
// listItem2.parentElement; // возвращает непосредственного родителя
// listItem2.closest('.menu'); //возвращает родителя,поднимаясь вверх, с тем стилем, который указан

// const navMenu = document.querySelectorAll('li'); // проверка с помощью matches на определенный класс, 
// for (let elem of navMenu) {
//     if (elem.matches('[class$="menu__item"]')) { // здесь можно использовать classList.contains('class')
//         console.log('в тексте есть объект с классом меню_айтем')
//     }
// }

// const listItem = document.querySelector('li'); 
// const list = listItem.nextElementSibling; // передвигаемся по дереву
// console.log(list);

// const aTag = document.querySelector('a');
// const aTextHTML = aTag.innerHTML; // текст "как есть" с HTML-объектами и всем всем
// console.log(aTextHTML);
// aTag.innerHTML = 'хуй сосать невкусный'; // здесь можно не только переписать содержимое,но и дополнить(теги,текст,добавить интерполяцию ${})


// //2 часть
// const elem = document.querySelector('li');
// newText = elem.outerHTML; // выводит не только содержимое,но и оболочку объекта
// elem.outerHTML = 'new text' // при этом менять/дополнять содержимое как в innerHTML нельзя.
// console.log(newText);

// текст можно записывать безопасным способом, переводя теги в текст
// const text = document.querySelector('.menu');
// const newText = text.textContent;
// console.log(newText);
// text.textContent = `<p>Век живи - век учись</p>`;

// чтобы получить сам текст, мы можем использовать свойства data
const text1 = document.querySelector('a');
console.log(text.data);

// const newElement = document.createElement('div'); // создание нового элемента
// newElement.innerHTML = '<p>чепушонок</p>';

//Текстовый узел — это просто текст внутри элемента. Он не может иметь атрибутов или содержать другие узлы.

const newElement = document.createTextNode('hauhai');
// // const newElement = document.createElement('div');
// newElement.innerHTML = '<p>чепушонок</p>';
// console.log(newElement)

// const textElement = document.querySelector('li')
// textElement.before(newElement); //до элемента
// textElement.prepend(newElement); // внутрь, в начало
// textElement.append(newElement); // внутрь, в конец
// textElement.after(newElement); // после элемента

// const newElement1 = document.createElement('div'); // создаем элемент и добавляем 
// newElement.innerHTML = '<p>век живи век учись</p>'
// const text3 = document.querySelector('li');
// text3.insertAdjacentElement( // работает только с элементами
//         'beforebegin',
//         newElement
// )

// newElement.innerHTML = 'век живи век учись';
// const text = document.querySelector('li');
// text.insertAdjacentText(
//         'beforebegin',
//         'век живи век учись' // добавляем элемент
// )


const elText = document.querySelector('.container');
const cloneText = elText.cloneNode(true); //клонирование вместе с содержимым
const header = document.querySelector('.header');
header.append(cloneText);

const header1 = document.querySelector('header'); // удалить тег
header.remove()

// const elClass = document.querySelector('.menu');
// elClass.classList.add('active'); //добавляем свойство active
// if (elClass.classList.contains('active')) {
//     console.log('элькласс элемент содержит класс active')
// }

for (let clas_1 of elClass.classList) { // перебор списка классов с помощью for...on
    console.log(clas_1)
}

const elem = document.querySelector('.menu');
elem.style.color = 'red'; // поменять css-свойство
elem.style.zIndex = 10; //все остальные свойства записываются в стиле camelCase
elem.style.marginBottom = '10px';
// или чтобы сбросить стиль:
elem.style.marginBottom = '';
elem.style.cssText = 'color: red; z-index: 10; max-width: 500px;'; //！！！！！！！！！！

// 3 часть(15 мин)

// мы можем менять стиль через свойство style, а можем с помощью getComputedStyle
// но работаем мы с getcomputedstyle только в режиме чтения, изменять свойства нельзя
const elem = document.querySelector('.class');
elem.style.color = 'red' // меняем через свойство style.color
newElem = document.getComputedStyle(elem);
console.log(newElem.color) // fontSize maxWidth и прочее

// если мы хотим убрать у свойства текст(px)и оставить только число, то мы используем parseInt
const intStyle = parseInt(newElem.width)

// можно получать атрибуты элементов через console.dir(name_elemnt)
console.dir(elem);
elem.href // ссылка
elem.value // значение по умолчанию в input например

elem.setAttribute('nameAtr', 'valueAtr') // создание атрибута и значения 
elem.hasAttribute('name') // проверка на наличие атрибута
elem.getAttribute('name') // получение значение атрибута
elem.removeAttribute('name') // удалить атрибут

// почему-то создать свойство id и поменять его на другое мы можем, но с value не получится
elem.setAttribute('name', 'logo');
elem.name = 'loh'
console.log(elem) //loh

elem.setAttribute('value', 'privet')
elem.value = 'kak dela' 
console.log(elem) // privet

link.tagName; // в верхнем регистре выведет
link.hidden = true;
link.dataset.value; 