
;(function() {

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
        // galleryAnniversary(); // Worker
        // introTNS(); // Worked
    }

    function initPageMobile() {
        // introTNSMobile();
    }

    if (document.body.clientWidth > 768 || screen.width > 768) {
        initPage();
    } else {
        initPageMobile();
    }

}(jQuery));