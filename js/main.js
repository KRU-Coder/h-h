// for main slider
$('.slider-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// for services 

$('.service-acrd-wrapper').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// for reviews

$('.review-all').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})

// for inner page review
$('.inner-review-all').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


// for partners

$('.main-brand-wrapper').owlCarousel({
    loop:true,
    margin:50,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})



// for back to top button
  
$(window).scroll(function () {
    if ($(window).scrollTop() > 350) {
      $(".back-to-top").show();
    } else {
      $(".back-to-top").hide();
    }
  });
  $(".back-to-top").click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });