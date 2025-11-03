/*классы - шаблоны объектов, обладающие свойствами и методами
методы не разделяются при этом в коде запятыми
с помощью new MyClass() мы создаем новый объект с перечисленными методами
в нем автоматически создается метод constructor*/

// базовый синтаксис класса
// class User {
//     constructor(name) {
//         this.name = name; // в свойство .name сохраняется аргумент name
//     }
//     sayHi() { // далее можно писать уже свои методы не через запятую
//         alert(this.name)
//     }
// } 
// let user = new User("Иван"); // объект класса юзер
// user.sayHi() //Иван

// // класс имеет тип function 
// alert(typeof(User)); // function

// //конструктор класса не может быть вызван без new
// class User {
//     constructor() {}
// }
// User() // ошибка

/*
при объявлении класса создается функция,код которой хранится в constructor,
а все методы класса хранятся в User.prototype, оттуда же и метод объекта new User выводит
любой метод.
*/

//отсюда мы можем создать подобие класса без самого класса:

function User(name) { // это функция-constructor,но только здесь она автоматически добавляется и писать её отдельно не надо
    this.name = name; 
}
User.prototype.sayHi = function() { // сохраняем функцию в методы класса Юзер
    alert(this.name);
}
let user_1 = new User("ника"); // объект класса
user_1.sayHi();

// мы можем создавать class-expression по аналогии function-expression
let User = class { // можем дать имя,но оно будет видно в пределах класса
    sayHi() {
        alert("");
    }
}
//класс с именем
// let User = class newClass {
//     sayHi() {
//         alert(newClass)
//     }
// }
// alert(newClass) // не выведет нихуя
// new User().sayHi() // вызов класса через new и покажет он имя класса только через вызов самого класса


// мы можем создавать классы по запросу?

function returnClass(text) {
    return class {
        sayHi() {
            alert(text)
        }
    }
}

let newObject = returnClass("privet");
new newObject().sayHi() // здесь выводится privet



// геттеры и сеттеры
/*
геттеры и сеттеры могут одинаково называться.
в гет return обязателен, в сет необязательно.
они оба записываются в class.prototype, как и методы
*/

// class Cars {
//     constructor(cost) { // в конструктор параметр обяз
//         this._cost = cost
//     }

//     get nameCar() {
//         return this._cost;
//     }

//     set nameCar(cost) {
//         this._cost = this._cost + cost; // присваиваем значение,а не выводим
//     }
// }

// let car = Cars(300);
// car.nameCar // чтобы вывести get мы не пишем скобок
// car = new Cars(400) // присваиваем новое значение


//ну и последнее:
// class User_2 {
//     name = "ivan" // свойство объекта
//     //либо можно было написать:
//     /*
//     constructor(name = 'ivan') { // дефолтное значение
//         this.name = name;     
//     }
//     */
//     sayHi() {
//         alert(`hello, ${this.name}`);
//     }
// }

// new User_2().sayHi() // hello, ivan