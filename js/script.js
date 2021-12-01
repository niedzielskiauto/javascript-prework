function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if (randomNumber == 1){
    computerMove = 'kamień';
}  else if (randomNumber == 2){
    computerMove = 'papier';
}  else if (randomNumber == 3){
    computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*
if (playerInput == '1'){
    playerMove = 'kamień';
}  else if (playerInput == '2'){
    playerMove = 'papier';
}  else if (playerInput == '3'){
    playerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);
/*
// Player wins
if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');

// Computer wins
}  else if(computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywa komputer!');  

// Remis
}  else if(computerMove === playerMove){
    printMessage('Remis!');  

// Check if player input is else then 1 or 2 or 3
}  else if(playerMove === "nieznany ruch"){
    printMessage(playerMove + ' ,spróbuj jeszcze raz wpisując 1 lub 2 lub 3');  
}
*/

displayResult(computerMove, playerMove);

function displayResult(argComputerMove, argPlayerMove){
    // Player wins
    if (argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    
    // Computer wins
    }  else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce' || argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Wygrywa komputer!');  
    
    // Remis
    }  else if(argComputerMove === argPlayerMove){
        printMessage('Remis!');  
    
    // Check if player input is else then 1 or 2 or 3
    }  else if(argPlayerMove === "nieznany ruch"){
        printMessage(argPlayerMove + ' ,spróbuj jeszcze raz wpisując 1 lub 2 lub 3');  
    }
}



