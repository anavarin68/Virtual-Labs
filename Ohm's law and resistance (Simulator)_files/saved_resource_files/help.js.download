/*
author:anishasl
Date:22/05/2014
file name:help.js
*/
$(document).ready(function() {
		//$(".nano").nanoScroller();
		//alert($(".nano").nanoScroller())
		
		var msghelp;
		
		//$('#olabmenuBar li:first-child a').html("HELP");
	$('#olabmenuBar li:first-child').bind('click',function(){
		$(".nano").nanoScroller({ scroll: 'top' });
			if(wireCount==0)
			{		
			var trip = new Trip([	
			{
				sel : $('#selectMetal'),
				position : 'e',
				content : helpArray[6],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#lengthRange'),
				position : 'e',
				content : helpArray[4],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#diamterRange'),
				position : 'e',
				content : helpArray[5],
				expose : false,
				delay : 3000
			},		
			{
				
				sel : $('#batteryNeg'),
				position : 'e',
				content : helpArray[0],
				expose : false,
				delay : 6000
			},						
			{
				sel : $('#resiswireDiv'),
				position : 'n',
				content : helpArray[1],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#switchKeyImg'),
				position : 'e',
				content : helpArray[2],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#rheoKeyImg'),
				position : 'n',
				content : helpArray[3],
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
				sel : $('#selectMetal'),
				position : 'e',
				content : helpArray[6],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#lengthRange'),
				position : 'e',
				content : helpArray[4],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#diamterRange'),
				position : 'e',
				content : helpArray[5],
				expose : false,
				delay : 3000
			},						
			{
				sel : $('#resiswireDiv'),
				position : 'n',
				content : helpArray[1],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#switchKeyImg'),
				position : 'e',
				content : helpArray[2],
				expose : false,
				delay : 3000
			},
			{
				sel : $('#rheoKeyImg'),
				position : 'n',
				content : helpArray[3],
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