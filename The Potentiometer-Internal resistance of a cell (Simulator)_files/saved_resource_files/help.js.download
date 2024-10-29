// JavaScript Document
$(document).ready(function() {
	$('#olabmenuBar li:first-child').bind('click',function(){
			
			var trip = new Trip([
			{
				sel : $('#helpPoint'),
				position : 'n',
				content : HelpMsg[0],
				expose : false,
				delay : 6000
			}, 
			{
				sel : $('#oneWayKey'),
				position : 'n',
				content :HelpMsg[1],
				
				expose : false,
				delay : 6000
			},
			{
				sel : $('#twoWayKey'),
				position : 'n',
				content :HelpMsg[1],
				
				expose : false,
				delay : 6000
			},
			{
				sel : $('#jockey'),
				position : 'n',
				content :HelpMsg[2],
				
				expose : false,
				delay : 6000
			}
			],
			{
				onTripStart : function() {
				console.log("onTripStart");
			},
				onTripEnd : function() {
				console.log("onTripEnd");
			},
				onTripStop : function() {
				console.log("onTripStop");
			},
			backToTopWhenEnded : false,
			delay : 4000
			});
		
		trip.start(); 
		window.trip = trip;
		});
});
