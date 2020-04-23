; (function () {

    /*=====================================
    =            Front Gallery            =
    =====================================*/

    var $frontGalleryImage = $('.imageGallery--inside'),
        $frontGalleryActive = $('.active'),
        $frontGalleryNext = $('#gallery_arrow_next'),
        $frontGalleryPrev = $('#gallery_arrow_prev')
    ;

    function init() {
        // Hide all slides apart from the active one
        TweenMax.set($frontGalleryImage.not($frontGalleryActive), {
            autoAlpha: 0
        });
        TweenMax.set($frontGalleryTitle.not($frontGalleryActive), {
            autoAlpha: 0
        });
        TweenMax.set($frontGallerySubTitle.not($frontGalleryActive), {
            autoAlpha: 0
        });
        TweenMax.set($frontGalleryLink.not($frontGalleryActive), {
            autoAlpha: 0
        });
        // Disable arrow down on page load
        // TweenMax.set($frontGalleryPrev, {autoAlpha: 0.2});
    }
    init();

    // Go to next slide
    function goToNextSlide(slideOutTopLeft, slideInTopLeft, slideOutTopRight, slideInTopRight, slideOutMiddleLeft, slideInMiddleLeft, slideOutMiddleRight, slideInMiddleRight, slideOutBottomLeft, slideInBottomLeft, slideOutBottomRight, slideInBottomRight, slideOutNavTop, slideInNavTop, slideOutNavBottom, slideInNavBottom, slideOutTitle, slideInTitle, slideOutSubTitle, slideInSubTitle) {
        var tlTopLeft = new TimelineMax(),
            tlTopRight = new TimelineMax(),
            tlMiddleLeft = new TimelineMax(),
            tlMiddleRight = new TimelineMax(),
            tlBottomLeft = new TimelineMax(),
            tlBottomRight = new TimelineMax(),
            tlNavTop = new TimelineMax(),
            tlNavBottom = new TimelineMax(),
            tlTitle = new TimelineMax(),
            tlSubTitle = new TimelineMax(),
            tlLink = new TimelineMax(),
            index = slideInTopLeft.index(),
            size = $('.imageGallery--inside').length
        ;

        if(slideInTopLeft.length !== 0) {
            tlTopLeft
                .set(slideInTopLeft, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutTopLeft, {
                    className: '-=active'
                })
                .to(slideOutTopLeft, 1.2, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0)
                .to(slideInTopLeft, 1.2, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.2)
            ;
        }

        if(slideInTopRight.length !== 0) {
            tlTopRight
                .set(slideInTopRight, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutTopRight, {
                    className: '-=active'
                })
                .to(slideOutTopRight, 1.2, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.2)
                .to(slideInTopRight, 1.2, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.3)
            ;
        }

        if(slideInMiddleLeft.length !== 0) {
            tlMiddleLeft
                .set(slideInMiddleLeft, {
                    x: '-100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutMiddleLeft, {
                    className: '-=active'
                })
                .to(slideOutMiddleLeft, 1.2, {
                    x: '100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.3)
                .to(slideInMiddleLeft, 1.2, {
                    x: '+=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.4)
            ;
        }

        if(slideInMiddleRight.length !== 0) {
            tlMiddleRight
                .set(slideInMiddleRight, {
                    x: '-100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutMiddleRight, {
                    className: '-=active'
                })
                .to(slideOutMiddleRight, 1.2, {
                    x: '100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.4)
                .to(slideInMiddleRight, 1.2, {
                    x: '+=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.5)
            ;
        }

        if(slideInBottomLeft.length !== 0) {
            tlBottomLeft
                .set(slideInBottomLeft, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutBottomLeft, {
                    className: '-=active'
                })
                .to(slideOutBottomLeft, 0.8, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.5)
                .to(slideInBottomLeft, 1, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.6)
            ;
        }

        if(slideInBottomRight.length !== 0) {
            tlBottomRight
                .set(slideInBottomRight, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutBottomRight, {
                    className: '-=active'
                })
                .to(slideOutBottomRight, 1.2, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.6)
                .to(slideInBottomRight, 1.2, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.7)
            ;
        }

        if(slideInNavTop.length !== 0) {
            tlNavTop
                .set(slideInNavTop, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutNavTop, {
                    className: '-=active'
                })
                .to(slideOutNavTop, 1.2, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.3)
                .to(slideInNavTop, 1.2, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.2)
            ;
        }

        if(slideInNavBottom.length !== 0) {
            tlNavBottom
                .set(slideInNavBottom, {
                    x: '100%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutNavBottom, {
                    className: '-=active'
                })
                .to(slideOutNavBottom, 1.2, {
                    x: '-100%',
                    autoAlpha: 0,
                    ease:Expo.easeInOut
                }, 0.4)
                .to(slideInNavBottom, 1.2, {
                    x: '-=100%',
                    autoAlpha: 1,
                    ease:Expo.easeInOut
                }, 1.3)
            ;
        }

        if(slideInTitle.length !== 0) {
            tlTitle
                .set(slideInTitle, {
                    x: '-50%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutTitle, {
                    className: '-=active'
                })
                .to(slideOutTitle, 1.2, {
                    x: '50%',
                    autoAlpha: 0,
                    ease:Power1.easeInOut
                }, 0)
                .to(slideInTitle, 1.2, {
                    x: '+=50%',
                    autoAlpha: 1,
                    ease:Power1.easeInOut
                }, 1.7)
            ;
        }

        if(slideInSubTitle.length !== 0) {
            tlSubTitle
                .set(slideInSubTitle, {
                    y: '50%',
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutSubTitle, {
                    className: '-=active'
                })
                .to(slideOutSubTitle, 1.2, {
                    y: '50%',
                    autoAlpha: 0,
                    ease:Power1.easeInOut
                }, 0)
                .to(slideInSubTitle, 1.2, {
                    y: '-=50%',
                    autoAlpha: 1,
                    ease:Power1.easeInOut
                }, 1.7)
            ;
        }

        if(slideInLink.length !== 0) {
            tlLink
                .set(slideInLink, {
                    autoAlpha: 0,
                    className: '+=active'
                })
                .set(slideOutLink, {
                    className: '-=active'
                })
                .to(slideOutLink, 1.2, {
                    autoAlpha: 0,
                    ease:Power0.easeInOut
                }, 0)
                .to(slideInLink, 1.2, {
                    autoAlpha: 1,
                    ease:Power0.easeInOut
                }, 1.7)
            ;
        }

        // Fade in arrow down
        // TweenMax.set($frontGalleryPrev, {autoAlpha: 1});

        // // // Fade out arrow up on last slide
        // if(index === size){
        //   TweenMax.to($frontGalleryNext, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
        // }
    }

    // Navigation click - go to the Next Slide
    $frontGalleryNext.click(function (e) {
        e.preventDefault();

        var slideOutTopLeft = $('.imageGallery-top__left .imageGallery--inside.active'),
            slideInTopLeft = $('.imageGallery-top__left .imageGallery--inside.active').next('.imageGallery-top__left .imageGallery--inside'),
            slideOutTopRight = $('.imageGallery-top__right .imageGallery--inside.active'),
            slideInTopRight = $('.imageGallery-top__right .imageGallery--inside.active').next('.imageGallery-top__right .imageGallery--inside'),
            slideOutMiddleLeft = $('.imageGallery-middle__left .imageGallery--inside.active'),
            slideInMiddleLeft = $('.imageGallery-middle__left .imageGallery--inside.active').next('.imageGallery-middle__left .imageGallery--inside'),
            slideOutMiddleRight = $('.imageGallery-middle__right .imageGallery--inside.active'),
            slideInMiddleRight = $('.imageGallery-middle__right .imageGallery--inside.active').next('.imageGallery-middle__right .imageGallery--inside'),
            slideOutBottomLeft = $('.imageGallery-bottom__left .imageGallery--inside.active'),
            slideInBottomLeft = $('.imageGallery-bottom__left .imageGallery--inside.active').next('.imageGallery-bottom__left .imageGallery--inside'),
            slideOutBottomRight = $('.imageGallery-bottom__right .imageGallery--inside.active'),
            slideInBottomRight = $('.imageGallery-bottom__right .imageGallery--inside.active').next('.imageGallery-bottom__right .imageGallery--inside'),
            slideOutNavTop = $('.imageGallery-nav__top .imageGallery--inside.active'),
            slideInNavTop = $('.imageGallery-nav__top .imageGallery--inside.active').next('.imageGallery-nav__top .imageGallery--inside'),
            slideOutNavBottom = $('.imageGallery-nav__bottom .imageGallery--inside.active'),
            slideInNavBottom = $('.imageGallery-nav__bottom .imageGallery--inside.active').next('.imageGallery-nav__bottom .imageGallery--inside'),
            slideOutTitle = $('.maskGallery-middle__right .mask--title.active'),
            slideInTitle = $('.maskGallery-middle__right .mask--title.active').next('.maskGallery-middle__right .mask--title'),
            slideOutSubTitle = $('.maskGallery-bottom__left .mask--subtitle.active'),
            slideInSubTitle = $('.maskGallery-bottom__left .mask--subtitle.active').next('.maskGallery-bottom__left .mask--subtitle'),
            slideOutLink = $('.maskGallery-bottom__right .mask--link.active'),
            slideInLink = $('.maskGallery-bottom__right .mask--link.active').next('.maskGallery-bottom__right .mask--link')
        ;

        goToNextSlide(slideOutTopLeft, slideInTopLeft, slideOutTopRight, slideInTopRight, slideOutMiddleLeft, slideInMiddleLeft, slideOutMiddleRight, slideInMiddleRight, slideOutBottomLeft, slideInBottomLeft, slideOutBottomRight, slideInBottomRight, slideOutNavTop, slideInNavTop, slideOutNavBottom, slideInNavBottom, slideOutTitle, slideInTitle, slideOutSubTitle, slideInSubTitle, slideOutLink, slideInLink);

    });

    // Go to Prev slide
    function goToPrevSlide(slideOutTopLeft, slideInTopLeft, slideOutTopRight, slideInTopRight, slideOutMiddleLeft, slideInMiddleLeft, slideOutMiddleRight, slideInMiddleRight, slideOutBottomLeft, slideInBottomLeft, slideOutBottomRight, slideInBottomRight, slideOutNavTop, slideInNavTop, slideOutNavBottom, slideInNavBottom, slideOutTitle, slideInTitle, slideOutSubTitle, slideInSubTitle) {
        var tlTopLeft = new TimelineMax(),
            tlTopRight = new TimelineMax(),
            tlMiddleLeft = new TimelineMax(),
            tlMiddleRight = new TimelineMax(),
            tlBottomLeft = new TimelineMax(),
            tlBottomRight = new TimelineMax(),
            tlNavTop = new TimelineMax(),
            tlNavBottom = new TimelineMax(),
            tlTitle = new TimelineMax(),
            tlSubTitle = new TimelineMax(),
            tlLink = new TimelineMax(),
            index = slideInTopLeft.index(),
            size = $('.imageGallery--inside').length
        ;

        if(slideInTopLeft.length !== 0) {
            tlTopLeft
                .set(slideInTopLeft, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutTopLeft, {className: '-=active'})
                .to(slideOutTopLeft, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0)
                .to(slideInTopLeft, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.2)
            ;
        }

        if(slideInTopRight.length !== 0) {
            tlTopRight
                .set(slideInTopRight, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutTopRight, {className: '-=active'})
                .to(slideOutTopRight, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.2)
                .to(slideInTopRight, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.3)
            ;
        }

        if(slideInMiddleLeft.length !== 0) {
            tlMiddleLeft
                .set(slideInMiddleLeft, {x: '100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutMiddleLeft, {className: '-=active'})
                .to(slideOutMiddleLeft, 1.2, {x: '-100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.3)
                .to(slideInMiddleLeft, 1.2, {x: '-=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.4)
            ;
        }

        if(slideInMiddleRight.length !== 0) {
            tlMiddleRight
                .set(slideInMiddleRight, {x: '100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutMiddleRight, {className: '-=active'})
                .to(slideOutMiddleRight, 1.2, {x: '-100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.4)
                .to(slideInMiddleRight, 1.2, {x: '-=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.5)
            ;
        }

        if(slideInBottomLeft.length !== 0) {
            tlBottomLeft
                .set(slideInBottomLeft, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutBottomLeft, {className: '-=active'})
                .to(slideOutBottomLeft, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.5)
                .to(slideInBottomLeft, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.6)
            ;
        }

        if(slideInBottomRight.length !== 0) {
            tlBottomRight
                .set(slideInBottomRight, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutBottomRight, {className: '-=active'})
                .to(slideOutBottomRight, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.6)
                .to(slideInBottomRight, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.7)
            ;
        }

        if(slideInNavTop.length !== 0) {
            tlNavTop
                .set(slideInNavTop, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutNavTop, {className: '-=active'})
                .to(slideOutNavTop, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.3)
                .to(slideInNavTop, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.2)
            ;
        }

        if(slideInNavBottom.length !== 0) {
            tlNavBottom
                .set(slideInNavBottom, {x: '-100%', autoAlpha: 0, className: '+=active'})
                .set(slideOutNavBottom, {className: '-=active'})
                .to(slideOutNavBottom, 1.2, {x: '100%', autoAlpha: 0, ease:Expo.easeInOut}, 0.4)
                .to(slideInNavBottom, 1.2, {x: '+=100%', autoAlpha: 1, ease:Expo.easeInOut}, 1.3)
            ;
        }

        if(slideInTitle.length !== 0) {
            tlTitle
                .set(slideInTitle, {x: '50%', autoAlpha: 0, className: '+=active'})
                .set(slideOutTitle, {className: '-=active'})
                .to(slideOutTitle, 1.2, {x: '-50%', autoAlpha: 0, ease:Power1.easeInOut}, 0)
                .to(slideInTitle, 1.2, {x: '-=50%', autoAlpha: 1, ease:Power1.easeInOut}, 1.7)
            ;
        }

        if(slideInSubTitle.length !== 0) {
            tlSubTitle
                .set(slideInSubTitle, {y: '50%', autoAlpha: 0, className: '+=active'})
                .set(slideOutSubTitle, {className: '-=active'})
                .to(slideOutSubTitle, 1.2, {y: '50%', autoAlpha: 0, ease:Power1.easeInOut}, 0)
                .to(slideInSubTitle, 1.2, {y: '-=50%', autoAlpha: 1, ease:Power1.easeInOut}, 1.7)
            ;
        }

        if(slideInLink.length !== 0) {
            tlLink
                .set(slideInLink, {autoAlpha: 0, className: '+=active'})
                .set(slideOutLink, {className: '-=active'})
                .to(slideOutLink, 1.2, {autoAlpha: 0, ease:Power0.easeInOut}, 0)
                .to(slideInLink, 1.2, {autoAlpha: 1, ease:Power0.easeInOut}, 1.7)
            ;
        }

        // Fade in arrow down
        // TweenMax.set($frontGalleryNext, {autoAlpha: 1});

        // // // Fade out arrow up on last slide
        // if(index === 1){
        //   TweenMax.to($frontGalleryPrev, 0.3, {autoAlpha: 0.2, ease:Linear.easeNone});
        // }
    }

    // Navigation click - go to the Prev Slide
    $frontGalleryPrev.click(function (e) {
        e.preventDefault();

        var slideOutTopLeft = $('.imageGallery-top__left .imageGallery--inside.active'),
            slideInTopLeft = $('.imageGallery-top__left .imageGallery--inside.active').prev('.imageGallery-top__left .imageGallery--inside'),
            slideOutTopRight = $('.imageGallery-top__right .imageGallery--inside.active'),
            slideInTopRight = $('.imageGallery-top__right .imageGallery--inside.active').prev('.imageGallery-top__right .imageGallery--inside'),
            slideOutMiddleLeft = $('.imageGallery-middle__left .imageGallery--inside.active'),
            slideInMiddleLeft = $('.imageGallery-middle__left .imageGallery--inside.active').prev('.imageGallery-middle__left .imageGallery--inside'),
            slideOutMiddleRight = $('.imageGallery-middle__right .imageGallery--inside.active'),
            slideInMiddleRight = $('.imageGallery-middle__right .imageGallery--inside.active').prev('.imageGallery-middle__right .imageGallery--inside'),
            slideOutBottomLeft = $('.imageGallery-bottom__left .imageGallery--inside.active'),
            slideInBottomLeft = $('.imageGallery-bottom__left .imageGallery--inside.active').prev('.imageGallery-bottom__left .imageGallery--inside'),
            slideOutBottomRight = $('.imageGallery-bottom__right .imageGallery--inside.active'),
            slideInBottomRight = $('.imageGallery-bottom__right .imageGallery--inside.active').prev('.imageGallery-bottom__right .imageGallery--inside'),
            slideOutNavTop = $('.imageGallery-nav__top .imageGallery--inside.active'),
            slideInNavTop = $('.imageGallery-nav__top .imageGallery--inside.active').prev('.imageGallery-nav__top .imageGallery--inside'),
            slideOutNavBottom = $('.imageGallery-nav__bottom .imageGallery--inside.active'),
            slideInNavBottom = $('.imageGallery-nav__bottom .imageGallery--inside.active').prev('.imageGallery-nav__bottom .imageGallery--inside'),
            slideOutTitle = $('.maskGallery-middle__right .mask--title.active'),
            slideInTitle = $('.maskGallery-middle__right .mask--title.active').prev('.maskGallery-middle__right .mask--title'),
            slideOutSubTitle = $('.maskGallery-bottom__left .mask--subtitle.active'),
            slideInSubTitle = $('.maskGallery-bottom__left .mask--subtitle.active').prev('.maskGallery-bottom__left .mask--subtitle'),
            slideOutLink = $('.maskGallery-bottom__right .mask--link.active'),
            slideInLink = $('.maskGallery-bottom__right .mask--link.active').prev('.maskGallery-bottom__right .mask--link')
        ;

        goToPrevSlide(slideOutTopLeft, slideInTopLeft, slideOutTopRight, slideInTopRight, slideOutMiddleLeft, slideInMiddleLeft, slideOutMiddleRight, slideInMiddleRight, slideOutBottomLeft, slideInBottomLeft, slideOutBottomRight, slideInBottomRight, slideOutNavTop, slideInNavTop, slideOutNavBottom, slideInNavBottom, slideOutTitle, slideInTitle, slideOutSubTitle, slideInSubTitle, slideOutLink, slideInLink);

    });

    /*=====  End of Front Gallery  ======*/


}(jQuery));