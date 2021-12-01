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
