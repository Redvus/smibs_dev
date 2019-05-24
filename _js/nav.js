;(function() {

	/*==================================
    =            Navigation            =
    ==================================*/

	/*---------  Nav Mobile  ---------*/
	var navButtonMobile = $('#navButtonMobile'),
		navMainMobile = $('#navMainMobile'),
		navMainListMobile = $('.nav-mobile__menu li'),
		navBack = $('.nav-mobile__mask'),
		navButtonLineTop = $('.nav-button-line__top'),
		navButtonLineMiddle = $('.nav-button-line__middle'),
		navButtonLineBottom = $('.nav-button-line__bottom'),
		navWrapper = $('.wrapper'),
		navHeaderTop = $('.header-top')
	;

	function navMenuOpenMobile() {

		var tl = new TimelineMax({
			paused: true,
			reversed: true
		});

		tl
			.from(navBack, 0.6, {
				scaleX: '0',
				ease: Power2.easeInOut
			}, "-=0.6")
			.to(navMainMobile, 0.6, {
				xPercent: '-100%',
				// zIndex: '9999',
				ease: Power2.easeInOut
			}, "-=0.4")
			// .to(navWrapper, 0.6, {
			// 	xPercent: '50%',
			// 	autoAlpha: 0,
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			// .to(navHeaderTop, 0.6, {
			// 	yPercent: '-100%',
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			.to(navButtonLineMiddle, 0.5, {
				rotation: '180deg',
				ease: Power2.easeInOut
			}, "-=0.8")
			.to(navButtonLineTop, 0.5, {
				rotation: '135deg',
				xPercent: 30,
				yPercent: 480,
				scaleX: 0.6,
				ease: Power2.easeInOut
			}, "-=0.8")
			.to(navButtonLineBottom, 0.5, {
				rotation: '-135deg',
				xPercent: 30,
				yPercent: -480,
				scaleX: 0.6,
				ease: Power2.easeInOut
			}, "-=0.8")
			.staggerFrom(navMainListMobile, 0.6, {
				yPercent: '30%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "0.07", "-=0.3")
		;

		navButtonMobile.on('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse(-0.4);
		});

		navBack.on('click', function () {
			tl.reverse(-0.4);
		});

	}

	/*=====  End of Navigation  ======*/

    function initPage() {

    }

    function initPageMobile() {
		navMenuOpenMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));