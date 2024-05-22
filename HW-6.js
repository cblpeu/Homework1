//Задание 1
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++ ) {
    if (numbs[i] == 10) break;
    console.log (numbs[i]);
}

//Задание 2
const indexNum = [1, 5, 4, 10, 0, 3];
console.log(indexNum.indexOf(4));

//Задание 3
let number = [1, 3, 5, 10, 20]
let joinNumber = number.join('');
console.log(joinNumber);

//Задание 4
let arr = [];
for (i=0; i<3; i++) {
   const nestArr = [];
   for (k=0; k<3; k++) {
     nestArr.push(1);
   }
   arr.push(nestArr);
}
console.log(arr);

//Задание 5
let add = [1, 1, 1];
add.puch(2,2,2);
console.log(add);

//Задание 6
let oneDelete = [9, 8, 7, 'a', 6, 5]

oneDelet.sort();
console.log(oneDelete);

result = oneDelete.filter(n);
console.log(result);

//Задание 7
const guess = [9, 8, 7, 6, 5];

let userNum = prompt ('Введите число');
if (isNaN(userNum) || userNum == false) {
    alert('Что-то не то');
} else if (myNum.includes(userNum)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//Задание 8
const array = 'abcdef';
const reverseArray = array.split('').reverse().join('');
console.log(reverseArray);


//Задание 9
const one = [1, 2, 3];
const two = [... one, 4, 5, 6];
console.log(two)

//Задание 10
const arr2 = [9, 3, 6, 1, 2];
 for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i +1]); 
 }

//Задание 11
const numbers = [9, 3, 7];
const square = numbers.map(function (num) {
    return num*num
})
console.log(square)

//Задание 12
const words = ['слово', 'бег', 'слон']; 
const length = source.map(str => str.length);
console.log(words)

//Задание 13
const numbers2 = [9, 3, 7];
const square2 = numbers2.map(function (num) {
    return num-(num*num)
})
console.log(square2)

//Задание 14 