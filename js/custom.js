function componentDidMount() {
	var canvas = document.getElementById("welcome-star"),
		ctx = canvas.getContext('2d');
	var height = $('#home').height();
	canvas.width = window.innerWidth;
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



$(document).ready(function () {
	componentDidMount();

	window.addEventListener("resize", componentDidMount);

	$("#george-zhao").click(function () {
		if ($("#george-zhao-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#george-zhao-bio").fadeIn("slow");
		} else {
			$("#george-zhao-bio").fadeOut("slow");
		}
	});
	$("#elaine-shao").click(function () {
		if ($("#elaine-shao-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#elaine-shao-bio").fadeIn("slow");
		} else {
			$("#elaine-shao-bio").fadeOut("slow");
		}
	});
	$("#yong-duan").click(function () {
		if ($("#yong-duan-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#yong-duan-bio").fadeIn("slow");
		} else {
			$("#yong-duan-bio").fadeOut("slow");
		}
	});
	$("#kyle-bao").click(function () {
		if ($("#kyle-bao-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#kyle-bao-bio").fadeIn("slow");
		} else {
			$("#kyle-bao-bio").fadeOut("slow");
		}
	});
	$("#joyce-zhang").click(function () {
		if ($("#joyce-zhang-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#joyce-zhang-bio").fadeIn("slow");
		} else {
			$("#joyce-zhang-bio").fadeOut("slow");
		}
	});
	$("#craig-watts").click(function () {
		if ($("#craig-watts-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#craig-watts-bio").fadeIn("slow");
		} else {
			$("#craig-watts-bio").fadeOut("slow");
		}
	});
	$("#terry-fogarty").click(function () {
		if ($("#terry-fogarty-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#terry-fogarty-bio").fadeIn("slow");
		} else {
			$("#terry-fogarty-bio").fadeOut("slow");
		}
	});
	$("#chelsea-rustrum").click(function () {
		if ($("#chelsea-rustrum-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#chelsea-rustrum-bio").fadeIn("slow");
		} else {
			$("#chelsea-rustrum-bio").fadeOut("slow");
		}
	});
	$("#david-passiak").click(function () {
		if ($("#david-passiak-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#david-passiak-bio").fadeIn("slow");
		} else {
			$("#david-passiak-bio").fadeOut("slow");
		}
	});
	$("#monette-stephens").click(function () {
		if ($("#monette-stephens-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#monette-stephens-bio").fadeIn("slow");
		} else {
			$("#monette-stephens-bio").fadeOut("slow");
		}
	});
	$("#amanda-rivera").click(function () {
		if ($("#amanda-rivera-bio").is(":hidden")) {
			$(".team-hover-effects").fadeOut("slow");
			$("#amanda-rivera-bio").fadeIn("slow");
		} else {
			$("#amanda-rivera-bio").fadeOut("slow");
		}
	});
});
