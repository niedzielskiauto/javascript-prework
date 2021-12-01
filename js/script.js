let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
    computerMove = 'kamień';
}  else if (randomNumber == 2){
    computerMove = 'papier';
}  else if (randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1'){
    playerMove = 'kamień';
}  else if (playerInput == '2'){
    playerMove = 'papier';
}  else if (playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

// Player wins
if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}  else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');  
}  else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');  
// Computer wins
}  else if(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywa komputer!');  
}  else if(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywa komputer!');  
}  else if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywa komputer!');  
// Remis
}  else if(computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');  
    // Check if player input is else then 1 or 2 or 3
}  else if(playerInput != '1' || playerInput != '2' || playerInput != '3' ){
    printMessage(playerMove + ' ,spróbuj jeszcze raz wpisując 1 lub 2 lub 3');  
}
