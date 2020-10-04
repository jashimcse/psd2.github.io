;(function ($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);


    $doc.ready(function () {

        $('#myCarousel').carousel({
            interval: 900000,
            autoPlay:false
        })

        $('.single-slider').slick({
            dots: false,
            infinite: false,
            arrows:false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplay:true,
            autoplaySpeed:1500,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        arrows:false,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

        $('a[href*="#"]')
        // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .not('[href="#myCarousel"]')
            .click(function(event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function() {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });

    });


})(jQuery, window, document);
