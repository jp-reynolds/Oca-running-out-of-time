//things I want to do...

//make a timer of 15 seconds for level 1
//make a timer of 30 seconds for level 2
//make a timer of 60 seconds for level 3

//when timer is up announce that a life is lost and to try again.

//if a player moves outside of the red cells subtract 1 player life (10 to start)
//when the player hovers over the finish square make a level passed for 1 and 2 and 'game won' for level 3.


//this jquery will permanently add hover class after hover
$(function() { 
	//when the mouse moves over the space it changes the tile to green permanently
	//when the start button is clicked it will start the countdown
	$('#startButton').click(function() {
		//since this is in the #startButton click function it won't work until the start button is clicked
		//when the mouse hovers over correctPath tiles it turns them green
		$(".correctPath").on('mouseover', function () {
 			$(this).addClass("hover");
 		});


	//timer starts at this #
	var sec = 3;
	//setting a timer variable that communicates with the stopwatch decreasing by one second
	var timer = setInterval(function () {
		sec--;
		$("#stopwatch").html(sec);
		//conditional statement, if seconds is 0 stop counting 
		if (sec === 0) {
			clearInterval(timer);
			alert("Out of time, GAME OVER");
		}
	//if the seconds are above 0, keep decreasing	
	}, 1000);
	});

	

});



