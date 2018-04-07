$(function() { 
	//when the mouse moves over the space it changes the tile to green permanently
	//when the start button is clicked it will start the countdown
	$('#startButton').click(function() {
		//when the mouse hovers over correctPath tiles it turns them green
		// var greenTiles = 0;

		// $(".correctPath").mouseenter( function () {
		// 	greenTiles += 1;
 	// 		var currentCorrectTile = $(this).addClass("correctPathHover");
 				
//this reveals the appropriate colors for warning and correctPath.
		//row 5 column 1
		$( ".tile1" ).mouseover(function() {
			$('.reveal1.correctPath').addClass('correctPathHover');
			$('.reveal1.warning').addClass('warningHover');
		});
		//row 5 column 2
		$( ".tile2" ).mouseover(function() {
			$('.reveal2.correctPath').addClass('correctPathHover');
			$('.reveal2.warning').addClass('warningHover');
		});
		//row 5 column 3
		$( ".tile3" ).mouseover(function() {
			$('.reveal3.correctPath').addClass('correctPathHover');
			$('.reveal3.warning').addClass('warningHover');
		});
		//row 5 column 4
		$( ".tile4" ).mouseover(function() {
			$('.reveal4.correctPath').addClass('correctPathHover');
			$('.reveal4.warning').addClass('warningHover');
		});
		//row 5 column 5
		$( ".tile5" ).mouseover(function() {
			$('.reveal5.correctPath').addClass('correctPathHover');
			$('.reveal5.warning').addClass('warningHover');
		});

		$( ".tile6" ).mouseover(function() {
			$('.reveal6.correctPath').addClass('correctPathHover');
			$('.reveal6.warning').addClass('warningHover');
		});

		$( ".tile7" ).mouseover(function() {
			$('.reveal7.correctPath').addClass('correctPathHover');
			$('.reveal7.warning').addClass('warningHover');
		});

		$( ".tile8" ).mouseover(function() {
			$('.reveal8.correctPath').addClass('correctPathHover');
			$('.reveal8.warning').addClass('warningHover');
		});

		$( ".tile9" ).mouseover(function() {
			$('.reveal9.correctPath').addClass('correctPathHover');
			$('.reveal9.warning').addClass('warningHover');
		});

		$( ".tile10" ).mouseover(function() {
			$('.reveal10.correctPath').addClass('correctPathHover');
			$('.reveal10.warning').addClass('warningHover');
		});



			//counts the number of tiles hovered over to make sure they hit enough to win
 			// currentCorrectTile.find(".correctPath");
 			// console.log(greenTiles); 

 		//hover over warning path
 		// $(".warning").mouseenter( function () {
 		// 	$(this).addClass("warningHover");
 		// });

			//timer starts at this #
			var sec = 100;
			//setting a timer variable that communicates with the stopwatch decreasing by one second
			var timer = setInterval(function () {
				sec--;
				$("#stopwatch").html(sec);
				//conditional statement, if seconds is 0 stop counting 
				if (sec === 0) {
					clearInterval(timer);
					alert("Time's Up");
				}	
			//if the seconds are above 0, keep decreasing	
			}, 1000);

			//this says level won when the cursor moves over the finish line
			$("#finish").mouseenter( function () {
				if (greenTiles > 15 && sec > 0) {
				clearInterval(timer);
 					alert("Level Won!");
 				}
 		});
	});
});



