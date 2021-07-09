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
    $('.search-section').hide();
    // $('.search').css('background', 'none');
     $('.search').click(function(){
         $('.search-section').toggle();
        //  if($(".search-section").is(":visible")) {
        //     $('.search').css('background', 'rgba(16, 57, 123, 1)'); 
        // }
     })
     

    $('.navbar-toggler').on('click', function(){
       if( $('.collapsee').hasClass('show')){
            $('.collapsee').removeClass('show');
            $('.navbar-dark').removeClass('mob-nav-bg');
       }else{
           $('.collapsee').addClass('show')
            $('.navbar-dark').addClass('mob-nav-bg')
            }
    });
});