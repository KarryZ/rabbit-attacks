





//(function() {
//    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//    window.requestAnimationFrame = requestAnimationFrame;
//})();
//
//canvasEl = document.getElementById('canvas');
//canvas = canvasEl.getContext('2d');

function isGo(){

  var WIDTH = window.innerWidth-100;
  var HEIGHT = window.innerHeight-100;
	var FPS = 15;
	var actors = [];
	var context = null;
	var stage = {};
	var images = [];
	var sprites = [];

	// STAGE Object
	function Stage() {
		this.left = 0; // left
		this.right = WIDTH; // right
		this.top = 0; // top
		this.bottom = HEIGHT; // bottom
		this.i = 0;
	}

	Stage.prototype = {

		render: function() {
			this.i++;
			if(this.i === sprites.length) this.i = 0;
			var s = sprites[this.i];

			this.clear();

			actors[0].calc();
			actors[0].draw(s);
		},

		clear: function() {
			context.clearRect(0,0,WIDTH,HEIGHT);
			
		}

	};

	// SPRITE Object
	function Sprite(n,x,y,h,w) {
		this.n = n; // sprite name
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	}

	// ACTOR Object
	function Actor() {
		this.y = 210;
		this.r = 87;
		this.vy = 5; // velocity y
	}

	Actor.prototype = {

		calc: function() {
			// screen wrapping
			this.y = this.y + this.vy;

			if (this.y - this.right > stage.bottom) {
				this.y = stage.top - this.right;
			} else if (this.y + this.right < stage.top) {
				this.y = stage.bottom + this.right;
			}
		},

		draw: function(s) {
			context.drawImage(images[s.n], s.x, s.y, s.h, s.w, this.y, 300, 101, 207);
		}
	};

	function init() {

    var canvas = document.getElementById('canvas');
		stage = new Stage();

		canvas.width = WIDTH;
		canvas.height = HEIGHT;
		context = canvas.getContext("2d");
    
    images.character = new Image();
	  images.character.src ='./img/rabbit/run1.png';

			function tick(){
				stage.render();
			}

			setInterval(tick, 1000 / FPS);
    
		sprites.push(new Sprite('character',85, 16, 101, 207));
		sprites.push(new Sprite('character',414, 16, 103, 206));
		sprites.push(new Sprite('character',739, 15, 101, 203));
		sprites.push(new Sprite('character',1074, 15, 103, 206));
		sprites.push(new Sprite('character',1395, 22, 106, 203));
	
	

		var actor = new Actor();
		actors.push(actor);

	}

init();

};


const buttons = document.querySelector('.buttons');


buttons.addEventListener('click', function (event) {
	let target = event.target;
	event.stopPropagation;
	if (target.className == 'fire-btn') {
		
		$('.fire img').toggleClass('show');
		$('#audio-fire').trigger('play');
		$('.buttons').children().addClass("disable");

		
		setTimeout(function () {
			$('.fire img').toggleClass('show');
			$('.buttons').children().removeClass("disable");

		}, 7000);
		
	}	else if (target.className == 'thunder-b') {
		
		  $('.thunder img').toggleClass('show');
		  $("#electro").trigger('play');
		  $('.buttons').children().addClass("disable");
		//$('#audio').trigger('play');
		
			setTimeout(function () {
				$('.thunder img').toggleClass('show');
				$('.buttons').children().removeClass("disable");
			}, 7000);
			
		
	}
	else if (target.className == 'go') {
		isGo();
		$('.buttons').children().addClass("disable");
		setTimeout(function () {
			$('.buttons').children().removeClass("disable");
			}, 7000);
	}
});