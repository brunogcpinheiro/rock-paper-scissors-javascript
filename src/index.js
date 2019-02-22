let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Pedra";
  if (letter === "p") return "Papel";
  if (letter === "s") return "Tesoura";
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallerUserWord = "user".fontsize(2).sub();
  const smallerCompWord = "comp".fontsize(2).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallerUserWord} ganha de ${convertToWord(
    computer
  )}${smallerCompWord} .Você venceu!`;
  document.getElementById(user).classList.add("win");
  setTimeout(function() {
    document.getElementById(user).classList.remove("win");
  }, 1000);
}

function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallerUserWord = "user".fontsize(2).sub();
  const smallerCompWord = "comp".fontsize(2).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallerUserWord} perde de ${convertToWord(
    computer
  )}${smallerCompWord} .Você perdeu!`;
  document.getElementById(user).classList.add("lose");
  setTimeout(function() {
    document.getElementById(user).classList.remove("lose");
  }, 1000);
}

function draw(user, computer) {
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  const smallerUserWord = "user".fontsize(2).sub();
  const smallerCompWord = "comp".fontsize(2).sub();
  result_div.innerHTML = `${convertToWord(
    user
  )}${smallerUserWord} é igual a ${convertToWord(
    computer
  )}${smallerCompWord} .Empatou!`;
  document.getElementById(user).classList.add("draw");
  setTimeout(function() {
    document.getElementById(user).classList.remove("draw");
  }, 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    default:
      result_div.innerHTML = "nothing";
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });

  paper_div.addEventListener("click", function() {
    game("p");
  });

  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
