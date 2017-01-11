var code = [];
var codePlayer = [];
var keyWhite = [];
var keyBlack = [];

function codeGenarator() {
	var colors = ["red", "black", "white", "blue", "green", "yellow"];

	for (var i = 0; i <= 3; i++) {
		var random = Math.floor((Math.random() * 5));
		code.push(colors[random]);
	}
	console.log(code);
}

function colorInArray(n) {
	var pin = document.getElementById("pin-red");
	
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

	if (codePlayer.length == 4) {
		for (var i = 0; i <= 3; i++) {
			if (codePlayer.includes(code[i])) {
				keyWhite.push("white");
			}
			else {
				console.log("bye");
			}
		}
		for (var i = 0; i <= 3; i++) {
			if (code[i] === codePlayer[i]) {
				keyBlack.push("black");
				console.log("haha");
			}
			else {
				console.log("goodbye");
			}
		}
		document.getElementById("spin12-1").style.backgroundColor = keyWhite[0];
		document.getElementById("spin12-2").style.backgroundColor = keyWhite[1];
		document.getElementById("spin12-3").style.backgroundColor = keyWhite[2];
		document.getElementById("spin12-4").style.backgroundColor = keyWhite[3];

		document.getElementById("spin12-1").style.backgroundColor = keyBlack[0];
		document.getElementById("spin12-2").style.backgroundColor = keyBlack[1];
		document.getElementById("spin12-3").style.backgroundColor = keyBlack[2];
		document.getElementById("spin12-4").style.backgroundColor = keyBlack[3];
	}
	document.getElementById("pin12-1").style.backgroundColor = codePlayer[0];
	document.getElementById("pin12-2").style.backgroundColor = codePlayer[1];
	document.getElementById("pin12-3").style.backgroundColor = codePlayer[2];
	document.getElementById("pin12-4").style.backgroundColor = codePlayer[3];
	console.log(codePlayer);
}