function codeGenarator() {
	var colors = ["red", "black", "white", "blue", "green", "yellow"];
	var code = [];

	for (var i = 0; i <= 3; i++) {
		var random = Math.floor((Math.random() * 5));
		code.push(colors[random]);
	}
	console.log(code);
}