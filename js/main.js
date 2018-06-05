const buttonsMagic = document.querySelector('.buttons-magic');

buttonsMagic.addEventListener('click', function (event) {

	let target = event.target;
	event.stopPropagation;

	 if (target.className == 'fire-btn') {
		$('.overlay-choice').toggleClass('overlay-choice-active');
		$('.rabbit').toggleClass('attack');
		$('.rabbit').toggleClass('rabbit');
		$('.fire img').toggleClass('show');
		$('#audio-fire').trigger('play');
		$('.buttons-magic').children().addClass("disable");
			setTimeout(function () {
			$('.attack').toggleClass('rabbit');
			$('.rabbit').toggleClass('attack');
			}, 1550);
		
		setTimeout(function () {
			$('.fire img').toggleClass('show');
			$('.buttons-magic').children().removeClass("disable");
		}, 3000);
	}

	else if (target.className == 'thunder-b') {
		$('.overlay-choice').toggleClass('overlay-choice-active');
		$('.rabbit').toggleClass('attack');
		$('.rabbit').toggleClass('rabbit');
		$('.thunder img').toggleClass('show');
		$("#electro").trigger('play');
		$('.buttons-magic').children().addClass("disable");
		//$('#audio').trigger('play');
		
		
		setTimeout(function () {
			$('.attack').toggleClass('rabbit');
			$('.rabbit').toggleClass('attack');
			$('.thunder img').toggleClass('show');
			$('.buttons-magic').children().removeClass("disable");
		}, 3000);
	}
	else if (target.className == 'ice-btn') {
		$('.overlay-choice').toggleClass('overlay-choice-active');
		$('.rabbit').toggleClass('attack');
		$('.rabbit').toggleClass('rabbit');
		$('.ice img').toggleClass('show-ice');
		$("#ice").trigger('play');
		$('.buttons-magic').children().addClass("disable");
		//$('#audio').trigger('play');
		
		setTimeout(function () {
			$('.attack').toggleClass('rabbit');
			$('.rabbit').toggleClass('attack');
		}, 1550);
		setTimeout(function () {
			$('.ice img').toggleClass('show-ice');
			$('.buttons-magic').children().removeClass("disable");
		}, 2500);
	}

	else if (target.className == 'health-btn') {
		$('.overlay-choice').toggleClass('overlay-choice-active');
		$('.add-health').toggleClass('active-health');
		
		$("#health").trigger('play');
		$('.buttons-magic').children().addClass("disable");
		//$('#audio').trigger('play');
		setTimeout(function () {
			$('.add-health').toggleClass('active-health');;
			$('.buttons-magic').children().removeClass("disable");
		}, 1500);
	}

});


const buttonsActive = document.querySelector('.buttons-example');

buttonsActive.addEventListener('click', function (event) {
	let target = event.target;
	event.stopPropagation;
	if (target.className == 'go') {
		// $('.buttons').children().addClass("disable");
		// setTimeout(function () {
		// 	$('.buttons').children().removeClass("disable");
		// }, 7000);

		$('.rabbit').toggleClass('run');
		$('.rabbit').toggleClass('run-away');
		$('.rabbit').toggleClass('rabbit');
		$('.buttons-example').children().addClass("disable");
		//$('#audio').trigger('play');
		setTimeout(function () {
			$('.run').toggleClass('rabbit');
			$('.rabbit').toggleClass('run');
			$('.rabbit').toggleClass('run-away');
			$('.buttons-example').children().removeClass("disable");
		}, 7000);
	}



	else if (target.className == 'rabbit-damage') {

		$('.rabbit').toggleClass('damage');
		$('.rabbit').toggleClass('rabbit');
		$("#damage").trigger('play');
		$('.buttons-example').children().addClass("disable");
		setTimeout(function () {
			$('.damage').toggleClass('rabbit');
			$('.rabbit').toggleClass('damage');
			$('.buttons-example').children().removeClass("disable");
		}, 600);
	}



	else if (target.className == 'rabbit-die') {

		$('.rabbit').toggleClass('lose');
		$('.rabbit').toggleClass('rabbit');
		$('.buttons-example').children().addClass("disable");
		setTimeout(function () {
			$('.lose').toggleClass('rabbit');
			$('.rabbit').toggleClass('lose');
			$('.buttons-example').children().removeClass("disable");
		}, 1000);
	}
	
	else if (target.className == 'button-magic') {
		
		$('.overlay-choice').addClass('overlay-choice-active');
		$("#magic-sound").trigger('play');
		
		
	}
});







