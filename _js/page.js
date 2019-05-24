;(function() {

    function scrollSmooth() {
        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.getElementById('main-scrollbar'), {
            speed: 1
        });
    }

    /*----------  Slider  ----------*/
    function pageSliderDesktop() {
        var slider = new MasterSlider();
        slider.control('arrows', {
            insertTo: '#pageGalleryArrow',
            autohide: false
        });
        // slider.control('slideinfo',{insertTo:'#slider_info'});

        slider.setup('pageGallery', {
            width: 1010,
            height: 460,
            autoHeight: false,
            space: 0,
            loop: true,
            view:'parallaxMask',
            layout:'boxed', //fullscreen
            speed:20
        });
    }

    function pageSliderMobile() {
        var slider = new MasterSlider();
        slider.control('arrows', {
            insertTo: '#pageGalleryArrow',
            autohide: false
        });
        // slider.control('slideinfo',{insertTo:'#slider_info'});

        slider.setup('pageGallery', {
            width: 320,
            height: 300,
            autoHeight: false,
            space: 0,
            loop: true,
            view:'parallaxMask',
            layout:'boxed', //fullscreen
            speed:20
        });
    }

    /*=========================================
    =            Section Animation            =
    =========================================*/

    var controller = new ScrollMagic.Controller({
        // refreshInterval: 300
    });

    /*----------  Section Hero  ----------*/

    var wrapperPageMask = $('.wrapper-page__mask--animation'),
        pageSidebar = $('.page-sidebar'),
        pageSidebarLi = $('.page-sidebar > ul li'),
        wrapperPageTitle = $('.wrapper-page__hero h1'),
        headerSimple = $('.header-simple'),
        headerSimpleLogo = $('.header-logo'),
        headerSimpleLogoImage = $('.header-logo a'),
        headerPage = $('.header-page')
    ;

    function pageAnimationHero() {
        var tl = new TimelineMax({
            delay: 1,
            reverse: false
        });
        tl
            .from(headerSimple, 1, {
                yPercent: '-100',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(headerSimpleLogo, 1.3, {
                xPercent: '-100',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(headerPage, 1.3, {
                yPercent: '-10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(pageSidebar, 1.3, {
                xPercent: '-100',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.6")
            .from(headerSimpleLogoImage, 1.3, {
                yPercent: '-10',
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=0.3")
            .to(wrapperPageMask, 1.3, {
                scaleX: 0,
                // autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.2")
            .staggerFrom(pageSidebarLi, 1.2, {
                xPercent: -10,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "0.07", "-=0.6")
            .from(wrapperPageTitle, 1, {
                yPercent: 100,
                autoAlpha: 0,
                ease: Power2.easeInOut
            }, "-=1.6")
        ;
    }

    /*----------  Page Section  ----------*/

    function pageSectionAnimation() {

        var pageSection = $('.page-section');

        pageSection.each(function () {

            var breakID = $(this).attr('id');

            var pageSectionMask = $(this).find('.page-section__mask'),
                pageSectionTitle = $(this).find('.page-section__title'),
                pageSectionTitleH2 = $(this).find('.page-section__title > h2'),
                pageSectionContent = $(this).find('.page-section__content')
            ;

            var tl = new TimelineMax({
                delay: 1,
                reverse: false
            });

            tl
                .to(pageSectionMask, 1, {
                    scaleX: 0,
                    // autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=0.8")
                .from(pageSectionTitle, 1, {
                    xPercent: 20,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=0.8")
                .from(pageSectionTitleH2, 1, {
                    xPercent: 10,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=0.6")
                .from(pageSectionContent, 1, {
                    yPercent: 10,
                    autoAlpha: 0,
                    ease: Power2.easeInOut
                }, "-=0.6")
            ;

            var pageSectionAction = new ScrollMagic.Scene({
                    triggerElement: this,
                    reverse: false,
                    triggerHook: 0.8
                })
                .setTween(tl)
                // .setClassToggle(sectionFrontTitle_1, 'is-top')
                // .addIndicators({
                //     name: breakID
                // })
                .addTo(controller);

            // pageSectionAction.on("end", function (e) {
            //     e.addEventListener(handleEvent, {
            //         passive: false
            //     });
            //     this.destroy(true);
            // });
        });
    }

    /*=====  End of Section Animation  ======*/

    function initPage() {
        scrollSmooth();
        pageSliderDesktop();
        pageAnimationHero();
        pageSectionAnimation();
    }

    function initPageMobile() {
        pageSliderMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));