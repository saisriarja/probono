$(document).ready(function() {
    $('.guide-carousel').owlCarousel({
        nav: true,
        // navText: ['<img src="images/left-arrow.png" alt="">', '<img src="images/right-arrow.png" alt="">'],
        smartSpeed: 700,
        responsive:{
            0:{
                items:3,
                nav: false
            },
            600:{
                items:3,
                nav: true
            },
            1000:{
                items:6,
                nav: true
            }
        }
    });
    $('.navbar-toggler').click(function() {
        $('.collapse').fadeToggle(1000);
    });
    $('.navbar-toggler').click(function(){
        $('body').css('background', 'rgba(0,0,0,0.4)')
    });
    $('body').css('background', 'none')
});