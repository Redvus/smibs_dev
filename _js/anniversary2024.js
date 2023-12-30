;(function ($) {

    'use strict';

    const anniversary2024 = document.querySelector('.anniversary--2024'),
        anniversaryWrapper = document.querySelector(".wrapper"),
        ny2024Text = document.getElementById("ny2024Text")
    ;

    function anniversaryLoad() {

        let tl = new gsap.timeline({
            delay: 1,
            onComplete: anniversaryHide(4)
        });

        tl
            .to(anniversary2024, {
                duration: 0.3,
                delay: '-0.7',
                autoAlpha: 1,
                zIndex: 9999,
                easy: 'elastic'
            })
            .from(ny2024Text, {
                duration: 0.6,
                delay: '-0.3',
                // y: "4vh",
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
            .to(anniversary2024,{
                duration: 0.6,
                delay: "-0.8",
                autoAlpha: 0,
                display: 'none',
                zIndex: -1,
                ease: 'power1'
            })
        ;
    }

    function anniversaryLoadMobile() {

        let tl = new gsap.timeline({
            delay: 1,
            onComplete: anniversaryHide(7)
        });

        tl
            .to(anniversary2024, {
                duration: 0.3,
                delay: '-0.7',
                autoAlpha: 1,
                zIndex: 9999,
                easy: 'elastic'
            })
            .from(ny2024Text, {
                duration: 0.6,
                delay: '-0.3',
                // y: "4vh",
                autoAlpha: 0,
                easy: 'elastic'
            })
        ;
    }

    function cookieAnniversary() {

        if (!$.cookie('anny122024')) {
            anniversaryLoad();
            $.cookie('anny122024', false, {
                expires: 0, //Cookie удаляется после закрытия браузера
                path: '/'
            });
        }
    }

    function cookieAnniversaryMobile() {

        if (!$.cookie('anny122024M')) {
            anniversaryLoadMobile();
            $.cookie('anny122024M', true, {
                expires: 0, //Cookie удаляется после закрытия браузера
                path: '/'
            });
        }
    }

    function initDesktop() {
        cookieAnniversary();
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