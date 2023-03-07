;(function() {

	/*==================================
    =            Blind Menu            =
    ==================================*/

	const blindMenu = document.querySelector('.blind-menu'),
		blindMask = document.querySelector('.blind-mask'),
		blindButton = document.getElementById('blindButton');

	function blindMenuActive() {

		let tl = new gsap.timeline({
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
			.to(blindMenu, {
				duration: 0.4,
				delay: -0.8,
				y: 0,
				display: 'block',
				zIndex: 9991,
				autoAlpha: 1,
				ease: 'sine'
			});

		/*jshint -W030 */
		blindButton.addEventListener('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse(0.25);
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
	blindSizeSmall.on('click', function () {
		$('.main-content__inside').find('p').css({'fontSize': '0.8rem'});
	});
	blindSizeBase.on('click', function () {
		$('.main-content__inside').find('p').css({'fontSize': '1rem'});
	});
	blindSizeLarge.on('click', function () {
		$('.main-content__inside').find('p').css({'fontSize': '1.2rem'});
	});

	/*----------  Blind Images Off / On  ----------*/
	blindImageTurnOff.on('click', function () {
		$('.main-content').find('img').addClass('is-hidden');
		$(this).addClass('is-active');
		blindImageTurnOn.removeClass('is-active');
	});

	blindImageTurnOn.on('click', function () {
		$('.main-content').find('img').removeClass('is-hidden');
		$(this).addClass('is-active');
		blindImageTurnOff.removeClass('is-active');
	});

	/*----------  Blind Images Color B/W  ----------*/
	const blindColorBW = $('#blindColorBW'),
		blindSidebarLogo = $('.sidebar-logo img')
	;

	blindColorBW.on('click', function () {
		_body.toggleClass('blind-bw');
	// 	// // _sidebar.toggleClass('sidebar-bw');
	// 	// // blindSidebarLogo.toggle(function () {
	// 	// // 	$(this).attr('src','/assets/images/smibs_logo.png');
	// 	// // }, function () {
	// 	// // 	$(this).attr('src','/assets/images/smibs_logo_w.png');
	// 	// // });

		if (blindStyleBW.attr("disabled", "true")) {
			_body.removeClass('blind-wb');
		} else if (_body.hasClass('blind-cw')) {
			_body.removeClass('blind-cw');
		} else if (_body.hasClass('blind-yb')) {
			_body.removeClass('blind-yb');
		}

	// 	blindStyleBW.removeAttr("disabled");
	// 	blindStyleMain.attr("disabled", "disabled");
	// 	// let index = $(".swatch").index(this);
	// 	// blindStyleMain.attr("disabled", "true");
	// 	// blindStyleMain.eq(index).attr("disabled", "");

	// }, function () {
	// 	blindStyleBW.attr("disabled", "disabled");
	// 	blindStyleMain.removeAttr("disabled");
	});

	/*----------  Blind Images Color W/B  ----------*/
	const blindColorWB = $('#blindColorWB');

	blindColorWB.on('click', function () {
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

	blindColorCW.on('click', function () {
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

	blindColorYB.on('click', function () {
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
	const navButtonMobile = document.getElementById('navButtonMobile'),
		navMainMobile = document.getElementById('navMainMobile'),
		navMainListMobile = document.querySelectorAll('#navMainMobile ul > li'),
		navBack = document.querySelector('.nav-mobile__mask'),
		navButtonLineTop = document.querySelector('.nav-button-line__top'),
		navButtonLineMiddle = document.querySelector('.nav-button-line__middle'),
		navButtonLineBottom = document.querySelector('.nav-button-line__bottom'),
		navWrapper = document.querySelector('.wrapper'),
		navHeaderTop = document.querySelector('.header-top')
	;

	function navMenuOpenMobile() {

		let tl = new gsap.timeline({
			reversed: true
		});

		tl
			.to(navBack, {
				duration: 0.4,
				delay: -1,
				autoAlpha: 1,
				display: 'block',
				ease: 'power1'
			})
			.to(navMainMobile, {
				duration: 0.4,
				delay: -1.2,
				x: '0%',
				// zIndex: '9999',
				ease: 'power2'
			})
			// .to(navWrapper, 0.6, {
			// 	xPercent: '50%',
			// 	autoAlpha: 0,
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			// .to(navHeaderTop, 0.6, {
			// 	yPercent: '-100%',
			// 	ease: Power2.easeInOut
			// }, "-=0.6")
			.to(navButtonLineMiddle, {
				duration: 0.3,
				delay: -0.6,
				rotation: '180deg',
				ease: 'power2'
			})
			.to(navButtonLineTop, {
				duration: 0.3,
				delay: -0.6,
				rotation: '135deg',
				x: '27%',
				y: '200%',
				scaleX: 0.6,
				ease: 'power2'
			})
			.to(navButtonLineBottom, {
				duration: 0.3,
				delay: -0.6,
				rotation: '-135deg',
				x: '27%',
				y: '-200%',
				scaleX: 0.6,
				ease: 'power2'
			})
			.from(navMainListMobile, {
				duration: 0.3,
				delay: -0.5,
				stagger: 0.07,
				x: '20%',
				autoAlpha: 0,
				ease: 'back'
			})
		;

		/*jshint -W030 */
		navButtonMobile.addEventListener('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse();
		});

		navBack.addEventListener('click', function () {
			tl.reverse();
		});

	}

	function navMenuChildrenMobile() {
		$('.nav-main__children').children('a').on('click', function (event) {
			event.preventDefault();
			$(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.nav-main__children').siblings('.nav-main__children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
		});
	}

	/*=====  End of Navigation  ======*/

	/* Search Wide
	-------------------------------------------------- */

	const searchForm = document.querySelector('.header__search'),
		searchInput = document.querySelector('.header__search-input'),
		headerTopSocial = document.querySelector('.header__social'),
		clickWrapper = document.querySelector('.main-content');

	function searchWide() {
		let tl = new gsap.timeline({
			reversed: true
		});

		tl
			.to(headerTopSocial, {
				duration: 0.4,
				delay: -1,
				autoAlpha: 0,
				// position: 'absolute',
				// left: 0,
				ease: 'circ'
			})
			.to(searchForm, {
				duration: 0.4,
				delay: -0.8,
				width: '50%',
				// position: 'absolute',
				ease: 'circ'
			})
		;

		searchInput.addEventListener('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse();
		});
		clickWrapper.addEventListener('click', function () {
			tl.reverse();
		});
	}

	/* End of Search Wide
	-------------------------------------------------- */

    function initPage() {
		blindMenuActive();
		// searchWide();
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