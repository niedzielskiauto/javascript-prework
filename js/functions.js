const printMessage = function(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function() {
	document.getElementById('messages').innerHTML = '';
}

const resetResult = function() {
	playerScore = 0;
	computerScore = 0;
	document.getElementById('result').innerHTML = "Gracz: " + playerScore + "<br>" + "Komputer: " + computerScore;
}