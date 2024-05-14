function blindMenuActive() {

    /*==================================
    =            Blind Menu            =
    ==================================*/

    const
        blindMenu = document.querySelector('.blind-menu'),
        blindMask = document.querySelector('.blind-mask'),
        blindButton = document.getElementById('blindButton');

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

    /*=====  End of Blind Menu  ======*/

    /*====================================
    =            Blind Change            =
    ====================================*/

    const
        blindImageTurnOff = document.getElementById('blindImageTurnOff'),
        blindImageTurnOn = document.getElementById('blindImageTurnOn'),
        _body = document.querySelector('body'),
        _sidebar = document.querySelector('.sidebar'),
        blindSizeSmall = document.getElementById('blindSizeSmall'),
        blindSizeBase = document.getElementById('blindSizeBase'),
        blindSizeLarge = document.getElementById('blindSizeLarge'),
        blindStyleMain = document.querySelector(".css-main[rel='stylesheet']"),
        blindStyleBW = document.querySelector(".css-blind-bw[rel='stylesheet']"),
        mainContentInside = document.querySelectorAll('.main-content__inside p'),
        mainContentInsideSpan = document.querySelectorAll('.main-content__inside li'),
        mainContentInsideImage = document.querySelectorAll('.main-content__inside img'),
        blindColorBW = document.getElementById('blindColorBW'),
        blindSidebarLogo = document.querySelector('.sidebar-logo img'),
        blindColorWB = document.getElementById('blindColorWB'),
        blindColorCW = document.getElementById('blindColorCW'),
        blindColorYB = document.getElementById('blindColorYB')
    ;

    /*----------  Blind Font Size Small  ----------*/
    blindSizeSmall.addEventListener('click', () => {
        mainContentInside.forEach((el) => {
            el.style.fontSize = '1rem';
        });
        mainContentInsideSpan.forEach((el) => {
            el.style.fontSize = '1rem';
        });
        // $('.main-content__inside').find('p').css({'fontSize': '0.8rem'});
    });
    blindSizeBase.addEventListener('click', () => {
        mainContentInside.forEach((el) => {
            el.style.fontSize = '1.2rem';
        });
        mainContentInsideSpan.forEach((el) => {
            el.style.fontSize = '1.2rem';
        });
        // $('.main-content__inside').find('p').css({'fontSize': '1rem'});
    });
    blindSizeLarge.addEventListener('click', () => {
        mainContentInside.forEach((el) => {
            el.style.fontSize = '1.4rem';
        });
        mainContentInsideSpan.forEach((el) => {
            el.style.fontSize = '1.4rem';
        });
        // $('.main-content__inside').find('p').css({'fontSize': '1.2rem'});
    });

    /*----------  Blind Images Off / On  ----------*/
    blindImageTurnOff.addEventListener('click', function () {
        mainContentInsideImage.forEach((el) => {
            el.className = 'is-hidden';
            this.className = 'blind-menu__nav-image is-active';
            blindImageTurnOn.className = 'blind-menu__nav-image';
        });

        // $('.main-content').find('img').addClass('is-hidden');
        // $(this).addClass('is-active');
        // blindImageTurnOn.removeClass('is-active');
    });

    blindImageTurnOn.addEventListener('click', function () {
        mainContentInsideImage.forEach((el) => {
            el.className = '';
            this.className = 'blind-menu__nav-image is-active';
            blindImageTurnOff.className = 'blind-menu__nav-image';
        });

        // $('.main-content').find('img').removeClass('is-hidden');
        // $(this).addClass('is-active');
        // blindImageTurnOff.removeClass('is-active');
    });

    blindColorBW.addEventListener('click', function () {
        if (_body.classList.contains('blind-bw')) {
            _body.classList.remove('blind-bw');
        } else {
            _body.classList.add('blind-bw');
        }

        if (_body.classList.contains('blind-wb')) {
            _body.classList.remove('blind-wb');
        } else if (_body.classList.contains('blind-cw')) {
            _body.classList.remove('blind-cw');
        } else if (_body.classList.contains('blind-yb')) {
            _body.classList.remove('blind-yb');
        }

        // if (blindStyleBW.attr("disabled", "true")) {
        //     _body.removeClass('blind-wb');
        // } else if (_body.hasClass('blind-cw')) {
        //     _body.removeClass('blind-cw');
        // } else if (_body.hasClass('blind-yb')) {
        //     _body.removeClass('blind-yb');
        // }

        // 	blindStyleBW.removeAttr("disabled");
        // 	blindStyleMain.attr("disabled", "disabled");
        // 	// let index = $(".swatch").index(this);
        // 	// blindStyleMain.attr("disabled", "true");
        // 	// blindStyleMain.eq(index).attr("disabled", "");

        // }, function () {
        // 	blindStyleBW.attr("disabled", "disabled");
        // 	blindStyleMain.removeAttr("disabled");
    });

    // /*----------  Blind Images Color W/B  ----------*/
    blindColorWB.addEventListener('click', function () {
        if (_body.classList.contains('blind-wb')) {
            _body.classList.remove('blind-wb');
        } else {
            _body.classList.add('blind-wb');
        }

        if (_body.classList.contains('blind-bw')) {
            _body.classList.remove('blind-bw');
        } else if (_body.classList.contains('blind-cw')) {
            _body.classList.remove('blind-cw');
        } else if (_body.classList.contains('blind-yb')) {
            _body.classList.remove('blind-yb');
        }
    });

    // /*----------  Blind Images Color C/W  ----------*/
    blindColorCW.addEventListener('click', function () {
        if (_body.classList.contains('blind-cw')) {
            _body.classList.remove('blind-cw');
        } else {
            _body.classList.add('blind-cw');
        }

        if (_body.classList.contains('blind-bw')) {
            _body.classList.remove('blind-bw');
        } else if (_body.classList.contains('blind-wb')) {
            _body.classList.remove('blind-wb');
        } else if (_body.classList.contains('blind-yb')) {
            _body.classList.remove('blind-yb');
        }
    });

    // /*----------  Blind Images Color G/Y  ----------*/
    blindColorYB.addEventListener('click', function () {
        if (_body.classList.contains('blind-yb')) {
            _body.classList.remove('blind-yb');
        } else {
            _body.classList.add('blind-yb');
        }

        if (_body.classList.contains('blind-bw')) {
            _body.classList.remove('blind-bw');
        } else if (_body.classList.contains('blind-wb')) {
            _body.classList.remove('blind-wb');
        } else if (_body.classList.contains('blind-cw')) {
            _body.classList.remove('blind-cw');
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
}