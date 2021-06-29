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
    $('.navbar-toggler').on('click', function(){
       if( $('.collapse').hasClass('show')){
            $('.collapse').removeClass('show')
       }else($('.collapse').addClass('show'))
       $('.collapse').css('margin-left', '0')
    });
});