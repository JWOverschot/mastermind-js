var code = [];
var codePlayer = [];
var keyWhite = [];
var keyBlack = [];
var gen_nums = [];
var a = 12;
var gameOver = false;

function start() {
	if (gameOver === true) {
		location.reload();
	}
	console.log("Don't cheat");
	document.getElementById("win-lose").style.animationName = "slide-up";
	codeGenarator();
	setTimeout(function(){
		document.getElementById("win-lose").style.display = "none";
	}, 1990);
}

function up() {
	document.getElementById("win-lose").style.animationName = "slide-up-little";
	document.getElementById("arrow").style.animationName = "slide-up-arrow";

	setTimeout(function(){
		document.getElementById("win-lose").style.top = "-90%";
		document.getElementsByTagName("content")[0].style.display = "none";
		document.getElementById("arrow").style.top = "3%";
		document.getElementById("arrow").style.transform = "rotate(180deg)";
		document.getElementById("board").style.marginTop = "74px";
	}, 1990);
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
			document.getElementById("arrow").style.display = "block";
			console.log("You Win!!");
			gameOver = true;
			for (var i = 0; i <= 3; i++) {
				document.getElementById("pinR-" + i).style.backgroundColor = code[i];
			}
			document.getElementById("lineR").style.display = "flex";
			document.getElementById("lineR").style.background = "none";
			document.getElementById("lineR").style.width = "400px";
		}
		if (a == 1) {
			if (keyBlack.length != 4) {
				document.getElementById("text").innerHTML = "YOU LOSE!";
				document.getElementById("win-lose").style.display = "block";
				document.getElementById("win-lose").style.animationName = "slide-down";
				document.getElementById("arrow").style.display = "block";
				console.log("You Lose!!");
				gameOver = true;
				for (var i = 0; i <= 3; i++) {
					document.getElementById("pinR-" + i).style.backgroundColor = code[i];
				}
			}
		}
		a--;
		codePlayer = [];
		keyWhite = [];
		keyBlack = [];
	}
}