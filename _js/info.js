;(function() {

    function scrollSmooth() {
        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.getElementById('main-scrollbar'), {
            speed: 1
        });
    }

    function initPage() {
        scrollSmooth();
    }

    function initPageMobile() {

    }

    if (document.body.clientWidth > 768 || screen.width > 768) {

        initPage();

    } else {

        initPageMobile();
    }

}(jQuery));