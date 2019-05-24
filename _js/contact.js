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

		mapButtonMobile.on('click', function () {
			tl.reversed() ? tl.restart() : tl.reverse();
		});
	}

	/*----------  Input mask  ----------*/
	$('[name = name]').inputmask("a{1,64}");
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

	function initPage() {

	}

	function initPageMobile() {
		mapOpenMobile();
	}

	if (document.body.clientWidth > 768 || screen.width > 768) {

		initPage();

	} else {

		initPageMobile();
	}

}(jQuery));