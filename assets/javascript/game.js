
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 30;
	var userGuess = '';

	

function randomLetter() {
	var newLetter = letters[Math.floor(Math.random()*letters.length)];
		return newLetter;
}

var compGuess = randomLetter();


document.addEventListener('keyup', function (event) {
	var keyPress = event.key;
	var user = document.getElementById('userGuess');
	user.innerHTML = keyPress; 



	if (keyPress === compGuess){
			wins = ++wins;
			guessesLeft = 30;
			var showWins = document.getElementById('wins');
			showWins.innerHTML = wins;
			compGuess = randomLetter();
			
			

		}else{
			guessesLeft--;
			var guessLeft = document.getElementById('guessesLeft');
			guessLeft.innerHTML = guessesLeft;
		} 

	if (guessesLeft === 0){
		guessesLeft = 30;
		++losses;
		var updateLosses = document.getElementById('losses');
		updateLosses.innerHTML = losses;

		
		
	}
	})

