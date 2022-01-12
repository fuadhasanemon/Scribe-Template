

// lightGallery video
$(document).ready(function() {
    $('#video-gallery').lightGallery();
  });


// animated navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("animate-navbar").style.cssText = "top:0";
    } else {
        document.getElementById("animate-navbar").style.cssText = "top:-100px";
    }
    prevScrollpos = currentScrollPos;
}



// document.getElementById("animate-navbar").style.top = "0";

// document.addEventListener("DOMContentLoaded", () => {
    
//    });


// Counter


//    $(document).ready(function() {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//          current = start,
//          range = end - start,
//          increment = end > start ? 1 : -1,
//          step = Math.abs(Math.floor(duration / range)),
//          timer = setInterval(() => {
//           current += increment;
//           obj.textContent = current;
//           if (current == end) {
//            clearInterval(timer);
//           }
//          }, step);
//        }
//        counter("count1", 20, 3, 3000);
//        counter("count2", 150, 100, 2500);
//   });

  $(document).ready(function($) {
    $('.counter-demo1').counterUp({
        delay: 10,
        time: 1000
    });
    $('.counter-demo2').counterUp({
        delay: 10,
        time: 1000
    });
});


// Slick slider

// $(document).ready(function($) {
//     $('.slick-carousel').slick({
//         dots: true,
//         infinite: true,
//         speed: 700,
//         autoplay:true,
//         autoplaySpeed: 2000,
//         arrows:false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       });
// });


// $('.slick-carousel').slick({
//     dots: true,
//     infinite: true,
//     speed: 700,
//     autoplay:true,
//     autoplaySpeed: 2000,
//     arrows:false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     slide: '> div',
//   });


  // $('.slick-carousel').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });


  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
  });
   


