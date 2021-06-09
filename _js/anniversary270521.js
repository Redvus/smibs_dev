;(function ($) {

	'use strict';

	const anniversary8march = $('.anniversary--8march'),
		anniversary = $('.anniversary'),
		anniversaryBody = $('body'),
		bookFlower = $('#bookFlower'),
		libraryText = $('#libraryText')
	;

	function anniversaryLoad() {

		let tl = new TimelineMax({
			delay: 1,
			onComplete: anniversaryHide(7)
		});

		let flowerDelay = "-=0.3";

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'hidden'
			// }, "-=0.5")
			.to(anniversary, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeIn
			}, "+=0.3")
			.from(bookFlower, 1, {
				autoAlpha: 0,
				// x: '30%',
				ease: Power2.easeIn
			})
			.from(libraryText, 1.5, {
				autoAlpha: 0,
				y: '-10%',
				ease: Back.easeInOut
			}, "-=0.3")
		;
	}

	function anniversaryHide(delay) {
		let tl = new TimelineMax({
			delay: delay
		});

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'auto'
			// }, "-=0.5")
			.to(anniversary, 0.6, {
				autoAlpha: 0,
				display: 'none',
				zIndex: -1,
				ease: Power1.easeIn
			}, "-=0.8")
		;
	}

	function anniversaryLoadMobile() {

		let tl = new TimelineMax({
			delay: 1,
			onComplete: anniversaryHide(7)
		});

		let flowerDelay = "-=0.3";

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'hidden'
			// }, "-=0.5")
			.to(anniversary, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeIn
			}, "-=0.6")
			.from(bookFlower, 1, {
				autoAlpha: 0,
				// x: '30%',
				ease: Power2.easeIn
			})
			.from(libraryText, 1.5, {
				autoAlpha: 0,
				y: '-10%',
				ease: Back.easeInOut
			}, "-=0.3")
		;
	}

	function cookieAnniversary() {

		if (!$.cookie('day270521')) {
			anniversaryLoad();
		}
		$.cookie('day270521', true, {
			expires: 0, //Cookie удаляется после закрытия браузера
			path: '/'
		});
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('day270521M')) {
			anniversaryLoadMobile();
		}
		$.cookie('day270521M', true, {
			expires: 0, //Cookie удаляется после закрытия браузера
			path: '/'
		});
	}

	function initDesktop() {
		cookieAnniversary();
	}

	function initMobile() {
		cookieAnniversaryMobile();
	}

	if (document.body.clientWidth > 420 || screen.width > 420) {
		initDesktop();
	} else {
		initMobile();
	}

})(jQuery);