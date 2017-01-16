var code = [];
var codePlayer = [];
var keyWhite = [];
var keyBlack = [];
var a = 12;

function start() {
	console.log("Don't cheat");
	document.getElementById("win-lose").style.animationName = "slide-up";
	codeGenarator();
	setTimeout(function(){
		document.getElementById("win-lose").style.display = "none";
	}, 1990);
}

function up() {
	document.getElementById("win-lose").style.animationName = "slide-up-little";
	document.getElementsByTagName("i")[0].style.animationName = "slide-up-arrow";

	setTimeout(function(){
		document.getElementById("win-lose").style.top = "-90%";
		document.getElementsByTagName("content")[0].style.display = "none";
		document.getElementsByTagName("i")[0].style.top = "3%";
		document.getElementsByTagName("i")[0].style.transform = "rotate(180deg)";
		document.getElementById("win-lose").style.filter = "opacity(0.5)";
	}, 1990);
}

function codeGenarator() {
	var colors = ["red", "black", "white", "blue", "green", "yellow"];
	code = [];
	for (var i = 0; i <= 3; i++) {
		var random = Math.floor((Math.random() * 5));
		code.push(colors[random]);
	}
	console.log(code);
}

function colorInArray(n) {
	
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
			document.getElementById("text").innerHTML = "YOU WIN!";
			document.getElementById("win-lose").style.display = "block";
			document.getElementById("win-lose").style.animationName = "slide-down";
			document.getElementsByTagName("i")[0].style.display = "block";
			console.log("You Win!!");
		}
		if (a == 1) {
			if (keyBlack.length != 4) {
				document.getElementById("text").innerHTML = "YOU LOSE!";
				document.getElementById("win-lose").style.display = "block";
				document.getElementById("win-lose").style.animationName = "slide-down";
				document.getElementsByTagName("i")[0].style.display = "block";
				console.log("You Lose!!");
			}
		}
		a--;
		codePlayer = [];
		keyWhite = [];
		keyBlack = [];
	}
}