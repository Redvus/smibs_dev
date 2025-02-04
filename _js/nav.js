;(function() {

	/*==================================
    =            Navigation            =
    ==================================*/

	/*---------  Nav Mobile  ---------*/
	const
		navButtonMobile = document.getElementById('navButtonMobile'),
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
	const
		searchForm = document.querySelector('.header__search'),
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
    }

    function initPageMobile() {
		navMenuOpenMobile();
		// navMenuChildrenMobile();
    }

    if (document.body.clientWidth > 1024 || screen.width > 1024) {
		initPage();
    } else {
		initPageMobile();
    }

}(jQuery));