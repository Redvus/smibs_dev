;(function() {

    function news012020Gridder() {
        $('#news012020Gridder').gridderExpander({
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

    function news012020GridderMobile() {
        $('#news012020Gridder').gridderExpander({
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

    function news022020Gridder() {
        $('#news022020Gridder').gridderExpander({
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

    function news022020GridderMobile() {
        $('#news022020Gridder').gridderExpander({
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

    function initPage() {
        news012020Gridder();
        news022020Gridder();
    }

    function initPageMobile() {
        news012020GridderMobile();
        news022020GridderMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));