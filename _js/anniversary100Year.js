;(function ($) {

	'use strict';

	const anniversary100year = document.querySelector('.anniversary--100year'),
		anniversaryWrapper = document.querySelector(".wrapper"),
		s100yearBack = document.getElementById('s100year__back'),
		s100yearBackRed = document.getElementById('s100year__backRed'),
		s100yearBackLogo = document.getElementById('s100year__logo'),
		s100yearBackLogoBack = document.getElementById('s100year__logoBack'),
		s100yearBackName = document.getElementById('s100year__name'),
		s100yearBackSloganLine = document.getElementById('s100year__sloganLine'),
		s100yearBackSlogan = document.getElementById('s100year__slogan'),
		s100yearBack100White = document.getElementById('s100year__100White'),
		s100yearBack100Red = document.getElementById('s100year__100Red'),
		s100yearBack100Digit = document.getElementById('s100year__100digit')
	;

	function anniversaryLoad() {

		let tl = new gsap.timeline({
			delay: 1,
			onComplete: anniversaryHide(7)
		});

		tl
			// .to(wrapper, {
			// 	duration: 0.1,
			// 	delay: '-0.3',
			// 	autoAlpha: 0,
			// 	'position': 'fixed'
			// })
			.to(anniversary100year, {
				duration: 0.3,
				delay: '-0.7',
				autoAlpha: 1,
				zIndex: 9999,
				easy: 'elastic'
			})
			.from(s100yearBack, {
				duration: 1,
				delay: '-0.3',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(s100yearBackRed, {
				duration: 0.6,
				delay: '-0.5',
				autoAlpha: 0,
				x: '8%',
				easy: 'elastic'
			})
			.from(s100yearBackLogoBack, {
				duration: 0.6,
				delay: '-0.3',
				y: '-5%',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(s100yearBackLogo, {
				duration: 0.6,
				delay: '-0.28',
				autoAlpha: 0,
				y: '-3%',
				easy: 'elastic'
			})
			.from(s100yearBackName, {
				duration: 0.5,
				delay: '-0.25',
				autoAlpha: 0,
				y: '15%',
				easy: 'elastic'
			})
			.from(s100yearBackSloganLine, {
				duration: 0.5,
				delay: '-0.25',
				autoAlpha: 0,
				x: '50%',
				easy: 'elastic'
			})
			.from(s100yearBackSlogan, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '5%',
				easy: 'elastic'
			})
			.from(s100yearBack100White, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
			.from(s100yearBack100Red, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
			.from(s100yearBack100Digit, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
		;
	}

	function anniversaryHide(delay) {
		let tl = new gsap.timeline({
			delay: delay
		});

		tl
			// .to(wrapper, {
			// 	duration: 0.1,
			// 	delay: '-1',
			// 	autoAlpha: 1,
			// 	'position': 'relative'
			// })
			.to(anniversary100year, 0.6, {
				autoAlpha: 0,
				display: 'none',
				zIndex: -1,
				ease: Power1.easeIn
			}, "-=0.8")
		;
	}

	function anniversaryLoadMobile() {

		let tl = new gsap.timeline({
			delay: 1,
			onComplete: anniversaryHide(7)
		});

		tl
			.to(anniversary100year, {
				duration: 0.3,
				delay: '-0.7',
				autoAlpha: 1,
				zIndex: 9999,
				easy: 'elastic'
			})
			.from(s100yearBack, {
				duration: 1,
				delay: '-0.3',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(s100yearBackRed, {
				duration: 0.6,
				delay: '-0.5',
				autoAlpha: 0,
				y: '5%',
				easy: 'elastic'
			})
			.from(s100yearBackLogoBack, {
				duration: 0.6,
				delay: '-0.3',
				y: '-5%',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(s100yearBackLogo, {
				duration: 0.6,
				delay: '-0.28',
				autoAlpha: 0,
				y: '-3%',
				easy: 'elastic'
			})
			.from(s100yearBackName, {
				duration: 0.5,
				delay: '-0.25',
				autoAlpha: 0,
				y: '15%',
				easy: 'elastic'
			})
			.from(s100yearBackSloganLine, {
				duration: 0.5,
				delay: '-0.25',
				autoAlpha: 0,
				y: '5%',
				easy: 'elastic'
			})
			.from(s100yearBackSlogan, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '5%',
				easy: 'elastic'
			})
			.from(s100yearBack100White, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
			.from(s100yearBack100Red, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
			.from(s100yearBack100Digit, {
				duration: 0.5,
				delay: '-0.28',
				autoAlpha: 0,
				x: '-5%',
				easy: 'elastic'
			})
		;
	}

	function cookieAnniversary() {

		if (!$.cookie('anny071222')) {
			anniversaryLoad();
			$.cookie('anny071222', false, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('anny071222M')) {
			anniversaryLoadMobile();
			$.cookie('anny071222M', true, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function initDesktop() {
		// cookieAnniversary();
		anniversaryLoad();
	}

	function initMobile() {
		cookieAnniversaryMobile();
		// anniversaryLoadMobile();
	}

	if (document.body.clientWidth > 420 || screen.width > 420) {
		initDesktop();
	} else {
		initMobile();
	}

})(jQuery);