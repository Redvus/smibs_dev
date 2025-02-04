;(function() {

    function scrollSmooth() {
        const Scrollbar = window.Scrollbar;
        Scrollbar.init(document.getElementById('main-scrollbar'), {
            speed: 1
        });
    }

    /*----------  Slider  ----------*/
    // var slider = new MasterSlider();
    // // slider.control('arrows' ,{insertTo:'#slider_arrow_top',autohide:false});
    // // slider.control('slideinfo',{insertTo:'#slider_info'});
    // // slider.control('timebar', { color: '#830800'});

    // slider.setup('sliderIntro' , {
    //     width: 1370,
    //     height: 770,
    //     autoHeight: true,
    //     autoplay: true,
    //     space: 0,
    //     loop: true,
    //     view:'mask',
    //     fillmode: 'boxed',
    //     layout:'fillscreen', //fullscreen
    //     speed: 20
    //     // grabCursor: false,
    //     // swipe: false,
    //     // mouse: false,
    //     // overPause: false
    // });

    /*=================================================
    =                   News Slider                   =
    =================================================*/

    // var sliderNews = tns({
    //   container: ".news-slider",
    //   loop: false,
    //   gutter: '16',
    //   items: 4,
    //   //   responsive: {
    //   //     "350": {
    //   //       items: 2
    //   //     },
    //   //     "500": {
    //   //       items: 3
    //   //     }
    //   //   },
    //   swipeAngle: false,
    //   speed: 400
    // });

    /*============  End of News Slider  =============*/

    /*=============================================
    =                   Sliders                   =
    =============================================*/

    const $slides = $("#sliderIntro .slide");
    const $nav = $("#tm-nav a");
    const currentSlide = 0;
    const slideTo = 'left';

    function introSlider() {
        TweenLite.set($slides.filter(":gt(0)"), { left: "100%", zIndex: 1, autoAlpha: 1 });
        TweenLite.delayedCall(8, nextSlide, [$slides, slideTo]);

        $nav.click(function (e) {
            e.preventDefault();
            slideTo = ($(this).hasClass('prev')) ? 'right' : 'left';
            TweenLite.killDelayedCallsTo(nextSlide);
            TweenLite.delayedCall('.1', nextSlide, [$slides, slideTo]);
        });

        function nextSlide(obj, direction) {
            var _obj = $(obj);
            var _dir = (direction == 'left' || direction == 1) ? 1 : -1;
            var lft = -(_dir * 100) + '%', rgt = _dir * 50 + '%';

            // console.log('fn::nextSlide', _dir, slideTo);

            TweenLite.to(_obj.eq(currentSlide), 1, { left: lft, zIndex: 0, autoAlpha: 0 });

            if (_dir === 1) {
                if (currentSlide < _obj.length - 1) {
                    currentSlide++;
                }
                else {
                    currentSlide = 0;
                }
            } else {
                if (currentSlide > 0) {
                    currentSlide--;
                }
                else {
                    currentSlide = _obj.length - 1;
                }

            }
            _obj.parent().find('.caption').text((currentSlide + 1) + '/' + _obj.length);

            TweenLite.fromTo(_obj.eq(currentSlide), 1, { left: rgt, zIndex: 1, autoAlpha: 1 }, { left: "0px", zIndex: 1, autoAlpha: 1 });
            TweenLite.delayedCall(8, nextSlide, [_obj, _dir]);
        }
    }

    // function introBXSlider() {
    //     $("#sliderIntro").bxSlider({
    //         'wrapperClass': 'main-content__intro',
    //         'mode': 'horizontal',
    //         'auto': true,
    //         'pause': 8000,
    //         'slideMargin': 32,
    //         'pager': false,
    //         'touchEnabled': false,
    //         'autoHover': true
    //     });
    // }

    function galleryAnniversary() {
        $("#galleryAnniversary").bxSlider({
            'wrapperClass': 'main-content__anniversary',
            'mode': 'fade',
            // 'auto': true,
            // 'pause': 8000,
            'pager': false
        });
    }

    function introTNS() {
        const slider = tns({
            container: '#sliderIntro',
            slideBy: 'page',
            autoplay: true,
            autoplayTimeout: 8000,
            touch: true,
            mouseDrag: true,
            controlsText: ['',''],
            autoplayButton: false
        });
    }

    function galleryAnniversaryTNS() {
        const sliderAnny = tns({
            container: '#galleryAnniversary',
            slideBy: 'page',
            autoplay: false,
            lazyload: true,
            touch: true,
            mouseDrag: true,
            controlsText: ['',''],
            arrowKeys: true,
            nav: false,
            animateIn: 'tns-fadeIn'
        });
    }

    function introTNSMobile() {
        const slider = tns({
            container: '#sliderIntro',
            slideBy: 'page',
            autoplay: true,
            autoplayTimeout: 8000,
            touch: true,
            controlsText: ['',''],
            autoplayButton: false,
            nav: false
        });
    }

    /*============  End of Sliders  =============*/

    function initPage() {
        // scrollSmooth();
        // initPhotoSwipeFromDOM('.main-content__read-all');
        // introSlider();
        // introBXSlider();
        // galleryAnniversary();
        // introTNS();
        // galleryAnniversaryTNS();
    }

    function initPageMobile() {
        introTNSMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));