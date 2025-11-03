класс имеет свойства,имеет методы
по сути это такая же функция,если мы имеем в виду constructor() {}
class newClass{ // класс можно как-то назвать,а м ожно не называть
    value = '3'; // свойство самого объекта
    constructor(value) { // он как бы и есть сам класс,сюда мы сохраняем аргумент,который потом используется в методах
        this._name = value;
    }
    get name() { //здесь return обяз
        return this._name // смысл сет в том что мы выводим значение
    }
    set name(value) { // здесь тоже нужен аргумент
        this._name = this._name + value // смысл гет в том что здесь присваивается значение, а не возвращать
    }
    sayHi() {
        alert(this._name);
    }
}

new newClass('nika').sayHi() // с помощью new мы создаем новый объект и вызываем метод класса

если мы дадим название,то само название выведется только через класс
alert(newClass)// не выведется
newClass.sayName // а здесь выведется

let objClass = new newClass("nika"); // объект класса
objClass.name // это гет,и он выводит nika
new newClass("kirill").name // здесь выводится сет

//класс - по сути это функция,так как тип класса typeof Class = function

// мы можем представить класс в виде функции
//а также мы можем сделать на подобие функции-выражения класс-выражение

let user = class {
    constructor (name) {
        this.name = name;
    }
    sayHi() {
       return  this.name
    }
}

let user = new user('chuvak') // создаем объект и добавляем туда аргумент
user.sayHi() // выведется


function User(name) { // сохранять какое-то значение, и использоваться методами
    this.name = name;
}

User.prototype.sayHi = function() { // добавляем свойство прототип в функцию
    return this.name;  
}

let user_3 = new User("nika")
user_3.sayHi()