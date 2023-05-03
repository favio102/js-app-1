const hands = ['rock', 'paper', 'scissors']
const randomIndex = Math.floor(Math.random() * hands.length);
const computerHand = hands[randomIndex];
console.log(computerHand)

let playerHand = " ";
while (true) {
  console.log("Please choose your hand" + "("+hands+")" + "\n>>")
  playerHand = prompt("Enter ");
  if (hands.includes(playerHand)) {
    break;
  }else{
    prompt("Wrong choice....");
  }
}
