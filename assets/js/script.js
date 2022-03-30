$(".header__burger").on("click", () => {
    $(".header__burger").toggleClass("active");
    $(".header__list").toggleClass("active");
})
$(".header__link").on("click", () => {
    $(".header__burger").removeClass("active");
    $(".header__list").removeClass("active");
})

// added fixed class to header:
var $introHeight = $("#intro").innerHeight();
var $scrollOffset = $(window).scrollTop();

checkScroll($scrollOffset); 
$(window).on("scroll", function() {
    $scrollOffset = $(this).scrollTop();

    checkScroll($scrollOffset);
})

function checkScroll($scrollOffset) {
    if($scrollOffset >= $introHeight) {
        $(".header").css("background", "#212529");
        $(".header__logo").css("width", "175px");
        $(".header__link").css("font-size", "13px");
    } else {
        $(".header__logo").css("width", "200px");
        $(".header__link").css("font-size", "16px");
        $(".header").css("background", "transparent");
    }

    let $scrollWindow = window.scrollY;
    
    if($scrollWindow <= $introHeight || $scrollWindow == 0) {
        $(".navigation-upper").addClass("navigation-hidden");
    }else {
        $(".navigation-upper").removeClass("navigation-hidden");
    }
}

// // Owl-Carousel --------------------------
$('.slider__carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dots: true,
    responsive:{ 
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

$('.product__carousel').owlCarousel({
    margin:10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    dots: true,
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

$(".gallery__category").on("click", "li", function() {
    const filterValue = $(this).attr("data-filter");
    $('.grid').isotope({ filter: filterValue });   
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$('.grid').masonry({
    itemSelector: '.grid-item',
    isFitWidth: true,
});

// Aos --------------------------
AOS.init({
    duration: 1200,
    once: true
});

// // Counter --------------------------
// $(".progress__item-count").counterUp({
//     delay: 10,
//     time: 1200
// })



Fancybox.bind('[data-fancybox="gallery"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
});

Fancybox.bind('[data-fancybox="fancy-carousel"]', {
    caption: function (fancybox, carousel, slide) {
      return (
        `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
      );
    },
});


var modalAnimate = $(".modal");

modalAnimate.addClass(modalAnimate.attr("data-animate-in"));

modalAnimate.on("hide.bs.modal", function(ev) {
    if(!$(this).attr("is-from-animation-end")) {
        ev.preventDefault();
        $(this).addClass($(this).attr("data-animate-out"));
        $(this).removeAdd($(this).attr("data-animate-in"));
    }
    !$(this).removeAttr("is-from-animation-end");
})
.on("animationend", function() {
    if($(this).hasClass($(this).attr("data-animate-out"))) {
        $(this).attr("is-from-animation-end", true);
        $(this).modal("hide");
        $(this).removeClass($(this).attr("data-animate-out"));
        $(this).addClass($(this).attr("data-animate-in"));
    }
})