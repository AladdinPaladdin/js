'use strict'

var number = 5;
var string = 'Hello';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};
// коллекция данных в {} содержатся свойства объекта или функции;
console.log(4/0);
// infinity;
console.log('string' * 4);
// nan not a number; 
// это числовые значения;
let something;
// undefined есть но не имеет значения;
console.log(something);
// null это то чего не существует;

let persone = {
    name: "John",
    age : 24,
    isMarried: false
};

console.log(persone.name);
// получение значения свойства, один из способов;
console.log(persone["age"]);
// получение значения свойства, используется реже, нужен если хотим добраться до свойства заданной любой строкой, оно может быть очень длинным;


let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
// массив используется для хранения данных которые идут по порядку, каджому значению присваивается порядковый номер начиная с 0;
console.log(arr[0]);
// получение элементов массива по индексу;


