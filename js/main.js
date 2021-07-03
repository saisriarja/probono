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
    // $('.header-search-wrapper .search-main').click(function() {
    //     $('.search-form-main').toggleClass('active-search');
    //     $('.search-form-main .search-field').focus();
    // });
    // $('.search').click( function(){
    //     $('.search-div-1').toggleClass('search-div');
    // })
    $('.navbar-toggler').on('click', function(){
       if( $('.collapsee').hasClass('show')){
            $('.collapsee').removeClass('show');
            $('navbar-dark').removeClass('mob-nav-bg');
       }else{
           $('.collapsee').addClass('show')
            $('.navbar-dark').addClass('mob-nav-bg')
            }
    });
});