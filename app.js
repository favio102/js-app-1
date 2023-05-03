function computerPlay() {
    let computerPicks = ["rock", "paper", "scissors"];
    let computer;
    computer = Math.floor(Math.random() * computerPicks.length);
    return computerPicks[computer];
}

function player() {
    let playerPick;
    let correctInputs = ["rock", "paper", "scissors"];
    playerPick = prompt("Rock Paper Or Scissors").toLowerCase();
    if (playerPick === "" || !correctInputs.includes(playerPick)) {
        return -100;
    }
    return playerPick;
}

function playRound(playerSelection, computerSelection) {
    let resultRound;
    if (playerSelection === -100) {
        resultRound = { message: "Wrong Input", whoWon: -100 };
    } else if (playerSelection === computerSelection) {
        resultRound = { message: "Tie" };
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultRound = {
            message: "You Lose! Paper beats Rock",
            whoWon: "computer",
        };
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultRound = {
            message: "You Won! Rock beat Scissors",
            whoWon: "player",
        };
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultRound = { message: "You Won! Paper beat Rock", whoWon: "player" };
    } else if (
        playerSelection === "paper" &&
        computerSelection === "scissors"
    ) {
        resultRound = {
            message: "You Lose! Scissors beat Paper",
            whoWon: "computer",
        };
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultRound = {
            message: "You Lose! Rock beats Scissors",
            whoWon: "computer",
        };
    } else if (
        playerSelection === "scissors" &&
        computerSelection === "paper"
    ) {
        resultRound = {
            message: "You Won! Scissors beat Paper",
            whoWon: "player",
        };
    }
    return resultRound;
}

function game() {
    let resultNumber = 0;
    let countRound = 1;
    let result;
    let rounds = 5;
    let playerSelection;
    let computerSelection;
    while (rounds > 0) {
        console.log(`== Round ${countRound++} == `);
        playerSelection = player();
        if (playerSelection === -100) {
            console.log("Get yourself togheter and try again!!⛔⛔");
            break;
        }
        console.log(`You chose: ${playerSelection}`);
        computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);
        if (result.whoWon === "player") {
            resultNumber++;
            console.log(result.message);
        } else if (result.whoWon === "computer") {
            resultNumber--;
            console.log(result.message);
        } else {
            console.log(result.message);
        }
        rounds--;
    }
    if (resultNumber > 0 && playerSelection !== -100) {
        console.log("Yes!!! Team Brainnest won !!! Branko is Defeated !!🎉🎉 ");
    } else if (resultNumber < 0 && playerSelection !== -100) {
        console.log("Branko Wins The Game!! We are fucked!!😢😢💥💥");
    } else if (resultNumber === 0 && playerSelection !== -100) {
        console.log("It's a draw!! Both of you lost no one wins!!➖➖");
    }
}

game();
