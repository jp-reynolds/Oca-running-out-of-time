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
		$( ".r6c1" ).mouseover(function() {
			$('.reveal1.correctPath').addClass('correctPathHover');
			$('.reveal1.warning').addClass('warningHover');
		});
		//row 5 column 2
		$( ".r6c2" ).mouseover(function() {
			$('.reveal2.correctPath').addClass('correctPathHover');
			$('.reveal2.warning').addClass('warningHover');
		});
		//row 5 column 3
		$( ".r6c3" ).mouseover(function() {
			$('.reveal3.correctPath').addClass('correctPathHover');
			$('.reveal3.warning').addClass('warningHover');
		});
		//row 5 column 4
		$( ".r6c4" ).mouseover(function() {
			$('.reveal4.correctPath').addClass('correctPathHover');
			$('.reveal4.warning').addClass('warningHover');
		});
		//row 5 column 5
		$( ".r6c5" ).mouseover(function() {
			$('.reveal5.correctPath').addClass('correctPathHover');
			$('.reveal5.warning').addClass('warningHover');
		});

		$( ".r6c6" ).mouseover(function() {
			$('.reveal6.correctPath').addClass('correctPathHover');
			$('.reveal6.warning').addClass('warningHover');
		});

		$( ".r6c7" ).mouseover(function() {
			$('.reveal7.correctPath').addClass('correctPathHover');
			$('.reveal7.warning').addClass('warningHover');
		});

		$( ".r6c8" ).mouseover(function() {
			$('.reveal8.correctPath').addClass('correctPathHover');
			$('.reveal8.warning').addClass('warningHover');
		});

		$( ".r6c9" ).mouseover(function() {
			$('.reveal9.correctPath').addClass('correctPathHover');
			$('.reveal9.warning').addClass('warningHover');
		});

		$( ".r6c10" ).mouseover(function() {
			$('.reveal10.correctPath').addClass('correctPathHover');
			$('.reveal10.warning').addClass('warningHover');
		});
		//TURN UP
		$( ".r5c3" ).mouseover(function() {
			$('.reveal11.correctPath').addClass('correctPathHover');
			$('.reveal11.warning').addClass('warningHover');
		});

		$( ".r4c3" ).mouseover(function() {
			$('.reveal12.correctPath').addClass('correctPathHover');
			$('.reveal12.warning').addClass('warningHover');
		});

		$( ".r3c3" ).mouseover(function() {
			$('.reveal13.correctPath').addClass('correctPathHover');
			$('.reveal13.warning').addClass('warningHover');
		});
		//TOP LEFT CORNER
		$( ".r2c2" ).mouseover(function() {
			$('.reveal14.correctPath').addClass('correctPathHover');
			$('.reveal14.warning').addClass('warningHover');
		});

		$( ".r2c4" ).mouseover(function() {
			$('.reveal15.correctPath').addClass('correctPathHover');
			$('.reveal15.warning').addClass('warningHover');
		});

		$( ".r2c5" ).mouseover(function() {
			$('.reveal16.correctPath').addClass('correctPathHover');
			$('.reveal16.warning').addClass('warningHover');
		});

		$( ".r2c6" ).mouseover(function() {
			$('.reveal17.correctPath').addClass('correctPathHover');
			$('.reveal17.warning').addClass('warningHover');
		});

		$( ".r2c7" ).mouseover(function() {
			$('.reveal18.correctPath').addClass('correctPathHover');
			$('.reveal18.warning').addClass('warningHover');
		});

		$( ".r2c8" ).mouseover(function() {
			$('.reveal19.correctPath').addClass('correctPathHover');
			$('.reveal19.warning').addClass('warningHover');
		});

		$( ".r2c9" ).mouseover(function() {
			$('.reveal20.correctPath').addClass('correctPathHover');
			$('.reveal20.warning').addClass('warningHover');
		});

		$( ".r2c10" ).mouseover(function() {
			$('.reveal21.correctPath').addClass('correctPathHover');
			$('.reveal21.warning').addClass('warningHover');
		});

		$( ".r2c11" ).mouseover(function() {
			$('.reveal22.correctPath').addClass('correctPathHover');
			$('.reveal22.warning').addClass('warningHover');
		});

		$( ".r2c12" ).mouseover(function() {
			$('.reveal23.correctPath').addClass('correctPathHover');
			$('.reveal23.warning').addClass('warningHover');
		});

		$( ".r2c13" ).mouseover(function() {
			$('.reveal24.correctPath').addClass('correctPathHover');
			$('.reveal24.warning').addClass('warningHover');
		});

		$( ".r2c14" ).mouseover(function() {
			$('.reveal25.correctPath').addClass('correctPathHover');
			$('.reveal25.warning').addClass('warningHover');
		});

		$( ".r2c15" ).mouseover(function() {
			$('.reveal26.correctPath').addClass('correctPathHover');
			$('.reveal26.warning').addClass('warningHover');
		});

		$( ".r2c3" ).mouseover(function() {
			$('.revealtoprow.correctPath').addClass('correctPathHover');
			$('.revealtoprow.warning').addClass('warningHover');
		});

		$( ".r7c6" ).mouseover(function() {
			$('.reveal27.correctPath').addClass('correctPathHover');
			$('.reveal27.warning').addClass('warningHover');
		});

		$( ".r3c7" ).mouseover(function() {
			$('.reveal28.correctPath').addClass('treasure');
			$('.reveal28.warning').addClass('warningHover');
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



