{
  let playerScore = 0;
  let computerScore = 0;

  const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(argMoveId) {
        switch (argMoveId) {
        case 1:
         return "kamień";
        case 2:
         return "papier";
        case 3:
         return "nożyce";
        }}
       
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log(`Wylosowana liczba to: ${randomNumber}`);

    const computerMove = getMoveName(randomNumber);
    printMessage(`Mój ruch to: ${computerMove}`);

    const playerMove = getMoveName(playerInput);
    console.log(`Gracz wpisał: ${playerInput}`);

    printMessage(`Twój ruch to: ${playerMove}`);

    const displayResult = function (argComputerMove, argPlayerMove) {
      // Player wins
      if (
        (argComputerMove === "kamień" && argPlayerMove === "papier") ||
        (argComputerMove === "papier" && argPlayerMove === "nożyce") ||
        (argComputerMove === "nożyce" && argPlayerMove === "kamień")
      ) {
        printMessage("Ty wygrywasz!");
        playerScore++;
    } 
      else if (argComputerMove === argPlayerMove) {
        printMessage("Remis");
    } 
      else {
        printMessage("Wygrywa komputer!");
        computerScore++;
    }
};
    document.getElementById(
      "result"
    ).innerHTML = `Gracz: ${playerScore} <br> Komputer: ${computerScore}`;
    displayResult(computerMove, playerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });

  document
    .getElementById("clear-button")
    .addEventListener("click", clearMessages);

  document
    .getElementById("reset-button")
    .addEventListener("click", resetResult);
}
