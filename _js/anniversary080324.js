;(function ($) {

	'use strict';

	const
		anniversaryDay = document.querySelector('.anniversary--8march')
	;

	anniversaryDay.innerHTML = `
		<div id="s080324_border"></div>
		<img src="assets/images/anniversary/08-03-24/leafBack.png" id="s080324_leafBack" alt="">
		<img src="assets/images/anniversary/08-03-24/leafFront.png" id="s080324_leafFront" alt="">
		<img src="assets/images/anniversary/08-03-24/flower_1.png" id="s080324_flower1" alt="">
		<img src="assets/images/anniversary/08-03-24/flower_2.png" id="s080324_flower2" alt="">
		<img src="assets/images/anniversary/08-03-24/flower_3.png" id="s080324_flower3" alt="">
		<img src="assets/images/anniversary/08-03-24/flower_4.png" id="s080324_flower4" alt="">
		<img src="assets/images/anniversary/08-03-24/flower_5.png" id="s080324_flower5" alt="">
		<img src="assets/images/anniversary/08-03-24/sloganHappy.png" id="s080324_happy" alt="">
		<img src="assets/images/anniversary/08-03-24/sloganLove.png" id="s080324_love" alt="">
		<img src="assets/images/anniversary/08-03-24/sloganGoodness.png" id="s080324_goodness" alt="">
	`;

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
		flowerBack = document.getElementById('s080324_border'),
		sloganHappy = document.getElementById('s080324_happy'),
		sloganLove = document.getElementById('s080324_love'),
		sloganGoodness = document.getElementById('s080324_goodness')
	;

	function anniversaryLoad() {

		let tl = new gsap.timeline({
			delay: 1,
			onComplete: anniversaryHide(5)
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
			.from([sloganHappy, sloganLove, sloganGoodness], {
				duration: 0.8,
				delay: '-0.6',
				// y: '-2vh',
				scale: '0.97',
				stagger: '0.05',
				autoAlpha: 0,
				easy: 'elastic'
			})
		;
	}

	function anniversaryHide(delay) {
		let tl = new gsap.timeline({
			delay: delay,
			onComplete: () => {
				anniversaryDay.removeChild(leafFront);
				anniversaryDay.removeChild(leafBack);
				anniversaryDay.removeChild(flowerBack);
				anniversaryDay.removeChild(flower_1);
				anniversaryDay.removeChild(flower_2);
				anniversaryDay.removeChild(flower_3);
				anniversaryDay.removeChild(flower_4);
				anniversaryDay.removeChild(flower_5);
				anniversaryDay.removeChild(sloganGoodness);
				anniversaryDay.removeChild(sloganHappy);
				anniversaryDay.removeChild(sloganLove);
			}
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
			onComplete: anniversaryHide(5)
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
			.from([sloganHappy, sloganLove, sloganGoodness], {
				duration: 0.8,
				delay: '-0.6',
				// y: '-2vh',
				scale: '0.97',
				stagger: '0.05',
				autoAlpha: 0,
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
		anniversaryLoad();
	}

	function initMobile() {
		// cookieAnniversaryMobile();
		anniversaryLoadMobile();
	}

	if (document.body.clientWidth > 420 || screen.width > 420) {
		initDesktop();
	} else {
		initMobile();
	}

})(jQuery);