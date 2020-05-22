;(function() {

    /*==================================
    =            Cookie 18+            =
    ==================================*/

    var permissionBlock = $('#permissionBlock'),
        permissionText = $('.permission-cookie__text'),
        permissionButton = $('#permissionButton')
    ;

    function cookieFront() {

        if (!$.cookie('was')) {
            permissionBlock.removeClass('permission-hidden');
        }

        $.cookie('was', true, {
            expires: 7, //Cookie удаляется после закрытия браузера
            path: '/'
        });
    }

    function permissionFront() {

        permissionButton.on('click', function () {

            function permissioEnter() {

                var tl = new TimelineMax();

                tl
                    .to(permissionButton, 0.6, {
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=0.4")
                    .to(permissionText, 0.6, {
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=0.4")
                    .to(permissionBlock, 0.8, {
                        y: '50%',
                        autoAlpha: 0,
                        ease: Power2.easeInOut
                    }, "-=0.2")
                    .set(permissionBlock, {
                        className: "+=permission-hidden"
                    })
                ;

            }

            permissioEnter();

        });

    }
    permissionFront();
    cookieFront();

    /*=====  End of Cookie 18+  ======*/

    function scrollSmooth() {
        var Scrollbar = window.Scrollbar;
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

    /*========================================================
    =                   Gridder News Front                   =
    ========================================================*/

    function anounceGridder() {
        $('#anounceGridder').gridderExpander({
            scroll: true,
            scrollOffset: 80,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function anounceGridderMobile() {
        $('#anounceGridder').gridderExpander({
            scroll: true,
            scrollOffset: 96,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function newsGridder() {
        $('#newsGridder').gridderExpander({
            scroll: true,
            scrollOffset: 80,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function newsGridderMobile() {
        $('#newsGridder').gridderExpander({
            scroll: true,
            scrollOffset: 96,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function calendarGridder() {
        $('#calendarGridder').gridderExpander({
            scroll: true,
            scrollOffset: 75,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function calendarGridderMobile() {
        $('#calendarGridder').gridderExpander({
            scroll: true,
            scrollOffset: 96,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function readGridder() {
        $('#readGridder').gridderExpander({
            scroll: true,
            scrollOffset: 75,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    function readGridderMobile() {
        $('#readGridder').gridderExpander({
            scroll: true,
            scrollOffset: 96,
            scrollTo: "panel", // panel or listitem
            animationSpeed: 900,
            animationEasing: "easeInOutExpo",
            showNav: true, // Show Navigation
            nextText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_next</title><polyline points=\"0 0 100 100 0 200\"/></svg>",
            prevText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"><title>bm_prev</title><polyline points=\"100 200 0 100 100 0\"/></svg>",
            closeText: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200.71 200.71\"><title>bm_close</title><line x1=\"200\" y1=\"200\" x2=\"0\" y2=\"0\"/><line x1=\"200\" y1=\"0\" x2=\"0\" y2=\"200\"/></svg>"
        });
    }

    /*============  End of Gridder News  =============*/

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

    var $slides = $("#sliderIntro .slide");
    var $nav = $("#tm-nav a");
    var currentSlide = 0;
    var slideTo = 'left';

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

    function introBXSlider() {
        $("#sliderIntro").bxSlider({
            'wrapperClass': 'main-content__intro',
            'mode': 'horizontal',
            'auto': true,
            'pause': 8000,
            'slideMargin': 32,
            'pager': false,
            'touchEnabled': false,
            'autoHover': true
        });
    }

    function galleryAnniversary() {
        $("#galleryAnniversary").bxSlider({
            'wrapperClass': 'main-content__anniversary',
            'mode': 'fade',
            // 'auto': true,
            // 'pause': 8000,
            'pager': false
        });
    }

    /*============  End of Sliders  =============*/

    function initPage() {
        // scrollSmooth();
        // initPhotoSwipeFromDOM('.main-content__read-all');
        newsGridder();
        anounceGridder();
        calendarGridder();
        readGridder();
        // introSlider();
        introBXSlider();
        galleryAnniversary();
    }

    function initPageMobile() {
        newsGridderMobile();
        anounceGridderMobile();
        readGridderMobile();
        calendarGridderMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));