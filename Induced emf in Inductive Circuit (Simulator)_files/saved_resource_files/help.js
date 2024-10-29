var tripFlag = false;
$(document).ready(function() {
$('#simHelp').bind('click',function(){

	tripFlag = true;
		$(".content").scrollTop(0);
		if (showArr == 0) {
			trip = new Trip([
				{
					sel: $('#checkCir'),
					position: 'w',
					content: helparr[0],
					expose: false,
					delay: 6000
				},
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 1) {
			trip = new Trip([
				{
					sel: $('#checkCir'),
					position: 'w',
					content: helparr[0],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 2) {
			trip = new Trip([
				{
					sel: $('#bulbLeft'),
					position: 'w',
					content: helparr[1],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 3) {
			trip = new Trip([
				{
					sel: $('#bulbRight'),
					position: 'e',
					content: helparr[2],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 4) {
			trip = new Trip([
				{
					sel: $('#inductLeft'),
					position: 'w',
					content: helparr[3],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 5) {
			trip = new Trip([
				{
					sel: $('#inductRight'),
					position: 'e',
					content: helparr[4],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 6) {
			trip = new Trip([
				{
					sel: $('#switchRight'),
					position: 's',
					content: helparr[5],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 7) {
			trip = new Trip([
				{
					sel: $('#selfInductance'),
					position: 'n',
					content: helparr[6],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 8) {
			trip = new Trip([
				{
					sel: $('#changeInCurrent'),
					position: 'n',
					content: helparr[7],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 9) {
			trip = new Trip([
				{
					sel: $('#key'),
					position: 's',
					content: helparr[8],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 10) {
			trip = new Trip([
				{
					sel: $('#key'),
					position: 's',
					content: helparr[9],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 11) {
			$(".control-scroll-area").animate({ 'scrollTop': '600px' },function(){

			trip = new Trip([
				{
					sel: $('#text'),
					position: 'e',
					content: helparr[10],
					expose: false,
					delay: 4000
				},
			])
			trip.start();
			window.trip = trip;
		})
		}
		else if (showArr == 12) {
			trip = new Trip([
				{
					sel: $('#inferenceImg'),
					position: 'e',
					content: helparr[11],
					expose: false,
					delay: 4000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		
		else if (showArr == 13) {
				trip = new Trip([
					{
						sel: $('#inferenceImg'),
						position: 'e',
						content: helparr[11],
						expose: false,
						delay: 4000
					}
				])
				trip.start();
				window.trip = trip;
			
		}
		else if (showArr == 14) {
			trip = new Trip([
				{
					sel: $('#selfInductance'),
					position: 'e',
					content: helparr[6],
					expose: false,
					delay: 4000
				},
				{
					sel: $('#changeInCurrent'),
					position: 'e',
					content: helparr[7],
					expose: false,
					delay: 4000
				},
				{
					sel: $('#key'),
					position: 's',
					content: helparr[8],
					expose: false,
					delay: 4000
				}

			]);
			trip.start();
			window.trip = trip;
		}
		else if (showArr == 15) {
			trip = new Trip([
				{
					sel: $('#cirHelp'),
					position: 's',
					content: helparr[14],
					expose: false,
					delay: 6000
				}
			]);
			trip.start();
			window.trip = trip;

		}
		else if (showArr == 16) {
			trip = new Trip([
				{
					
						sel: $('#simReset'),
						position: 's',
						content: helparr[13],
						expose: false,
						delay: 4000
					
				}
			]);
			trip.start();
			window.trip = trip;

		}
					
					
	});



	$('#inferenceImg').bind('click', function () {

		tripFlag = 1;
showArr=16
		trip = new Trip([{
			sel: $('#inferenceImg'),
			position: 'e',
			content: inferenceMsg[0],
			expose: false,
			delay: 6000
		},

		]);
		trip.start();
		window.trip = trip;
	})
	
});