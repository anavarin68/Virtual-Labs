
$(document).ready(function() {
		var msghelp;
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });		
			var trip = new Trip([	
			{
				sel : $('#help_terminal'),
				position : 'e',
				content : helpArray[0],
				expose : false,
				delay : 4000
			},
			{
				sel : $('#key_1'),
				position : 'n',
				content : helpArray[1],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#key_2'),
				position : 'n',
				content : helpArray[1],
				expose : false,
				delay : 3000
			}],
			{
				onTripStart : function() {},
				onTripEnd : function() {},
				onTripStop : function() {},
				backToTopWhenEnded : true,
				delay : 2000
			});	
		trip.start(); 
		window.trip = trip;		
		});
});