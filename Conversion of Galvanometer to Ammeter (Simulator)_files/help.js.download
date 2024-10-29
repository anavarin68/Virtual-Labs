var trip;
$(document).ready(function() {
		var msghelp;
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });
			if(scene == 1)
			{		
			trip = new Trip([	
			{
				sel : $('#help_elem_1'),
				position : 'e',
				content : helpArray[0],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#help_elem_2'),
				position : 'e',
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
	}
	else
	{
			var trip = new Trip([	
			{
				sel : $('#help_elem_3'),
				position : 'e',
				content : helpArray[2],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#key_img'),
				position : 'e',
				content : helpArray[4],
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
			}
		trip.start(); 
		window.trip = trip;		
		});
});