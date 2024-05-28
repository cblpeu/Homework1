//Задание 1
console.log('js'.toUpperCase());

//Задание 2
function stringFilter(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase(c)));
}

//Задание 3
let num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

//Задание 4
let number = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...number));
console.log(Math.max(...number));

//Задание 5
function getNumbers() {
    let numbers = Math.random((Math.random()* 10));
    console.log(numbers);
}

//Задание 6
function getArrNumber(num) {
    const result = [];
    for (let i = 0; i < Math.floor(num/2); i++) {
        result.push(Math.round(Math.random() * num))
    }
    return result;
}

//Задание 7
function getRandomArrNumber (a, b) {
    let randomNamber = Math.round((Math.random() * (b - a)) + a);
    console.log(randomNamber);
}

//Задание 8
console.log(new Date());

//Задание 9
let currentDate = new Date();
let after73days = +currentDate + (73*24*60*60*1000);
console.log(new Date(after73days));

//Задание 10
function formatedDateAndTime(inputDate) {
    const daysWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayWeek = daysWeeks[inputDate.getDay()];

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = months[inputDate.getMonth()];

    const year = inputDate.getFullYear();
    const day = inputDate.getDate();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();

    const formatedDate = `Дата: ${day} ${month} ${year}, ${dayWeek}`;
    const formateTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formatedDate}\n${formateTime}`;
}

//Задание 11
function remember() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5);
    alert(fruit);
    let question_1 = " " + prompt('Какой первый фрукт?');
    if (question_1 === " " + null) {
        alert ('Отмена');
    } else {
        let question_2 = " " + prompt('Какой последний фрукт?');
        if (question_2 === " " + null) {
            alert ('Отмена');
        } else {
            if (!question_1.trim() || !question_2.trim()) {
                alert ('Где-то пробел');
            } else {
                if (question_1.toLowerCase() === fruit[0].toLowerCase() && question_2.toLowerCase() !== fruit[6].toLowerCase() || question_1.toLowerCase() !== fruit[0].toLowerCase() && question_2.toLowerCase() === fruit[6].toLowerCase()) {
                    alert ('Почти правильно')
                } else {
                    if (question_1.toLowerCase() === fruit[0].toLowerCase() && question_2.toLowerCase() === fruit[6].toLowerCase()) {
                        alert ('Правильно!');
                    } else {
                        alert ('Неправильно');
                    }
                }
           }  
        }  
    }
}