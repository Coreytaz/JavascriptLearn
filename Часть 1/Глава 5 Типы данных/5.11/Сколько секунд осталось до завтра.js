// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
    return Math.round((new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1) - Date.now()) / 1000)
}

console.log(getSecondsToday());