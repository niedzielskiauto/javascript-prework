{
let playerScore = 0;
let computerScore = 0;

const playGame= function (playerInput) {

    clearMessages();
    
    const getMoveName = function(argMoveId) {
        if(argMoveId == 1) {
        return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    const playerMove = getMoveName(playerInput);
    console.log('Gracz wpisał: ' + playerInput);

    displayResult(computerMove, playerMove);
    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        // Player wins
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            playerScore++;

        // Computer wins
        }  else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Wygrywa komputer!'); 
            computerScore++; 
        
        // Remis
        }  else if(argComputerMove === argPlayerMove) {
            printMessage('Remis!');  
        
        // Check if player input is else then 1 or 2 or 3
        }  else if(argPlayerMove === "nieznany ruch") {
            printMessage(argPlayerMove + ' ,spróbuj jeszcze raz wpisując 1 lub 2 lub 3');  
        }
    } 
    document.getElementById('result').innerHTML = "Gracz: " + playerScore + "<br>" + "Komputer: " + computerScore;
}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });

document.getElementById('clear-button').addEventListener('click',  clearMessages);

document.getElementById('reset-button').addEventListener('click',  resetResult);

}






