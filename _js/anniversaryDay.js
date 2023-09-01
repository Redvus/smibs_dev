;(function ($) {

	'use strict';

	const anniversary = $('#anniversary120621'),
		anniversaryBody = $('body'),
		a120621_baloon = $('#a120621_baloon'),
		a120621_confetti = $('#a120621_confetti'),
		a120621_num = $('#a120621_num'),
		a120621_slogan = $('#a120621_slogan')
	;

	function anniversaryLoad() {

		let tl = new TimelineMax({
			delay: 1,
			onComplete: anniversaryHide(5)
		});

		tl
			.to(anniversary, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeInOut
			})
			.from(a120621_baloon, 1, {
				autoAlpha: 0,
				y: '10%',
				ease: Back.easeInOut
			}, "-=0.2")
			.from(a120621_confetti, 1.5, {
				autoAlpha: 0,
				y: '-5%',
				ease: Back.easeInOut
			}, "-=0.8")
			.staggerFrom([a120621_num, a120621_slogan], 1, {
				autoAlpha: 0,
				x: '10%',
				ease: Back.easeInOut
			}, 0.05, "-=1.3")
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
				ease: Power1.easeInOut
			}, "-=0.8")
		;
	}

	function anniversaryLoadMobile() {

		let tl = new TimelineMax({
			delay: 1,
			onComplete: anniversaryHide(5)
		});

		tl
			.to(anniversary, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeInOut
			})
			.from(a120621_baloon, 1, {
				autoAlpha: 0,
				y: '10%',
				ease: Back.easeInOut
			}, "-=0.2")
			.from(a120621_confetti, 1.5, {
				autoAlpha: 0,
				y: '-5%',
				ease: Power2.easeInOut
			}, "-=0.8")
			.staggerFrom([a120621_num, a120621_slogan], 1, {
				autoAlpha: 0,
				y: '-10%',
				ease: Back.easeInOut
			}, 0.05, "-=1.3")
		;
	}

	function cookieAnniversary() {

		if (!$.cookie('day120621')) {
			anniversaryLoad();
		}
		$.cookie('day120621', true, {
			expires: 0, //Cookie удаляется после закрытия браузера
			path: '/'
		});
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('day120621M')) {
			anniversaryLoadMobile();
		}
		$.cookie('day120621M', true, {
			expires: 0, //Cookie удаляется после закрытия браузера
			path: '/'
		});
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