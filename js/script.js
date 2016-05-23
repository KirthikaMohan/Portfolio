$(document).ready(function() {

    "use strict";

    <!-- =============================================== -->
    <!-- ========== Button click Scrolling ========== -->
    <!-- =============================================== -->


    <!-- =============================================== -->
    <!-- ========== Scrolling  ========== -->
    <!-- =============================================== -->

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top-110
                    }, 1000);
                    return false;
                }
            }
        });
    });

    <!-- =============================================== -->
    <!-- ========== Sticky Nav ========== -->
    <!-- =============================================== -->
    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var batas = jQuery(window).height();
        //alert(batas);

        if (top > batas) {
            jQuery('.main-menu').addClass('tiny');
            jQuery('.main-menu').css('opacity', '1');
        } else {
            jQuery('.main-menu').removeClass('tiny');
        }
    });

});