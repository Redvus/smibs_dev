;(function ($) {

	'use strict';

	const
		anniversary8march = document.querySelector('.anniversary--8march'),
		anniversaryWrapper = document.querySelector(".wrapper"),
		leafBack = document.getElementById('s080324_leafBack'),
		leafFront = document.getElementById('s080324_leafFront'),
		flower_1 = document.getElementById('s080324_flower1'),
		flower_2 = document.getElementById('s080324_flower2'),
		flower_3 = document.getElementById('s080324_flower3'),
		flower_4 = document.getElementById('s080324_flower4'),
		flower_5 = document.getElementById('s080324_flower5'),
		flowerBack = document.getElementById('s080324_border')
	;

	function anniversaryLoad() {

		let tl = new gsap.timeline({
			// delay: 1,
			// onComplete: anniversaryHide(5)
		});

		tl
			.to(anniversary8march, {
				duration: 0.3,
				delay: '-0.7',
				autoAlpha: 1,
				zIndex: 9999,
				easy: 'elastic'
			})
			.from([leafBack, leafFront], {
				duration: 0.8,
				delay: '-0.3',
				y: '3vh',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from([flower_1, flower_2, flower_3, flower_4, flower_5], {
				duration: 0.5,
				delay: '-0.6',
				y: '-3vh',
				stagger: '0.05',
				autoAlpha: 0,
				easy: 'elastic'
			})
			.from(flowerBack, {
				duration: 0.8,
				delay: '0.1',
				autoAlpha: 0,
				easy: 'elastic'
			})
		;
	}

	function anniversaryHide(delay) {
		let tl = new gsap.timeline({
			delay: delay
		});

		tl
			.to(anniversary8march, {
				autoAlpha: 0,
				duration: 0.6,
				delay: '-0.8',
				display: 'none',
				zIndex: -1,
				ease: Power1.easeIn
			})
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

		if (!$.cookie('anny080324_1')) {
			anniversaryLoad();
			$.cookie('anny080324_1', false, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function cookieAnniversaryMobile() {

		if (!$.cookie('anny080324M')) {
			anniversaryLoadMobile();
			$.cookie('anny080324M', true, {
				expires: 0, //Cookie удаляется после закрытия браузера
				path: '/'
			});
		}
	}

	function initDesktop() {
		// cookieAnniversary();
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