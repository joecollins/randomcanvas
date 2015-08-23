(function() {
	random(5);

	function random(loopint){
		for(i = 0; i <= loopint; i++){
			var rand0 = Math.floor(Math.random() * (500 - 10)) + 10;
			var rand1 = Math.floor(Math.random() * (500 - 10)) + 10;
			var rand2 = Math.floor(Math.random() * (500 - 10)) + 10;
			var rand3 = Math.floor(Math.random() * (500 - 10)) + 10;

			draw(rand0, rand1, rand2, rand3);
		}
	}

	function draw(rand0, rand1, rand2, rand3) {
		var canvas = document.getElementById('random');
		var ctx = canvas.getContext('2d');

		ctx.fillStyle = "rgb(0,0,0)";
        ctx.fillRect (rand0, rand1, rand2, rand3);
	}
})();