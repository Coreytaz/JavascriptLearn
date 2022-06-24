// Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

// Можем ли мы сделать так?

// let obj2 = new obj.constructor();
// Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.

function Obj(obj) {
    this.obj = obj;
}

obj = new Obj("Obj");
obj2 = new obj.constructor("Obj2");

console.log(obj2.obj);


function Obj(obj) {
    this.obj = obj;
}
Obj.prototype = {};

obj = new Obj("Obj");
obj2 = new obj.constructor("Obj2");

console.log(obj2.obj);

