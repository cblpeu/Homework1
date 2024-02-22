// 1
let a=10
alert(a)
a=20
alert(a)

//2
const iPhone=2007
alert(iPhone)

//3
const js="Джеймс Гослинг"
alert(js)

//4
let n1=10, n2=2
alert(n1+n2)
alert(n1-n2)
alert(n1*n2)
alert(n1/n2)

//5
let result=2**5
alert(result)

//6
let remainder=9%2
alert(remainder)

//7
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

//8
let age=prompt("Сколько вам лет?")
alert(age)

//9
let user={
    name: "Jim",
    age: 25,
    isAdmin: false
}

//9.1
user["city of residence"]="Moscow"
 
//9.2
user.age=40

//9.3
delete user["city of residence"]

//9.4
let info=prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info])

//10
let name=prompt("Как вас зовут?")
alert('Привет, ${name}?')