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
    // slider.control('timebar', { color: '#830800'});

    slider.setup('sliderIntro' , {
        width: 1370,
        height: 770,
        autoHeight: true,
        autoplay: true,
        space: 0,
        loop: true,
        view:'mask',
        fillmode: 'boxed',
        layout:'fillscreen', //fullscreen
        speed: 20
        // grabCursor: false,
        // swipe: false,
        // mouse: false,
        // overPause: false
    });

    /*==================================================
    =                   Gridder News                   =
    ==================================================*/

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

    function calendarGridder() {
        $('#calendarGridder').gridderExpander({
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

    /*============  End of Gridder News  =============*/

    function initPage() {
        // scrollSmooth();
        initPhotoSwipeFromDOM('.main-content__read-all');
        newsGridder();
        anounceGridder();
        calendarGridder();
    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));