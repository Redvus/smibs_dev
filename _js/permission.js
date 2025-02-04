function permissionEnter() {

    /*==================================
    =            Cookie 18+            =
    ==================================*/

    const permissionBlock = document.getElementById('permissionBlock'),
        permissionText = document.querySelector('.permission-cookie__text'),
        permissionButton = document.getElementById('permissionButton')
    ;

    function cookieFront() {

        if (!$.cookie('was')) {
            permissionBlock.classList.remove('permission-hidden');
        }

        $.cookie('was', true, {
            expires: 0, //Cookie удаляется после закрытия браузера
            path: '/'
        });
    }

    function permissionFront() {

        permissionButton.addEventListener('click', function () {

            function permissioEnter() {

                var tl = new gsap.timeline();

                tl
                    .to(permissionButton, {
                        duration: 0.6,
                        delay: -0.4,
                        autoAlpha: 0,
                        ease: 'power2'
                    })
                    .to(permissionText, 0.6, {
                        duration: 0.6,
                        delay: -0.4,
                        autoAlpha: 0,
                        ease: 'power2'
                    })
                    .to(permissionBlock, 0.8, {
                        duration: 0.8,
                        delay: -0.2,
                        y: '50%',
                        autoAlpha: 0,
                        ease: 'power2'
                    })
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

}

permissionEnter();