function codeGenarator() {
	var colors = ["red", "black", "white", "blue", "green", "yellow"];
	var code = [];

	for (var i = 0; i <= 3; i++) {
		var random = Math.floor((Math.random() * 5));
		code.push(colors[random]);
	}
	console.log(code);
}
var codePlayer = [];
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
	document.getElementById("pin12-1").style.backgroundColor = codePlayer[0];
	document.getElementById("pin12-2").style.backgroundColor = codePlayer[1];
	document.getElementById("pin12-3").style.backgroundColor = codePlayer[2];
	document.getElementById("pin12-4").style.backgroundColor = codePlayer[3];
	console.log(codePlayer);
}