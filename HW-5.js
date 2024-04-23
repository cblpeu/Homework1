//задание 1
function minNumbers(a,b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(minNumbers(7,7));
console.log(minNumbers(3,4));
console.log(minNumbers(8,2));

//задание 2
function even (number) {
    return number % 2 == 0;
}

console.log(even(10));
console.log(even(13));

//задание 3
function square(с) {
    return c*с;
}

console.log (square(9));

//задание 4
function user() {
    let age = prompt('Сколько вам лет?');
    if (age < 0) {
        alert ('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert ('Привет, дружище!');
    } else if (age >= 13) {
        alert ('Добро пожаловать');
    }
}

//задание 5
function numbersMylt (a,b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

//задание 6
function numberCube () {
    let a = prompt('Введите число');
    a = number(a)
    if (isNaN(a)) {
        return 'Переданный параметр не является числом'
    } else {
        return `${a} в кубе равняется ${a**3}`;
    }
}

//задание 7 
function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 6,
    getArea,
    getPerimeter,
};
const circle2 = {
    radius: 13,
    getArea,
    getPerimeter,
};


//Задание 8
function season(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 1 || month == 2 || month == 12 ) {
        return "Зима";
    } else {
        return "Что-то странное)"
    }
}
console.log(season(prompt("Введите число")));
