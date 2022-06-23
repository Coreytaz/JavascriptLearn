// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
    let timer = setInterval(() => {
        console.log(from);
        if (from == to) {
            clearTimeout(timer);
        }
        from++
    }, 100)
}
function printNumbers(from, to) {
    let timer = setTimeout(function go() {
        console.log(from);
        if (from < to) {
            setTimeout(go, 100);
        }
        from++
    }, 100)
}

console.log(printNumbers(1, 5));