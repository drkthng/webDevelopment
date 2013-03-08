// make the circle-id element pulse 3 times, wait 3000ms between these pulse-groups
// object grows for 500ms and shrinks back to normal in 100ms
$(document).ready(function(){
    Ping($('#circle'),500,100,3,3000);
});


// makes the element pulsate like an object on a sonar/radar screen
// parameters:
// element: the jquery element to animate
// durationBigger: time the animation takes to "grow"
// durationSmaller: time the animation takes to return to original size
// frequency: number of times the full animation is shown before the "pause"
// pauseTime: waiting time between animations where nothing happens
function Ping(element, durationBigger, durationSmaller, frequency, pauseTime) {
	for (var i=0;i<frequency;i++)
	{		
		Bigger(element, durationBigger);
		Smaller(element, durationSmaller);
	}
	setTimeout(function(){Ping(element, durationBigger, durationSmaller, frequency, pauseTime)}, pauseTime);
}

function PingLoop(element, durationBigger, durationSmaller, frequency) {
	for (var i=0;i<frequency;i++)
	{		
		Bigger(element, durationBigger);
		Smaller(element, durationSmaller);
	}
}

function Bigger(element, duration) {
	element.animate(
		{ width:30
		, height:30
		, top: -5
		, left: -5
		, opacity: 0.5
		}
		, duration);
}

function Smaller(element, duration) {
	element.animate(
		{ width:20
		, height:20
		, top: 0
		, left: 0
		, opacity: 0.5
		}
		, duration);
}