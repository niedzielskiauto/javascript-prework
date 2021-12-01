

function playGame(playerInput) {

    clearMessages();
    
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


    printMessage('Mój ruch to: ' + computerMove);


    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);



    printMessage('Twój ruch to: ' + playerMove);

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
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });

document.getElementById('clear-button').addEventListener('click',  clearMessages);
  