function getPlayerChoice() {
    let PlayerChoice = prompt ("Что выберешь, камень, ножницы или бумага?");
    while (PlayerChoice !== "камень" && PlayerChoice !== "ножницы" && PlayerChoice !== "бумага");
    return PlayerChoice  
}

function getRobotChoice() {
    const choice = ["камень", "ножницы", "бумага"];
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

function choosingWinner() {
    if (PlayerChoice === RobotChoice) {
        return "Ничья";
    }
    if (PlayerChoice === "ножницы", RobotChoice === "бумага") {
        return "Победааа)"
    }
    if (PlayerChoice === "бумага", RobotChoice === "ножницы") {
        return "Поражение("
    }
    if (PlayerChoice === "бумага", RobotChoice === "камень") {
        return "Победааа)"
    }
    if (PlayerChoice === "камень", RobotChoice === "бумага") {
        return "Поражение("
    }
    if (PlayerChoice === "камень", RobotChoice === "ножницы") {
        return "Победааа)"
    }
    if (PlayerChoice === "ножницы", RobotChoice === "камень") {
        return "Поражение("
    }
}

function resultGame() {
    const result = choosingWinner();
    aler(`${result}`);
} 