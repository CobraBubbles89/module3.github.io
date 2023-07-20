$(document).ready(function(){
    $('.carousel__inner').slick({
    speed: 1000,
    // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/chevron_left_solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/chevron_right_solid.png"></button>',
        responsive: [
            {
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
      }
        }
    ]
});
});

