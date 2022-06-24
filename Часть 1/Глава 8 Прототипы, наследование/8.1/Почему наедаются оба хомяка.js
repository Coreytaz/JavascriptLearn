let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте // нужно добавить массив stomach: [], в каждому хомяку так как метод eat ссылкается на this а так как этого массива нету а наследующихся хомяков то он будет обращаться к своему массиву
console.log(lazy.stomach); // apple