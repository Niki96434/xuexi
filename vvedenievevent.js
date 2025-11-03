//https://learn.javascript.ru/introduction-browser-events
/*
обработчик можно вызвать 2мя способами:

1.через атрибут html-тега on<действие>
<input value='нажми на меня' type='button' onclick="alert('спасибо')">
<input value='нажми на меня' type='button' onclick="globalFunction()"> // отдельная функция
примечание: внутри атрибута onclick можно писать только разные кавычки,иначе ошибка.
*/
регистр у атрибута может быть разный(onClick/ONCLICK), но привыкли писать onclick
в DOM регистр все же учитывается.(elem.onclick, а не elem.onClick)

/*
2.через обработчик(сюда можно присваивать ТОЛЬКО функции)
elem.onclick = globalFunction; // тут без скобок!
elen.onclick = function () {
    alert("вы нажали!");
}
через setAttribute не следует добавлять onclick, так как назначенное значение(функция) будет переведено в строку и не выполнится.
в случае с таким обработчиком, атрибут onclick в html-теге уже создавать нельзя.(он не выполнится)
*/
elem.onclick = null; // если хотим убрать обработчик


через атрибут можно обращаться к объекту,на которого повешен обработчик
<button onclick="alert(this.innerHTML)">нажмииии</button>
мы нажимаем и выводится текст 'нажмииии'

/*
минусы тех 2х способов в том,что несколько раз ты такой обработчик не вызовешь.(они будут заменять друг друга)
в отличие от addEventListener(накладывает несколько функций на 1 элемент на 1 событие)
elem.addEventListener("click", function () {})
в случае если мы хотим удалить функцию из обработчика, мы используем elem.removeEventListener,
но
elem.removeEventListener("click", nameOfFunction) 
// сюда обязательно надо писать событие и функцию(ИМЯ),а не копировать ту же функцию,
// так как это будет уже другая функция,и тогда обработчик удалить мы не сможем
*/

/* существуют такие события,которые можно создать только с помощью addEventListener
document.addEventListener("onDOMContentLoaded", () => { //завершена загрузка dom-документа
    alert("дом построен");
    }
*/

// в html-тегах тоже можно обращаться к событию event
// <input type="button" onclick="alert(event.type)"> 

// вместо функции можно назначать обработчику либо 1.объекты, либо объекты классов
//1. вызывается метод объекта handleEvent
elem.addEventListener("click", {handleEvent(event) { // анонимный объект
    alert(event.type);
}})
// когда происходит событие,то вызывается object.handleEvent(event)

//2.создаем объект класса с методами и передаем в обработчик
class Menu {
    handleEvent(event) {
        switch(event.type) { // ===
        case 'click':
            alert("клик");
            break
        case 'mousemove':
            alert("движение мышки");
            break
        
        }

let menu = new Menu() // создаем объект класса с перечисленными методами
elem.addEventListener("click", menu) // передаем объект в обработчик
elem.addEventListener("mousemove", menu)

    }
}

// важное упоминание: в классах методы не разделяются запятыми, а в объектных литералах разделяются.
class Menu {
    menuDown(event) {

    }
}