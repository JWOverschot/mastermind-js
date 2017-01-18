var code = [];
var codePlayer = [];
var gen_nums = [];
var a = 12;
var gameOver = false;
var arrowDetect = false;

function start() {
	var winLose = document.getElementById("win-lose").style;
	if (gameOver === true) {
		location.reload();
	}
	console.log("Don't cheat");
	winLose.animationName = "slide-up";
	codeGenarator();
	setTimeout(function(){
		winLose.display = "none";
	}, 1990);
}

function up() {
	var winLose = document.getElementById("win-lose").style;
	var arrow = document.getElementById("arrow").style;
	var board = document.getElementById("board").style;
	var content = document.getElementsByTagName("content");

	if (arrowDetect === true) {
		winLose.animationName = "slide-down-little";
		arrow.animationName = "slide-down-arrow";
		board.marginTop = "0px";
		content[0].style.display = "block";
		setTimeout(function() {
			winLose.top = "0%";
			arrow.top = "94%";
			arrow.transform = "rotate(0deg)";
		}, 1990);
		arrowDetect = false;
	}
	else if (arrowDetect === false) {
		winLose.animationName = "slide-up-little";
		arrow.animationName = "slide-up-arrow";
		
		setTimeout(function() {
			winLose.top = "-90%";
			arrow.top = "3%";
			content[0].style.display = "none";
			arrow.transform = "rotate(180deg)";
			board.marginTop = "6.3%";
		}, 1990);
		arrowDetect = true;
	}
}

function removeColor() {
	codePlayer.pop();
	document.getElementById("pin"+ a +"-" + codePlayer.length).style.backgroundColor = "#737373";
}

function in_array(array, el) {
	for(var i = 0; i < array.length; i++) 
		if(array[i] == el) return true;
	return false;
}

function get_rand(array) {
	var rand = array[Math.floor(Math.random()*array.length)];
	if(!in_array(gen_nums, rand)) {
		gen_nums.push(rand); 
		return rand;
	}
	return get_rand(array);
}

function codeGenarator() {
	var colors = ["red", "black", "white", "blue", "green", "yellow"];
	for(var i = 0; i <= 3; i++) {
		code.push(get_rand(colors));
	}
	console.log(code);
}

function colorInArray(n) {
	var winLose = document.getElementById("win-lose").style;
	var arrow = document.getElementById("arrow").style;
	var text = document.getElementById("text");
	var button = document.getElementById("button");
	var lineR = document.getElementById("lineR").style;
	var keyWhite = [];
	var keyBlack = [];
	
	if (codePlayer.length < 4) {
		if (n == "red") {
			codePlayer.push("red");
		}
		else if (n == "black") {
			codePlayer.push("black");
		}
		else if (n == "white") {
			codePlayer.push("white");
		}
		else if (n == "blue") {
			codePlayer.push("blue");
		}
		else if (n == "green") {
			codePlayer.push("green");
		}
		else if (n == "yellow") {
			codePlayer.push("yellow");
		}
	}

	for (var i = 0; i <= 3; i++) {
		document.getElementById("pin"+ a +"-" + i).style.backgroundColor = codePlayer[i];
	}

	if (codePlayer.length == 4) {
		for (var i = 0; i <= 3; i++) {
			if (codePlayer.includes(code[i])) {
				keyWhite.push("white");
			}
		}
		for (var i = 0; i <= 3; i++) {
			if (code[i] === codePlayer[i]) {
				keyBlack.push("black");
			}
		}
		for (var i = 0; i <= 3; i++) {
			document.getElementById("spin"+ a +"-" + i).style.backgroundColor = keyWhite[i];
		}
		for (var i = 0; i <= 3; i++) {
			document.getElementById("spin"+ a +"-" + i).style.backgroundColor = keyBlack[i];
		}
		if (keyBlack.length == 4) {
			text.innerHTML = "YOU WIN!";
			winLose.display = "block";
			winLose.animationName = "slide-down";
			arrow.display = "block";
			console.log("You Win!!");
			button.value = "Retry";
			gameOver = true;
			for (var i = 0; i <= 3; i++) {
				document.getElementById("pinR-" + i).style.backgroundColor = code[i];
			}
			lineR.display = "flex";
			lineR.background = "none";
			lineR.width = "400px";
		}
		if (a == 1) {
			if (keyBlack.length != 4) {
				text.innerHTML = "YOU LOSE!";
				winLose.display = "block";
				winLose.animationName = "slide-down";
				arrow.display = "block";
				console.log("You Lose!!");
				button.value = "Retry";
				gameOver = true;
				for (var i = 0; i <= 3; i++) {
					document.getElementById("pinR-" + i).style.backgroundColor = code[i];
				}
				lineR.display = "flex";
				lineR.background = "none";
				lineR.width = "400px";
			}
		}
		a--;
		codePlayer = [];
	}
}