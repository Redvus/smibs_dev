;(function() {

	/*==================================
    =            Blind Menu            =
    ==================================*/

	const blindMenu = $('.blind-menu'),
		blindMask = $('.blind-mask'),
		blindButton = $('#blindButton');

	function blindMenuActive() {

		let tl = new TimelineMax({
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

		/*jshint -W030 */
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

	const blindImageTurnOff = $('#blindImageTurnOff'),
		blindImageTurnOn = $('#blindImageTurnOn'),
		_body = $('body'),
		_sidebar = $('.sidebar'),
		blindSizeSmall = $('#blindSizeSmall'),
		blindSizeBase = $('#blindSizeBase'),
		blindSizeLarge = $('#blindSizeLarge'),
		blindStyleMain = $(".css-main[rel='stylesheet']"),
		blindStyleBW = $(".css-blind-bw[rel='stylesheet']")
	;

	/*----------  Blind Font Size Small  ----------*/
	blindSizeSmall.click(function () {
		$('.main-content__inside').find('p').css({'fontSize': '0.8rem'});
	});
	blindSizeBase.click(function () {
		$('.main-content__inside').find('p').css({'fontSize': '1rem'});
	});
	blindSizeLarge.click(function () {
		$('.main-content__inside').find('p').css({'fontSize': '1.2rem'});
	});

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
	const blindColorBW = $('#blindColorBW'),
		blindSidebarLogo = $('.sidebar-logo img')
	;

	// blindColorBW.toggle(function () {
	// 	// _body.toggleClass('blind-bw');
	// 	// // _sidebar.toggleClass('sidebar-bw');
	// 	// // blindSidebarLogo.toggle(function () {
	// 	// // 	$(this).attr('src','/assets/images/smibs_logo.png');
	// 	// // }, function () {
	// 	// // 	$(this).attr('src','/assets/images/smibs_logo_w.png');
	// 	// // });

	// 	// if (blindStyleBW.attr("disabled", "true")) {
	// 	// 	_body.removeClass('blind-wb');
	// 	// } else if (_body.hasClass('blind-cw')) {
	// 	// 	_body.removeClass('blind-cw');
	// 	// } else if (_body.hasClass('blind-yb')) {
	// 	// 	_body.removeClass('blind-yb');
	// 	// }

	// 	blindStyleBW.removeAttr("disabled");
	// 	blindStyleMain.attr("disabled", "disabled");
	// 	// let index = $(".swatch").index(this);
	// 	// blindStyleMain.attr("disabled", "true");
	// 	// blindStyleMain.eq(index).attr("disabled", "");

	// }, function () {
	// 	blindStyleBW.attr("disabled", "disabled");
	// 	blindStyleMain.removeAttr("disabled");
	// });

	/*----------  Blind Images Color W/B  ----------*/
	const blindColorWB = $('#blindColorWB');

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
	const blindColorCW = $('#blindColorCW');

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
	const blindColorYB = $('#blindColorYB');

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

	function blindStyle() {
		let colors = new Array;
		// Выключаем все ссылки со стилем .switch и строим массив цветов.
		$(".switch[rel='stylesheet']").each(function() {
			$(this).attr("disabled", "true");
		});

		$(".blind-menu__nav-color").click(function() {
			// $(".swatch").removeClass("swatch_hi");
			// $(this).addClass("swatch_hi");
			var index = $(".swatch").index(this);
			$(".switch[rel='stylesheet']").attr("disabled", "true");
			$(".switch[rel='stylesheet']").eq(index).attr("disabled", "");
			$.cookie('sheetswitch_idx', index, {expires: 7});
		});

		let selected = $(".switch[rel='stylesheet']").filter(function () {
			return $(this).attr("disabled") == false;
		});
		let current_idx = $(".switch[rel='stylesheet']").index($(selected));
		let length = $(".switch[rel='stylesheet']").size();

		if (current_idx >= 0) {
			let next = current_idx + 1;
			if (next > (length - 1)) next = 0;
			$(".switch[rel='stylesheet']").attr("disabled", "true");
			$(".switch[rel='stylesheet']").eq(next).attr("disabled", "");
			// $(".swatch").removeClass("swatch_hi");
			// $(".swatch").eq(next).addClass("swatch_hi");
			$.cookie('sheetswitch_idx', next, {expires: 7});
		}

		if ($.cookie('sheetswitch_idx')) {
			var idx = $.cookie('sheetswitch_idx');
			$(".switch[rel='stylesheet']").eq(idx).attr("disabled", "");
			// $(".swatch").eq(idx).addClass("swatch_hi");
		}
	}

	/*=====  End of Blind Change  ======*/


	/*==================================
    =            Navigation            =
    ==================================*/

	/*---------  Nav Mobile  ---------*/
	const navButtonMobile = $('#navButtonMobile'),
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

		let tl = new TimelineMax({
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

		/*jshint -W030 */
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
		// blindStyle();
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