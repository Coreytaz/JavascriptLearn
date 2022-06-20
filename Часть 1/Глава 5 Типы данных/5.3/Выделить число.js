// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:

// alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
    return typeof str === 'string' && str.includes('$') ? +str.slice(1) : str;
}

console.log(extractCurrencyValue('$120') == 120);