function componentDidMount() {
	var canvas = document.getElementById("welcome-star");
	if (!canvas) return;
	var ctx = canvas.getContext('2d');
	var height = $('#home').height();
	canvas.width = window.innerWidth - 30;
	canvas.height = height;
	var stars = [], // Array that contains the stars
		FPS = 30, // Frames per second
		// x = 100, // Number of stars
		x = Math.round(canvas.width / 25),
		mouse = {
			x: 0,
			y: 0
		}; // mouse location
	// Push stars to array
	for (var i = 0; i < x; i++) {
		stars.push({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			radius: Math.random() * 1 + 1,
			vx: Math.floor(Math.random() * 50) - 25,
			vy: Math.floor(Math.random() * 50) - 25
		});
	}
	// Draw the scene
	function draw() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.globalCompositeOperation = "lighter";
		for (var i = 0, x = stars.length; i < x; i++) {
			var s = stars[i];
			ctx.fillStyle = "#fff";
			ctx.beginPath();
			ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
			ctx.fill();
			ctx.fillStyle = 'black';
			ctx.stroke();
		}
		ctx.beginPath();
		for (var i = 0, x = stars.length; i < x; i++) {
			var starI = stars[i];
			ctx.moveTo(starI.x, starI.y);
			if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
			for (var j = 0, x = stars.length; j < x; j++) {
				var starII = stars[j];
				if (distance(starI, starII) < 150) {
					//ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
					ctx.lineTo(starII.x, starII.y);
				}
			}
		}
		ctx.lineWidth = 0.05;
		ctx.strokeStyle = 'white';
		ctx.stroke();
	}

	function distance(point1, point2) {
		var xs = 0;
		var ys = 0;
		xs = point2.x - point1.x;
		xs = xs * xs;
		ys = point2.y - point1.y;
		ys = ys * ys;
		return Math.sqrt(xs + ys);
	}
	// Update star locations
	function update() {
		for (var i = 0, x = stars.length; i < x; i++) {
			var s = stars[i];
			s.x += s.vx / FPS;
			s.y += s.vy / FPS;
			if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
			if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
		}
	}
	canvas.addEventListener('mousemove', function (e) {
		mouse.x = e.clientX;
		mouse.y = e.clientY;
	});
	// Update and draw
	function tick() {
		draw();
		update();
		requestAnimationFrame(tick);
	}
	tick();
}

function clickBio(name) {
	if (window.innerWidth < 768) {
		$(".single-team-member").css("height", "");
	}
	if (name) {
		if ($(`#${name}-bio`).is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$(`#${name}-bio`).fadeIn("slow");
			if (window.innerWidth < 768) {
				var h = $(`#${name}-bio`).css('height');
				$(`#${name}`).css('height', h);
			}
		} else {
			$(`#${name}-bio`).fadeOut("slow");
		}
	} else {
		$(".team-hover-effects").fadeOut("slow");
	}
}

function hoverBio(name) {
	if (window.innerWidth < 768) {
		$(".single-team-member").css("height", "");
	}
	if (name) {
		$(".team-hover-effects").fadeOut("slow");
		$(`#${name}-bio`).fadeIn("slow");
		if (window.innerWidth < 768) {
			var h = $(`#${name}-bio`).css('height');
			$(`#${name}`).css('height', h);
		}
	} else {
		$(".team-hover-effects").fadeOut("slow");
	}
}

$(document).ready(function () {
	componentDidMount();

	window.addEventListener("resize", componentDidMount);

	$('#george-zhao').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#elaine-shao').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#yong-duan').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#kyle-bao').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#joyce-zhang').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#craig-watts').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#terry-fogarty').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#chelsea-rustrum').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#david-passiak').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#monette-stephens').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#amanda-rivera').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#ruxiong-li').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#bing-liu').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#pierre-he').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#ken-huang').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#zong-ling').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#liren-chen').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#deming-cha').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#mingshun-li').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});
	$('#arnold-gu').bind({
		click: function () {
			clickBio(this.id);
		},
		mouseenter: function () {
			hoverBio(this.id);
		},
		mouseleave: function () {
			hoverBio();
		}
	});

	$('#wechat').bind({
		hover: function() {
			if (img === "img/core-img/voicecoin-wechat.jpg") {
				$('img#footer-logo').attr("src", "img/core-img/logo-4.png");
			} else {
				$('img#footer-logo').attr("src", "img/core-img/voicecoin-wechat.jpg");
			}
		},
		click: function () {
			var img = $('img#footer-logo').attr("src");
			if (img === "img/core-img/voicecoin-wechat.jpg") {
				$('img#footer-logo').attr("src", "img/core-img/logo-4.png");
			} else {
				$('img#footer-logo').attr("src", "img/core-img/voicecoin-wechat.jpg");
			}
		},
		mouseenter: function () {
			$('img#footer-logo').attr("src", "img/core-img/voicecoin-wechat.jpg");
		},
		mouseleave: function () {
			$('img#footer-logo').attr("src", "img/core-img/logo-4.png");
		}
	});
});