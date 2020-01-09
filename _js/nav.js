;(function() {

	/*==================================
    =            Blind Menu            =
    ==================================*/

	var blindMenu = $('.blind-menu'),
		blindMask = $('.blind-mask'),
		blindButton = $('#blindButton');

	function blindMenuActive() {

		var tl = new TimelineMax({
			paused: true,
			reversed: true
		});

		tl
			// .to(blindMask, 0.4, {
			//     autoAlpha: 1,
			//     // xPercent: '100',
			//     // zIndex: '9991',
			//     visibility: 'visible',
			//     ease: Power1.easeInOut
			// }, "-=0.6")
			.to(blindMenu, 0.4, {
				yPercent: '100',
				display: 'block',
				zIndex: '9991',
				visibility: 'visible',
				ease: Power2.easeInOut
			}, "-=0.6");

		blindButton.on('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse(-0.2);
		});

		// blindMask.on('click', function () {
		// 	tl.reverse();
		// });
	}

	/*=====  End of Blind Menu  ======*/

	/*====================================
	=            Blind Change            =
	====================================*/

	var blindImageTurnOff = $('#blindImageTurnOff'),
		blindImageTurnOn = $('#blindImageTurnOn'),
		_body = $('body'),
		_sidebar = $('.sidebar')
	;

	/*----------  Blind Images Off / On  ----------*/
	blindImageTurnOff.click(function () {
		$('.main-content').find('img').addClass('is-hidden');
		$(this).addClass('is-active');
		blindImageTurnOn.removeClass('is-active');
	});

	blindImageTurnOn.click(function () {
		$('.main-content').find('img').removeClass('is-hidden');
		$(this).addClass('is-active');
		blindImageTurnOff.removeClass('is-active');
	});

	/*----------  Blind Images Color B/W  ----------*/
	var blindColorBW = $('#blindColorBW'),
		blindSidebarLogo = $('.sidebar-logo img')
	;

	blindColorBW.click(function () {
		_body.toggleClass('blind-bw');
		// _sidebar.toggleClass('sidebar-bw');
		// blindSidebarLogo.toggle(function () {
		// 	$(this).attr('src','/assets/images/smibs_logo.png');
		// }, function () {
		// 	$(this).attr('src','/assets/images/smibs_logo_w.png');
		// });

		if (_body.hasClass('blind-wb')) {
			_body.removeClass('blind-wb');
		} else if (_body.hasClass('blind-cw')) {
			_body.removeClass('blind-cw');
		} else if (_body.hasClass('blind-yb')) {
			_body.removeClass('blind-yb');
		}
	});

	/*----------  Blind Images Color W/B  ----------*/
	var blindColorWB = $('#blindColorWB');

	blindColorWB.click(function () {
		_body.toggleClass('blind-wb');

		if (_body.hasClass('blind-bw')) {
			_body.removeClass('blind-bw');
		} else if (_body.hasClass('blind-cw')) {
			_body.removeClass('blind-cw');
		} else if (_body.hasClass('blind-yb')) {
			_body.removeClass('blind-yb');
		}
	});

	/*----------  Blind Images Color C/W  ----------*/
	var blindColorCW = $('#blindColorCW');

	blindColorCW.click(function () {
		_body.toggleClass('blind-cw');

		if (_body.hasClass('blind-bw')) {
			_body.removeClass('blind-bw');
		} else if (_body.hasClass('blind-wb')) {
			_body.removeClass('blind-wb');
		} else if (_body.hasClass('blind-yb')) {
			_body.removeClass('blind-yb');
		}
	});

	/*----------  Blind Images Color G/Y  ----------*/
	var blindColorYB = $('#blindColorYB');

	blindColorYB.click(function () {
		_body.toggleClass('blind-yb');

		if (_body.hasClass('blind-bw')) {
			_body.removeClass('blind-bw');
		} else if (_body.hasClass('blind-wb')) {
			_body.removeClass('blind-wb');
		} else if (_body.hasClass('blind-cw')) {
			_body.removeClass('blind-cw');
		}
	});

	/*=====  End of Blind Change  ======*/



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
			.from(navBack, 0.4, {
				autoAlpha: 0,
				ease: Power1.easeInOut
			}, "-=1")
			.to(navMainMobile, 0.4, {
				xPercent: '-100%',
				// zIndex: '9999',
				ease: Power2.easeInOut
			}, "-=1.2")
			// .to(navWrapper, 0.6, {
			// 	xPercent: '50%',
			// 	autoAlpha: 0,
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			// .to(navHeaderTop, 0.6, {
			// 	yPercent: '-100%',
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			.to(navButtonLineMiddle, 0.3, {
				rotation: '180deg',
				ease: Power2.easeInOut
			}, "-=0.6")
			.to(navButtonLineTop, 0.3, {
				rotation: '135deg',
				xPercent: 30,
				yPercent: 450,
				scaleX: 0.6,
				ease: Power2.easeInOut
			}, "-=0.6")
			.to(navButtonLineBottom, 0.3, {
				rotation: '-135deg',
				xPercent: 30,
				yPercent: -450,
				scaleX: 0.6,
				ease: Power2.easeInOut
			}, "-=0.6")
			.staggerFrom(navMainListMobile, 0.6, {
				yPercent: '30%',
				autoAlpha: 0,
				ease: Back.easeInOut
			}, "0.07", "-=0.6")
		;

		navButtonMobile.on('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse(-0.2);
		});

		navBack.on('click', function () {
			tl.reverse(-0.2);
		});

	}

	function navMenuChildrenMobile() {
		$('.nav-main__children').children('a').on('click', function (event) {
			event.preventDefault();
			$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.nav-main__children').siblings('.nav-main__children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
		});
	}

	/*=====  End of Navigation  ======*/

    function initPage() {
		blindMenuActive();
    }

    function initPageMobile() {
		navMenuOpenMobile();
		// navMenuChildrenMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));