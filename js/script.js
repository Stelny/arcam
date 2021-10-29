$(document).ready(function(){
  $('.first-button').on('click', function () {
      $('.animated-icon1').toggleClass('open');
      $('.header').toggleClass('open');
    });
    
    var partners = $('.partners__carousel');

    partners.owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          500:{
            items:3
          },
          776:{
            items:4
          },
          991:{
            items:5
          },
          1200:{
              items:6
          },
      }
  })

  $('.partners .nav-circle.right').click(function(e) {
    e.preventDefault();
    partners.trigger('next.owl.carousel');
    })

    $('.partners .nav-circle.left').click(function(e) {
        e.preventDefault();
        partners.trigger('prev.owl.carousel');
    })


    var learn = $('.learning__carousel');

    learn.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          500:{
            items:3
          },
          776:{
            items:3
          },
          991:{
            items:4
          },
          1200:{
              items:5
          },
      }
  })

  $('.learn .nav-circle.right').click(function(e) {
    e.preventDefault();
    learn.trigger('next.owl.carousel');
    })

    $('.learn .nav-circle.left').click(function(e) {
        e.preventDefault();
        learn.trigger('prev.owl.carousel');
    })

  
  const homepage__slider = $(".homepage__slider");
  homepage__slider.owlCarousel({
       items: 1,
       nav: false,
       loop: true,
       dots: true,
       
       animateOut: 'fadeOut',
       dotsContainer: '#carousel-custom-dots'
   });

   $('.owl-dot').click(function () {
    homepage__slider.trigger('to.owl.carousel', [$(this).index(), 300]);
  });


})
