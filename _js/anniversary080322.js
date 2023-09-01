;(function ($) {

	'use strict';

	const anniversary8march = document.querySelector('.anniversary--8march'),
		anniversaryWrapper = document.querySelector(".wrapper"),
		annyWoman = document.getElementById('s080322_woman'),
		annyEight = document.getElementById('s080322_eight'),
		annySlogan = document.getElementById('s080322_slogan'),
		annyFlowerTop = document.getElementById('s080322_flowerTop'),
		annyFlowerBottom = document.getElementById('s080322_flowerBottom')
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
			.to(anniversary8march, {
				duration: 0.3,
				delay: '-0.7',
				autoAlpha: 1,
				zIndex: 9999,
				easy: 'elastic'
			})
			.from(annyWoman, {
				duration: 1,
				delay: '-0.3',
				x: '-10vw',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(annySlogan, {
				duration: 0.6,
				delay: '-0.5',
				autoAlpha: 0,
				x: '5vw',
				easy: 'elastic'
			})
			.from(annyEight, {
				duration: 1,
				delay: '-0.1',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(annyFlowerTop, {
				duration: 0.4,
				delay: '-0.5',
				autoAlpha: 0,
				y: '-3vw',
				easy: 'elastic'
			})
			.from(annyFlowerBottom, {
				duration: 0.4,
				delay: '-0.5',
				autoAlpha: 0,
				y: '3vw',
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
			.to(anniversary8march, {
				autoAlpha: 0,
				duration: 0.6,
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
			// .to(wrapper, {
			// 	duration: 0.1,
			// 	delay: '-0.3',
			// 	autoAlpha: 0,
			// 	'position': 'fixed'
			// })
			.to(anniversary8march, {
				duration: 0.3,
				delay: '-0.7',
				autoAlpha: 1,
				zIndex: 9999,
				easy: 'elastic'
			})
			.from(annyWoman, {
				duration: 1,
				delay: '-0.3',
				x: '-10vw',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(annySlogan, {
				duration: 0.6,
				delay: '-0.5',
				autoAlpha: 0,
				x: '5vw',
				easy: 'elastic'
			})
			.from(annyEight, {
				duration: 1,
				delay: '-0.1',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(annyFlowerTop, {
				duration: 0.4,
				delay: '-0.5',
				autoAlpha: 0,
				y: '-3vw',
				easy: 'elastic'
			})
			.from(annyFlowerBottom, {
				duration: 0.4,
				delay: '-0.5',
				autoAlpha: 0,
				y: '3vw',
				easy: 'elastic'
			})
		;
	}

	function cookieAnniversary() {

		if (!$.cookie('anny080323_1')) {
			anniversaryLoad();
			$.cookie('anny080323_1', false, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('anny080323M')) {
			anniversaryLoadMobile();
			$.cookie('anny080323M', true, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function initDesktop() {
		cookieAnniversary();
		// anniversaryLoad();
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