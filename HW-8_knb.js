//игра 1
function GuessNumber () {
    const number = Math.floor(Math.random() * 100) + 1;
    alert("Я выбрал одно число от 1 до 100. Как думаешь сможешь угадать его? Я думаю да");
    while (true) {
        const choiceHuman = prompt("Как думаешь что это за число?");
        if (choiceHuman === null || isNaN(choiceHuman)) {
            alert("Ты ввёл что-то не так. Давай ещё раз)");
            continue;
        }
        const userGame = parseInt(choiceHuman);
        if (userGame === computerNum) {
            alert("Ты карасава! Молодец, угадал!");
        } else if (userGame < computerNum) {
            alert("Число, которое я загадал, чуть-чуть больше)");
        } else {
            alert("Число, которое я загадал, чуть-чуть меньше)");
        }
    }
}
//игра 2
function mathGame() {
    function generateNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let a, b, correctAnswer;
    switch (operation) {
        case '+':
            a = generateNum(1, 9);
            b = generateNum(1, 9);
            correctAnswer = a + b;
            break;
            case '-':
            a = generateNum(1, 9);
            b = generateNum(1, 9);
            correctAnswer = a - b;
            break;
            case '*':
            a = generateNum(1, 9);
            b = generateNum(1, 9);
            correctAnswer = a * b;
            break;
            case '/':
            a = generateNum(1, 9);
            b = generateNum(1, 9);
            correctAnswer = a / b;
            break;
    }
    const playerDecision = prompt(`Попробуй оешить эту задачу: ${a} ${operation} ${b} = ?`);
    if (playerDecision === null || isNaN(playerDecision)) {
        alert("Введи именно число");
        return;
    }
    const playerDecisionNum = parseFloat(playerDecision);
    if (playerDecisionNum === correctAnswer) {
        alert("Это правильный ответ, молодец!")
    } else {
        alert(`Это неправильный ответ, верно ${correctAnswer}`);
    }
}
//игра 3
function simpleArithmetic() {
    const userText = prompt("Введи какой-нибудь текст, а я переверну его.");
    const invertedText = userText.split('').reverse().join('');
    alert(`А вот что получилось: ${invertedText}`);
}
//игра 4
function quiz() {
    const questions = [
        {
            question: "Шоу где звучит фраза «крутите барабан»?",
            options: ["1) Танцы", "2) Голос", "3) Поле чудес", "4)Пусть говорят"],
            correctAnswer: "3"
        },
        {
            question: "Висит груша нельзя скушать, что это?",
            options: ["1) Лампочка", "2) Граната", "3) Стакан", "4) Одежда"],
            correctAnswer: "1"
        },
        {
            question: "Какой месяц самый короткий?",
            options: ["1) Январь", "2) Февраль", "3) Март", "4) Август"],
            correctAnswer: "2"
        },
        {
            question: "Когда празднуется День Победы?",
            options: ["1) 9 мая", "2) 31 декабря", "3) 6 мая", "4) 1 сентября"],
            correctAnswer: "1"
        },
        {
            question: "Какой коктейль делается на основе рома?",
            options: ["1) Маргарита", "2) Белый русский", "3) Дайкири", "4) Базиликовый смеш"],
            correctAnswer: "3"
        }
    ];
    let score = 0;
    questions.forEach((q, index) => {
        const userAnswer = prompt(`Вопрос ${index + 1}: ${q.question}\n${q.options.join('\n')}`);
        if (userAnswer === q.correctAnswer) {
            score++;
        }
    });
    alert(`Ты ответил вильно на ${score} вопросов.`);
}
//игра 5
function playKNB() {
    let playerChoice = prompt ("Что выберешь, камень, ножницы или бумага?").toLowerCase();
    while (playerChoice !== "камень" && playerChoice !== "ножницы" && playerChoice !== "бумага") {
        playerChoice = prompt("Ты написал что-то не то. Проверь: камень, ножницы или бумага").toLowerCase();
    } 

    const choice = ["камень", "ножницы", "бумага"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    const robotChoice = choice[randomChoice];

    let result;
    if (playerChoice === robotChoice) {
        result = "Ничья";
    }
    if (playerChoice === "ножницы" && robotChoice === "бумага") {
        result = "Победааа)";
    }
    if (playerChoice === "бумага" && robotChoice === "ножницы") {
        result = "Поражение(";
    }
    if (playerChoice === "бумага" && robotChoice === "камень") {
        result = "Победааа)";
    }
    if (playerChoice === "камень" && robotChoice === "бумага") {
        result = "Поражение(";
    }
    if (playerChoice === "камень" && robotChoice === "ножницы") {
        result = "Победааа)";
    }
    if (playerChoice === "ножницы" && robotChoice === "камень") {
        result = "Поражение(";
    }
    alert(`${result}`);
}
//игра 6
function color() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
}