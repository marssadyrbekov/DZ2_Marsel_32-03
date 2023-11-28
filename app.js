/* ⁃ Программа должна запрашивать месяц и в зависимости от введенного месяца выводить сезон
года (веста, лето, осень, ноябрь). Используйте switch..case, сквозные ветки */
let month = prompt('Введите номер месяца (1-12):');
let season;

switch (parseInt(month)) {
    case 12:
    case 1:
    case 2:
        season = 'Зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Лето';
        break;
    case 9:
    case 10:
    case 11:
        season = 'Осень';
        break;
    default:
        season = 'Вы ввели неверный номер месяца.';
}

alert(`Сезон: ${season}`);


/* ⁃ Есть массив [[[[[[[[[[[2]]]]]]]]]]].С помощью индекса выведите цифру 2 */
const arr = [[[[[[[[[[[2]]]]]]]]]]]
console.log(arr[0][0][0][0][0][0][0][0][0][0][0])


/*  ⁃ Сделайте калькулятор. Программа должна запрашивать 1 значение, 2 значение и действие (+, -, /, *).
Далее в зависимости от введенного действия выполнить математическое действие между значением 1 и значением 2.*/

// Спомощью if else
const valueOne = parseFloat(prompt('Введите первое число:'));
const valueTwo = parseFloat(prompt('Введите второе число:'));
const operation = prompt('Введите действие (+, -, /, *):');

let result;

if (operation === '+') {
    result = valueOne + valueTwo;
} else if (operation === '-') {
    result = valueOne - valueTwo;
} else if (operation === '/') {
    result = valueOne / valueTwo;
} else if (operation === '*') {
    result = valueOne * valueTwo;
} else {
    console.log('Неверная операция');
}

if (result !== undefined) {
    console.log(`Результат: ${result}`);
}
