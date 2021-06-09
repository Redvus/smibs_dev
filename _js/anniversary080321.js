;(function ($) {

	'use strict';

	const anniversary8march = $('.anniversary--8march'),
		anniversaryBody = $('body'),
		marchFlower1 = $('#marchFlower1'),
		marchFlower2 = $('#marchFlower2'),
		marchFlower3 = $('#marchFlower3'),
		marchFlower4 = $('#marchFlower4'),
		marchFlower5 = $('#marchFlower5'),
		marchFlower6 = $('#marchFlower6'),
		marchFlower7 = $('#marchFlower7'),
		marchFlower8 = $('#marchFlower8'),
		marchFlower9 = $('#marchFlower9'),
		marchFlower10 = $('#marchFlower10'),
		marchText1 = $('#marchText1'),
		marchText2 = $('#marchText2'),
		marchText3 = $('#marchText3'),
		marchNum = $('#marchNum')
	;

	function anniversaryLoad() {

		let tl = new TimelineMax({
			delay: 1
		});

		let flowerDelay = "-=0.3";

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'hidden'
			// }, "-=0.5")
			.to(anniversary8march, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeIn
			}, "-=0.6")
			.from(marchFlower1, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '90deg',
				ease: Back.easeInOut
			}, "+=0.2")
			.from(marchFlower10, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower2, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '105deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower3, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower6, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower4, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower5, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower8, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower7, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower9, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchNum, 0.8, {
				// y: '-50%',
				// x: "-50%",
				autoAlpha: 0,
				ease: Power2.easeInOut
			}, "-=1")
			.from(marchText1, 1.5, {
				top: '38%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
			.from(marchText2, 1.5, {
				top: '53%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
			.from(marchText3, 1.5, {
				top: '68%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
		;
	}

	function anniversaryHide() {
		let tl = new TimelineMax({
			delay: 7
		});

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'auto'
			// }, "-=0.5")
			.to(anniversary8march, 0.6, {
				autoAlpha: 0,
				display: 'none',
				zIndex: -1,
				ease: Power1.easeIn
			}, "-=0.8")
		;
	}

	function anniversaryLoadMobile() {

		let tl = new TimelineMax({
			delay: 1
		});

		let flowerDelay = "-=0.3";

		tl
			// .to(anniversaryBody, 0.3, {
			// 	'overflow': 'hidden'
			// }, "-=0.5")
			.to(anniversary8march, 0.4, {
				autoAlpha: 1,
				'display': 'block',
				zIndex: 9999,
				ease: Power1.easeIn
			}, "-=0.6")
			.from(marchFlower1, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '90deg',
				ease: Back.easeInOut
			}, "+=0.2")
			.from(marchFlower10, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower2, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '105deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower3, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower6, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower4, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower5, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower8, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower7, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchFlower9, 0.4, {
				scale: '0',
				autoAlpha: 0,
				rotation: '110deg',
				ease: Back.easeInOut
			}, flowerDelay)
			.from(marchNum, 0.8, {
				// y: '-50%',
				// x: "-50%",
				autoAlpha: 0,
				ease: Power2.easeInOut
			}, "-=1")
			.from(marchText1, 1.5, {
				top: '43%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
			.from(marchText2, 1.5, {
				top: '53%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
			.from(marchText3, 1.5, {
				top: '63%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "-=1.2")
		;
	}

	function cookieAnniversary() {

		if (!$.cookie('anny')) {
			anniversaryLoad();
			anniversaryHide();
			$.cookie('anny', false, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('annyMobile')) {
			anniversaryLoadMobile();
			anniversaryHide();
			$.cookie('annyMobile', true, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function initDesktop() {
		cookieAnniversary();
		anniversaryLoad();
		anniversaryHide();
	}

	function initMobile() {
		// cookieAnniversaryMobile();
		// anniversaryLoadMobile();
		// anniversaryHide();
	}

	if (document.body.clientWidth > 420 || screen.width > 420) {
		initDesktop();
	} else {
		initMobile();
	}

})(jQuery);