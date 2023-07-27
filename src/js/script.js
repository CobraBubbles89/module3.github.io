$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/chevron_left_solid.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/chevron_right_solid.png"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false
        }
      }
    ]
  });
    
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this)
        .index()).addClass('catalog__content_active');
  });
  
  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })
  
  // $('.catalog-item__back').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal
  // $ чтобы получить элемент со страницы

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
  });

  $('.button_mini').on('click', function () {
    $('.overlay, #order').fadeIn()
  });

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  });

  // $('.feed_form').validate();

//   $('#consultation form').validate({
//     rules: {
//       name: "required",
//       phone: "required",
//       email: {
//         required: true,
//         email: true
//       }
//     },
//     messages: {
//       name: "Please specify your name",
//       phone: "Call number",
//       email: {
//       required: "Please specify your name",
//       email: "Your email address must be in the format of name@test.com"
//     }
//   }
// });
//   $('#order form').validate();
//   $('#consultation-form').validate();

  function valideForms(form) {
      $(form).validate({
    rules: {
          name: {
            required: true,
            minlength: 2
          },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Пожалуйста, введите своё имя",
        minlength: jQuery.validator.format("введите {0} символа!")
      },
      phone: "Пожалуйста, введите свой номер телефона",
      email: {
        required: "Пожалуйста, введите свою почту",
        email: "Неправильно введён адрес почты"
      }
    }
  });
};
  
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+38 (999) 99-99-999");

  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");

      $('form').trigger('reset');
    });
    return false;
  });

  // smooth scroll up

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });

  new WOW().init();

});

