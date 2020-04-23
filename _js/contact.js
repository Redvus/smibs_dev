;(function() {

	var mapButtonMobile = $('#mapButtonMobile'),
		contactMapMobile = $('.wrapper-contact__map'),
		contactFormMobile = $('.wrapper-contact__form')
	;

	function mapOpenMobile() {

		var tl = new TimelineMax({
			paused: true,
			reversed: true
		});

		tl
			.to(contactFormMobile, 0.6, {
				scale: 0.95,
				autoAlpha: 0,
				ease: Power2.easeInOut
			}, "-=0.8")
			.to(contactMapMobile, 0.6, {
				xPercent: '100%',
				ease: Power2.easeInOut
			}, "-=0.6");

		/*jshint -W030 */
		mapButtonMobile.on('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse();
		});
	}

	/*----------  Input mask  ----------*/
	// $('[name = name]').inputmask("a{1,64}");
	$('[name = phone]').inputmask("+7 (999) 999 99 99");
	// $('#af_email').inputmask("*{1,64}@*{1,64}.*{1,3}");

	$('[name = email]').inputmask({
		mask: "*{1,64}@a{1,64}[.a{1,3}]",
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			}
		}
	});

	/*----------  Input mask Virtual  ----------*/
	// $('[name = user_name], [name = subject]').inputmask("a{1,64}");
	$('[name = user_contacts]').inputmask("+7 (999) 999 99 99");
	// $('#af_email').inputmask("*{1,64}@*{1,64}.*{1,3}");

	$('[name = user_email]').inputmask({
		mask: "*{1,64}@a{1,64}[.a{1,3}]",
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			}
		}
	});

	/*----------  Virtual Button  ----------*/
	var virtualBlockMessage = $('.main-content__guest'),
		virtualBlockButton = $('.main-content__guest-open')
	;

	virtualBlockMessage.each(function() {
		var virtualBlockReply = $(this).find('.main-content__guest-reply'),
			virtualBlockMask = $(this).find('.main-content__guest-mask')
		;

		$(this).find('.main-content__guest-open').on('click', function() {
			virtualBlockReply.toggleClass('main-content__guest-reply--open');
			virtualBlockMask.toggleClass('main-content__guest-mask--open');
			var toggleText = $(this).data('toggle-text');
			$(this).data('toggle-text', $(this).text()).text(toggleText);
		});
	});

	function initPage() {

	}

	function initPageMobile() {

	}

	if (document.body.clientWidth > 768 || screen.width > 768) {

		initPage();

	} else {

		initPageMobile();
	}

}(jQuery));