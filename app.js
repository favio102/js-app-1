function computerPlay() {
  let computerPicks = ["rock", "paper", "scissors"];
  let computer;
  computer = Math.floor(Math.random() * computerPicks.length);
  return computerPicks[computer];
}

function player() {
  let playerPick;
  let correctInputs = ["rock", "paper", "scissors"];
  playerPick = prompt(
    "★".repeat(15) +
      "\n---------START GAME-------\n" +
      "        Human VS Computer\n" +
      "★".repeat(15) +
      "\n\nChoose: Rock, Paper Or Scissors"
  ).toLowerCase();
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
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    resultRound = {
      message: "You Lose! Scissors beat Paper",
      whoWon: "computer",
    };
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    resultRound = {
      message: "You Lose! Rock beats Scissors",
      whoWon: "computer",
    };
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
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
  let score1 = 0;
  let score2 = 0;
  while (rounds > 0) {
    console.log(
      `☆`.repeat(10) +
        ` Round ${countRound++} ` +
        `☆`.repeat(10) +
        `\nScore: Branko (${score1})|(${score2}) Team Brainnest`
    );
    playerSelection = player();
    if (playerSelection === -100) {
      console.log("Get yourself together and try again!!⛔⛔");
      break;
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
    } else {
      console.log(result.message);
    }
    rounds--;
  }
  if (resultNumber > 0 && playerSelection !== -100) {
    window.alert(
      "_-".repeat(22) +
        `\nBranko Wins The Game!! We are fucked!!😢😢💥💥 \n` +
        "_-".repeat(22) +
        `\nFinal score: Branko (${score1})|(${score2}) Team Brainnest`
    );
  } else if (resultNumber < 0 && playerSelection !== -20) {
    window.alert(
      "_/".repeat(22) +
        `\nYes!!! Team Brainnest won !!! Branko is Defeated !!🎉🎉 \n` +
        "_/".repeat(22) +
        `\nFinal score: Branko (${score1})|(${score2}) Team Brainnest`
    );
  } else if (resultNumber === 0 && playerSelection !== -100) {
    window.alert(
      "-|".repeat(22) +
        `\nIt's a draw!! Both of you lost no one wins!!➖➖ \n` +
        "-|".repeat(22) +
        `\nFinal score: Branko (${score1})|(${score2}) Team Brainnest`
    );
  }
  rounds--;
}
if (resultNumber > 0 && playerSelection !== -100) {
  window.alert(
    "_-".repeat(22) +
      `\n${userName} Wins The Game!! We are fucked!!😢😢💥💥 \n` +
      "_-".repeat(22) +
      `\nFinal score: ${userName} (${score1})|(${score2}) SkyNet`
  );
} else if (resultNumber < 0 && playerSelection !== -20) {
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

game();
