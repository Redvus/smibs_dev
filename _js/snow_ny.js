;(function () {

    jQuery('body').snow3d({
        url: 'assets/images/flakes/',
        images: 'flake111.png,flake112.png,flake113.png,flake114.png,flake115.png,flake116.png,flake117.png',
        num: 400,
        speed: 0.4,
        fadeScroll: true,
        minScale: 15,
        closeButton: 0,
        // closeButtonMode: 'once',
        maxScale: 20,
        disableMouse: true
    });

}(jQuery));