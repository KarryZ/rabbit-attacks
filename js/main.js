const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function (event) {
	
	let target = event.target;
	event.stopPropagation;
	
	if (target.className == 'fire-btn') {
		$('.fire img').toggleClass('show');
		$('.rabbit').toggleClass('attack');
		$('.rabbit').toggleClass('rabbit');
		$('#audio-fire').trigger('play');
		$('.buttons').children().addClass("disable");
		setTimeout(function () {
			$('.attack').toggleClass('rabbit');
			$('.rabbit').toggleClass('attack');
			$('.fire img').toggleClass('show');
			$('.buttons').children().removeClass("disable");
		}, 7000);
	}
	
	else if (target.className == 'thunder-b') {
		$('.thunder img').toggleClass('show');
		$('.rabbit').toggleClass('attack');
		$('.rabbit').toggleClass('rabbit');
		$("#electro").trigger('play');
		$('.buttons').children().addClass("disable");
		//$('#audio').trigger('play');
		setTimeout(function () {
			$('.attack').toggleClass('rabbit');
			$('.rabbit').toggleClass('attack');
			$('.thunder img').toggleClass('show');
			$('.buttons').children().removeClass("disable");
		}, 7000);
	}
	
	else if (target.className == 'go') {
		// $('.buttons').children().addClass("disable");
		// setTimeout(function () {
		// 	$('.buttons').children().removeClass("disable");
		// }, 7000);

		$('.rabbit').toggleClass('run');
		$('.rabbit').toggleClass('run-away');
		$('.rabbit').toggleClass('rabbit');
		$('.buttons').children().addClass("disable");
		//$('#audio').trigger('play');
		setTimeout(function () {
			$('.run').toggleClass('rabbit');
			$('.rabbit').toggleClass('run');
			$('.rabbit').toggleClass('run-away');
			$('.buttons').children().removeClass("disable");
		}, 7000);
	}



		else if (target.className == 'rabbit-damage') {
	
		$('.rabbit').toggleClass('damage');
		$('.rabbit').toggleClass('rabbit');
		$('.buttons').children().addClass("disable");
		setTimeout(function () {
			$('.damage').toggleClass('rabbit');
			$('.rabbit').toggleClass('damage');
			$('.buttons').children().removeClass("disable");
		}, 600);
	}



			else if (target.className == 'rabbit-die') {
	
		$('.rabbit').toggleClass('lose');
		$('.rabbit').toggleClass('rabbit');
		$('.buttons').children().addClass("disable");
		setTimeout(function () {
			$('.lose').toggleClass('rabbit');
			$('.rabbit').toggleClass('lose');
			$('.buttons').children().removeClass("disable");
		}, 1000);
	}
	
});