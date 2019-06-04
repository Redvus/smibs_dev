;(function() {

    function scrollSmooth() {
        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.getElementById('main-scrollbar'), {
            speed: 1
        });
    }

    /*----------  Slider  ----------*/
    var slider = new MasterSlider();
    // slider.control('arrows' ,{insertTo:'#slider_arrow_top',autohide:false});
    // slider.control('slideinfo',{insertTo:'#slider_info'});

    slider.setup('sliderIntro' , {
        width: 1024,
        height: 640,
        autoHeight: false,
        autoplay: true,
        space: 0,
        loop: true,
        view:'fade',
        layout:'fullscreen', //fullscreen
        speed: 2,
        grabCursor: false,
        swipe: false,
        mouse: false,
        overPause: false
    });


    /*=========================================
    =            Section Animation            =
    =========================================*/

    var controller = new ScrollMagic.Controller({
        // refreshInterval: 300
    });

    /*----------  Section Hero  ----------*/

    var sectionHeroMaskLi = $('.section-hero__mask li'),
        sectionHeroTitle = $('.section-hero__title'),
        sectionHeroTitleH1 = $('.section-hero__title h1'),
        sectionHeroTitleSpan = $('.section-hero__title span'),
        sectionHeader = $('.header'),
        sectionHeaderLogo = $('.header-logo'),
        sectionHeaderLogoImage = $('.header-logo a'),
        sectionHeaderSecondary = $('.header-main__secondary'),
        sectionHeaderPrimary = $('.header-main__primary')
    ;

    function sectionAnimationMain_0() {
        var tl = new TimelineMax({
            delay: 1,
            reverse: false
        });
        tl
            .staggerTo(sectionHeroMaskLi, 1.2, {
                scaleX: 0,
                // autoAlpha: 0,
                ease: Power1.easeInOut
                // className: '+=is-top'
            })
            .from(sectionHeader, 1, {
                yPercent: '-100',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(sectionHeaderLogo, 1.3, {
                xPercent: '-100',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(sectionHeaderLogoImage, 1.3, {
                yPercent: '-10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.3")
            .from(sectionHeaderPrimary, 1.6, {
                yPercent: '-10',
                autoAlpha: 0,
                ease: Power3.easeInOut
            }, "-=1")
            .from(sectionHeaderSecondary, 1.6, {
                yPercent: '-10',
                autoAlpha: 0,
                ease: Power3.easeInOut
            }, "-=0.9")
            .from(sectionHeroTitle, 1, {
                yPercent: 100,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.6")
            .from(sectionHeroTitleH1, 1, {
                yPercent: '20',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.2")
            .from(sectionHeroTitleSpan, 1, {
                yPercent: '20',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
        ;
    }

    /*----------  Section Info  ----------*/
    var section_1 = $('#section_1'),
        sectionTitleInfo = $('#sectionTitleInfo'),
        sectionInfoText = $('#sectionInfoText'),
        sectionTitleNews = $('#sectionTitleNews'),
        sectionNewsText = $('.section-info__news > ul li')
    ;

    function sectionAnimationMain_1() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleInfo, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .from(sectionInfoText, 1.6, {
                yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.8")
            .from(sectionTitleNews, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.5")
            .staggerFrom(sectionNewsText, 1.6, {
                yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=1.3")
        ;

        var sectionMainAction_1 = new ScrollMagic.Scene({
                triggerElement: section_1,
                // offset: -90,
                // duration: '300',
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            // .setClassToggle(sectionFrontTitle_1, 'is-top')
            // .addIndicators({
            //     name: 'sectionMain_1'
            // })
            .addTo(controller);

        sectionMainAction_1.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true)

        });
        // controller.removeScene(sectionFrontDesignAction);
    }

    /*----------  Section Certificate & Gratitide  ----------*/
    var section_2 = $('#section_2'),
        sectionTitleCertificate = $('#sectionTitleCertificate'),
        sectionGalleryCertificate = $('#sectionGalleryCertificate > figure'),
        sectionTitleLetters = $('#sectionTitleLetters'),
        sectionGalleryLetters = $('#sectionGalleryLetters > figure')
    ;

    function sectionAnimationMain_2() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleCertificate, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .staggerFrom(sectionGalleryCertificate, 1.6, {
                // yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=1.3")
            .from(sectionTitleLetters, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.5")
            .staggerFrom(sectionGalleryLetters, 1.6, {
                // yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=1.3")
        ;

        var sectionMainAction_2 = new ScrollMagic.Scene({
            triggerElement: section_2,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            // .setClassToggle(sectionFrontTitle_1, 'is-top')
            // .addIndicators({
            //     name: 'sectionMain_1'
            // })
            .addTo(controller);

        sectionMainAction_2.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    /*----------  Section Partners  ----------*/
    var section_3 = $('#section_3'),
        sectionTitlePartners = $('#sectionTitlePartners'),
        sectionLinkPartners = $('#sectionLinkPartners > a')
    ;

    function sectionAnimationMain_3() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitlePartners, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .staggerFrom(sectionLinkPartners, 1.6, {
                // yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=1.3")
        ;

        var sectionMainAction_3 = new ScrollMagic.Scene({
            triggerElement: section_3,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            // .setClassToggle(sectionFrontTitle_1, 'is-top')
            // .addIndicators({
            //     name: 'sectionMain_1'
            // })
            .addTo(controller);

        sectionMainAction_3.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    /*=====  End of Section Animation  ======*/

    /*================================================
    =            Section Animation Mobile            =
    ================================================*/

    function sectionAnimationMainMobile_0() {
        var tl = new TimelineMax({
            delay: 1,
            reverse: false
        });
        tl
            .staggerTo(sectionHeroMaskLi, 1.2, {
                scaleX: 0,
                // autoAlpha: 0,
                ease: Power1.easeInOut
                // className: '+=is-top'
            })
            .from(sectionHeroTitle, 1, {
                yPercent: 100,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(sectionHeroTitleH1, 1, {
                yPercent: '20',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.4")
            .from(sectionHeroTitleSpan, 1, {
                yPercent: '10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.4")
        ;
    }

    var sectionInfoAboutMobile = $('.section-info__about'),
        sectionInfoNewsMobile = $('.section-info__news')
    ;

    function sectionAnimationInfoAboutMobile() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleInfo, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .from(sectionInfoText, 1.6, {
                yPercent: '5',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.8")
        ;

        var sectionInfoAboutActionMobile = new ScrollMagic.Scene({
                triggerElement: sectionInfoAboutMobile,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            .addTo(controller);

        sectionInfoAboutActionMobile.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    function sectionAnimationInfoNewsMobile() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleNews, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .from(sectionNewsText, 1.6, {
                yPercent: '5',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.8")
        ;

        var sectionInfoNewsActionMobile = new ScrollMagic.Scene({
                triggerElement: sectionInfoNewsMobile,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            .addTo(controller);

        sectionInfoNewsActionMobile.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    var sectionCertificateMobile = $('.section-certificate__cert'),
        sectionLettersMobile = $('.section-certificate__letters')
    ;

    function sectionAnimationCertificateMobile() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleCertificate, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .staggerFrom(sectionGalleryCertificate, 1.6, {
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=0.8")
        ;

        var sectionActionCertificateMobile = new ScrollMagic.Scene({
            triggerElement: sectionCertificateMobile,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            .addTo(controller);

        sectionActionCertificateMobile.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    function sectionAnimationGratitudeMobile() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitleLetters, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .staggerFrom(sectionGalleryLetters, 1.6, {
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=0.8")
        ;

        var sectionActionLettersMobile = new ScrollMagic.Scene({
            triggerElement: sectionLettersMobile,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            .addTo(controller);

        sectionActionLettersMobile.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    function sectionAnimationPartnersMobile() {
        var tl = new TimelineMax();

        tl
            .from(sectionTitlePartners, 1, {
                xPercent: 10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1")
            .staggerFrom(sectionLinkPartners, 1.6, {
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=1.3")
        ;

        var sectionPartnersActionMobile = new ScrollMagic.Scene({
            triggerElement: section_3,
                reverse: false,
                triggerHook: 0.7
            })
            .setTween(tl)
            .addTo(controller);

        sectionPartnersActionMobile.on("end", function (e) {
            e.addEventListener(handleEvent, {
                passive: false
            });
            this.destroy(true);
        });
    }

    /*=====  End of Section Animation Mobile  ======*/


    function initPage() {
        // scrollSmooth();
        initPhotoSwipeFromDOM('.main-content__read-all');
    }

    function initPageMobile() {
        // initPhotoSwipeFromDOM('.section-certificate__gallery');
        // sectionAnimationMainMobile_0();
        // sectionAnimationInfoAboutMobile();
        // sectionAnimationInfoNewsMobile();
        // sectionAnimationCertificateMobile();
        // sectionAnimationGratitudeMobile();
        // sectionAnimationPartnersMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));