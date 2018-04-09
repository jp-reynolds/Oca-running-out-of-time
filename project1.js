$(function() { 
	//when the mouse moves over the space it changes the tile to green permanently
	//when the start button is clicked it will start the countdown
	$('#startButton').click(function() {

		
	
//this reveals the appropriate colors for warning and correctPath.
		//row 5 column 1
		$( ".r6c1" ).mouseover(function() {
			console.log($(".r6c1"));
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
			$('.reveal28.correctPath').addClass('treasureHover');
			$('.reveal28.warning').addClass('warningHover');
		});

		$( ".r3c15" ).mouseover(function() {
			$('.reveal29.correctPath').addClass('correctPathHover');
			$('.reveal29.warning').addClass('warningHover');
		});

		$( ".r4c15" ).mouseover(function() {
			$('.reveal30.correctPath').addClass('correctPathHover');
			$('.reveal30.warning').addClass('warningHover');
		});

		$( ".r5c14" ).mouseover(function() {
			$('.reveal31.correctPath').addClass('correctPathHover');
			$('.reveal31.warning').addClass('warningHover');
		});

		$( ".r5c15" ).mouseover(function() {
			$('.reveal32.correctPath').addClass('correctPathHover');
			$('.reveal32.warning').addClass('warningHover');
		});

		$( ".r6c15" ).mouseover(function() {
			$('.reveal33.correctPath').addClass('correctPathHover');
			$('.reveal33.warning').addClass('warningHover');
		});

		$( ".r7c15" ).mouseover(function() {
			$('.reveal34.correctPath').addClass('correctPathHover');
			$('.reveal34.warning').addClass('warningHover');
		});

		$( ".r8c15" ).mouseover(function() {
			$('.reveal35.correctPath').addClass('correctPathHover');
			$('.reveal35.warning').addClass('warningHover');
		});

		$( ".r8c14" ).mouseover(function() {
			$('.reveal36.correctPath').addClass('correctPathHover');
			$('.reveal36.warning').addClass('warningHover');
		});

		$( ".r8c13" ).mouseover(function() {
			$('.reveal37.correctPath').addClass('correctPathHover');
			$('.reveal37.warning').addClass('warningHover');
		});

		$( ".r8c12" ).mouseover(function() {
			$('.reveal38.correctPath').addClass('correctPathHover');
			$('.reveal38.warning').addClass('warningHover');
		});

		$( ".r9c12" ).mouseover(function() {
			$('.reveal39.correctPath').addClass('correctPathHover');
			$('.reveal39.warning').addClass('warningHover');
		});

		$( ".r9c15" ).mouseover(function() {
			$('.reveal40.correctPath').addClass('correctPathHover');
			$('.reveal40.warning').addClass('warningHover');
		});

		$( ".r10c15" ).mouseover(function() {
			$('.reveal41.correctPath').addClass('correctPathHover');
			$('.reveal41.warning').addClass('warningHover');
		});

		$( ".r11c15" ).mouseover(function() {
			$('.reveal42.correctPath').addClass('correctPathHover');
			$('.reveal42.warning').addClass('warningHover');
		});

		$( ".r12c15" ).mouseover(function() {
			$('.reveal43.correctPath').addClass('correctPathHover');
			$('.reveal43.warning').addClass('warningHover');
		});

		$( ".r13c15" ).mouseover(function() {
			$('.reveal44.correctPath').addClass('correctPathHover');
			$('.reveal44.warning').addClass('warningHover');
		});

		$( ".r14c15" ).mouseover(function() {
			$('.reveal45.correctPath').addClass('correctPathHover');
			$('.reveal45.warning').addClass('warningHover');
		});

		$( ".r15c15" ).mouseover(function() {
			$('.reveal46.correctPath').addClass('correctPathHover');
			$('.reveal46.warning').addClass('warningHover');
		});

		$( ".r15c14" ).mouseover(function() {
			$('.reveal47.correctPath').addClass('correctPathHover');
			$('.reveal47.warning').addClass('warningHover');
		});

		$( ".r15c13" ).mouseover(function() {
			$('.reveal48.correctPath').addClass('correctPathHover');
			$('.reveal48.warning').addClass('warningHover');
		});

		$( ".r14c13" ).mouseover(function() {
			$('.reveal49.correctPath').addClass('correctPathHover');
			$('.reveal49.warning').addClass('warningHover');
		});

		$( ".r11c14" ).mouseover(function() {
			$('.reveal50.correctPath').addClass('correctPathHover');
			$('.reveal50.warning').addClass('warningHover');
		});

		$( ".r11c13" ).mouseover(function() {
			$('.reveal51.correctPath').addClass('correctPathHover');
			$('.reveal51.warning').addClass('warningHover');
		});

		$( ".r11c12" ).mouseover(function() {
			$('.reveal52.correctPath').addClass('correctPathHover');
			$('.reveal52.warning').addClass('warningHover');
		});

		$( ".r11c11" ).mouseover(function() {
			$('.reveal53.correctPath').addClass('correctPathHover');
			$('.reveal53.warning').addClass('warningHover');
		});

		$( ".r12c11" ).mouseover(function() {
			$('.reveal54.correctPath').addClass('correctPathHover');
			$('.reveal54.warning').addClass('warningHover');
		});

		$( ".r13c11" ).mouseover(function() {
			$('.reveal55.correctPath').addClass('correctPathHover');
			$('.reveal55.warning').addClass('warningHover');
		});

		$( ".r14c11" ).mouseover(function() {
			$('.reveal56.correctPath').addClass('correctPathHover');
			$('.reveal56.warning').addClass('warningHover');
		});

		$( ".r15c11" ).mouseover(function() {
			$('.reveal57.correctPath').addClass('correctPathHover');
			$('.reveal57.warning').addClass('warningHover');
		});

		$( ".r15c10" ).mouseover(function() {
			$('.reveal58.correctPath').addClass('correctPathHover');
			$('.reveal58.warning').addClass('warningHover');
		});

		$( ".r15c9" ).mouseover(function() {
			$('.reveal59.correctPath').addClass('correctPathHover');
			$('.reveal59.warning').addClass('warningHover');
		});

		$( ".r15c8" ).mouseover(function() {
			$('.reveal60.correctPath').addClass('correctPathHover');
			$('.reveal60.warning').addClass('warningHover');
		});

		$( ".r14c8" ).mouseover(function() {
			$('.reveal61.correctPath').addClass('correctPathHover');
			$('.reveal61.warning').addClass('warningHover');
		});

		$( ".r13c8" ).mouseover(function() {
			$('.reveal62.correctPath').addClass('correctPathHover');
			$('.reveal62.warning').addClass('warningHover');
		});

		$( ".r12c8" ).mouseover(function() {
			$('.reveal63.correctPath').addClass('correctPathHover');
			$('.reveal63.warning').addClass('warningHover');
		});

		$( ".r11c8" ).mouseover(function() {
			$('.reveal64.correctPath').addClass('correctPathHover');
			$('.reveal64.warning').addClass('warningHover');
		});

		$( ".r10c9" ).mouseover(function() {
			$('.reveal65.correctPath').addClass('correctPathHover');
			$('.reveal65.warning').addClass('warningHover');
		});

		$( ".r9c9" ).mouseover(function() {
			$('.reveal66.correctPath').addClass('treasureHover');
			$('.reveal66.warning').addClass('warningHover');
		});

		$( ".r15c7" ).mouseover(function() {
			$('.reveal67.correctPath').addClass('correctPathHover');
			$('.reveal67.warning').addClass('warningHover');
		});

		$( ".r15c6" ).mouseover(function() {
			$('.reveal68.correctPath').addClass('correctPathHover');
			$('.reveal68.warning').addClass('warningHover');
		});

		$( ".r15c5" ).mouseover(function() {
			$('.reveal69.correctPath').addClass('correctPathHover');
			$('.reveal69.warning').addClass('warningHover');
		});

		$( ".r15c4" ).mouseover(function() {
			$('.reveal70.correctPath').addClass('correctPathHover');
			$('.reveal70.warning').addClass('warningHover');
		});

		$( ".r15c3" ).mouseover(function() {
			$('.reveal71.correctPath').addClass('correctPathHover');
			$('.reveal71.warning').addClass('warningHover');
		});

		$( ".r15c2" ).mouseover(function() {
			$('.reveal72.correctPath').addClass('correctPathHover');
			$('.reveal72.warning').addClass('warningHover');
		});

		$( ".r14c2" ).mouseover(function() {
			$('.reveal73.correctPath').addClass('correctPathHover');
			$('.reveal73.warning').addClass('warningHover');
		});

		$( ".r13c2" ).mouseover(function() {
			$('.reveal74.correctPath').addClass('correctPathHover');
			$('.reveal74.warning').addClass('warningHover');
		});

		$( ".r12c2" ).mouseover(function() {
			$('.reveal75.correctPath').addClass('correctPathHover');
			$('.reveal75.warning').addClass('warningHover');
		});

		$( ".r12c3" ).mouseover(function() {
			$('.reveal76.correctPath').addClass('correctPathHover');
			$('.reveal76.warning').addClass('warningHover');
		});

		$( ".r11c3" ).mouseover(function() {
			$('.reveal77.correctPath').addClass('correctPathHover');
			$('.reveal77.warning').addClass('warningHover');
		});

		$( ".r10c3" ).mouseover(function() {
			$('.reveal78.correctPath').addClass('correctPathHover');
			$('.reveal78.warning').addClass('warningHover');
		});

		$( ".r10c2" ).mouseover(function() {
			$('.reveal79.correctPath').addClass('correctPathHover');
			$('.reveal79.warning').addClass('warningHover');
		});


		var treasureTiles = 0;

		 $(".treasure").mouseenter( function () {
		 	treasureTiles += 1;
		 	var currentTreasureTile = $(this).addClass("treasure");
		 	currentTreasureTile.find(".treasure");
		 	console.log(treasureTiles);
		 });

		//when the mouse hovers over correctPath tiles it turns them green
		// var greenTiles = 0;

		// $(".correctPath").mouseenter( function () {
		// 	greenTiles += 1;
 	// 		var currentTreasureTile = $(this).addClass("treasure");

			//counts the number of tiles hovered over to make sure they hit enough to win
 			// currentCorrectTile.find(".correctPath");
 			// console.log(greenTiles); 

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
				if (treasureTiles >= 2 && sec > 0) {
				clearInterval(timer);
 					alert("Level Won!");
 				}
 		});
	});
});



