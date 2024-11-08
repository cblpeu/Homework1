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
