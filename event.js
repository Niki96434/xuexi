// обработчик - функция, которая сработает, когда произойдет нужное событие
// любому событию можно назначить обработчик

// const button = document.querySelector('.button');
// button.onclick = function () { // анонимная функция при клике
//     console.log('Hello world')
// }

// //или

// function onClick() {
//     console.log('hello world');
//     button.removeEventListener('click', onClick) // после того как обработчик сработал,чтобы не нагружать сайт, мы удаляем обработчик
// }

// button.onclick =  onClick; 
//без круглых скобок пишется функция
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//с помощью обработчика addEventListener можно добавлять разные функции при клике
// button.addEventListener('click', function (e) { // событие + анонимная функция,где мы вписываем тело, либо имя уже существующей функции
//     console.log('hello')
// })

// button.addEventListener('click', onClick) 


// button.addEventListener('click', function (e) {  // событие + анонимная функция,где мы вписываем тело, либо имя уже существующей функции
    // console.log('hello')


//в addEventListener есть третий аргумент -- options - объект с параметрами(уже названными)

// const options = {
//     'once':true, //если тру, то удаляет обработчик события
//     'capture': false, // какая-то фаза, на которой должен сработать обработчик
//     'passive':false // если тру, то обработчик никогда не вызовет PreventDefault()
// }

//важно упомянуть,что addEventListener имеет преимущество над onclick, по крайней мере тем, что может исполнять несколько функций при прослушивании событий.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//как работает событие? когда происходит событие, браузер создает объект события event, добавляет туда свойства 
//и добавляет event в качестве аргумента функции 

//  function funcEvent(event) {
//     console.log(event.type); // поэтому мы можем смотреть свойства события и обращаться к объекту события //click
//     console.log(event.target); // объект события,на котором сработал обработчик,т.е. было сделано действие (кнопка)
//     console.log(event.currentTarget); // объект, к которому назначен обработчик, т.е. к которому привязан обработчик события (тоже кнопка)
//     //target currentTarget оба выведут тег и текст
//     console.log(event.clientX); // положение курсора по х 
//     console.log(event.clientY); // и по y
//     console.log(event)  // чтобы посмотреть все детали события

//  }

//  button.addEventListener("click", funcEvent) //выведется событие click

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//делегирование событий
//существует 2 способа его реализовать

//1 с помощью forEach
// const listButton = document.querySelectorAll('.button'); 

// function onClickButton() {
//     console.log('hello')
// }

// listButton.forEach(itemButton => {
//         itemButton.addEventListener("click", onClickButton) // навешиваем на каждый объект button в коллекции обработчик с функцией 
// })

//2 с помощью closest и родителя
// const divClass = document.querySelector('.classfirst') // родитель кнопки 
// function divButton() {
//     console.log('halou')
// }
// divClass.addEventListener("click", function(event) {
//     if (event.target.closest('.button')) { // либо через classList.contains() или target.matches()
//         divButton();
//     }
// })

//3 делегирование с помощью обработчика на весь объект document и с помощью closest()
//ура я поняла это
getMenu = document.querySelector('.menu') // родитель 

document.addEventListener("click", clickOnButton);

function clickOnButton(event) {
    if (event.target.closest('.menu__button')) { // документа содержит объект кнопки
        getMenu.classList.toggle('_active');
    } 
    else if (!event.target.closest('.menu')) { //  документ не содержит кнопку меню, если не попали в меню,то закрываем
        getMenu.classList.remove('_active');
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//preventDefault
// есть 2 способа удалить событие пользователя
// 1 через options
// link = document.querySelector('.link');

// const options = {
//     'passive': true //PreventDefault не будет учитываться
// }
// link.addEventListener("click", function(event) {
//     console.log('ссылка нажата!')
//     event.preventDefault() // отменяем браузерный клик
// }, options) // добавляем либо полноценный объект,
//либо {"passive": true}

//2 через return false

// link.onclick = function () {
//     console.log('ссылка нажата');
//     return false; // здесь точка с запятой важна
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//свойства событий мыши
// mousemove - вызывается при каждом движении мыши над элементом
// click - как только клик произведен и мы отпускаем кнопку, срабатывает функция
// contextmenu - вызывается контекстное меню например для левши с ЛКМ

// const button = document.querySelector('.button');
// button.addEventListener('click', function (event) {
//     console.log(`${event.which}`)
// })

//ЭТО ТОЖЕ НЕ ПОЛУЧАЕТСЯ НО Я НЕ ЗНАЮ ПОЧЕМУ....................
// button.addEventListener('contextmenu', function (event) {
//     console.log(`ура мы нажали и появилось контекстное меню с ЛКМ ${event.which}`)
// })


