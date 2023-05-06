function computerPlay() {
    let computerPicks = ["rock", "paper", "scissors"];
    let computer;
    computer = Math.floor(Math.random() * computerPicks.length);
    return computerPicks[computer];
}

function player() {
    let exit;
    let playerPick;
    let correctInputs = ["rock", "paper", "scissors"];
    playerPick = prompt(
        "★".repeat(15) +
            "\n---------START GAME-------\n" +
            "        Human VS Computer\n" +
            "★".repeat(15) +
            "\n\nChoose: Rock, Paper Or Scissors"
    );

    if (playerPick === "" || !correctInputs.includes(playerPick)) {
        if (playerPick == null) {
            exit = prompt(
                "Are you sure you want to exit ? Type yes to exit,or press anything else to continue"
            ).toLowerCase();
        }
        if (exit == "yes") {
            console.log("You exited successfully");
            return "exit";
        }
        return "Wrong Input";
    }
    return playerPick.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let resultRound;
    if (playerSelection === "Wrong Input") {
        resultRound = { message: "Wrong Input", whoWon: -100 };
    } else if (playerSelection === "exit") {
        resultRound = { message: "You stopped the game" };
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
    let exit;
    let result;

    let rounds = 6;
    let playerSelection;
    let computerSelection;
    let score1 = 0;
    let score2 = 0;
    let userName = prompt(
        "Welcome to Rock,Paper,Scissors game.Write your name in order to continue..."
    ).trim();
    if (userName == "") {
        userName = prompt("Check input and enter name again");
        if (userName == "") {
            alert(
                "You did't enter a name 2 times , refresh page in order to continue"
            );
            return;
        }
    }
    for (let countRound = 1; countRound < rounds; countRound++) {
        console.log(
            `☆`.repeat(10) +
                ` Round ${countRound} ` +
                `☆`.repeat(10) +
                `\nScore: ${userName} (${score1})|(${score2}) Team Brainnest`
        );
        playerSelection = player();
        if (playerSelection === null) {
            exit = prompt("Are you sure ?");
        }
        console.log(`You chose: ${playerSelection}`);
        computerSelection = computerPlay();
        console.log(`Computer chose: ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);

        if (result.whoWon === "player") {
            resultNumber++;
            score1 += 1;

            console.log(result.message);
        } else if (result.whoWon === "computer") {
            resultNumber--;
            score2 += 1;
            console.log(result.message);
        } else if (result.message === "Tie") {
            console.log(result.message);
        } else if (result.message === "You stopped the game") {
            console.log("Game ended");
            return;
        } else {
            console.log(result.message, "This round didn't count");
            countRound--;
        }
    }

    if (resultNumber > 0 && playerSelection !== -100) {
        window.alert(
            "_-".repeat(22) +
                `\n${userName} Wins The Game!! We are doomed!!😢😢💥💥 \n` +
                "_-".repeat(22) +
                `\nFinal score: ${userName} (${score1})|(${score2}) SkyNet`
        );
    } else if (resultNumber < 0 && playerSelection !== -100) {
        window.alert(
            "_/".repeat(22) +
                `\nYes!!! Team Brainnest won !!! ${userName} is Defeated !!🎉🎉 \n` +
                "_/".repeat(22) +
                `\nFinal score: ${userName} (${score1})|(${score2}) SkyNet`
        );
    } else if (resultNumber === 0 && playerSelection !== -100) {
        window.alert(
            "-|".repeat(22) +
                `\nIt's a draw!! Both of you lost no one wins!!➖➖ \n` +
                "-|".repeat(22) +
                `\nFinal score: ${userName} (${score1})|(${score2}) SkyNet`
        );
    }
}
game();
