// jQuery.getScript("https://use.fontawesome.com/releases/v5.5.0/js/all.js");

// jQuery(document).ready(function() {
//     jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.2/js/swiper.min.js', function() {
//         var swiperH = new Swiper('.swiper-container-h', {
//             spaceBetween: 20,
//     pagination: {
//       el: '.swiper-pagination-h',
//       clickable: true
//     },
//    	 navigation: {
//       nextEl: '.iconSize',
//       clickable: true
//       // prevEl: '.swiper-button-prev',
//     }
//         });

//         var swiperV = new Swiper('.swiper-container-v', {
//             direction: 'vertical',
//             spaceBetween: 0,
//             pagination: {
//                 el: '.swiper-pagination-v',
//                 clickable: true
//             }
//         });
//     });
// });

// window.onload =

// 'use strict';
// console.log('im working');

// var vh = window.innerHeight * 0.01;

// document.documentElement.style.setProperty('--vh', vh + 'px');












jQuery(document).ready(function() {

  jQuery('.navbar-toggler').click(function() {
    jQuery("nav").toggleClass("navBackColour");
    jQuery(".topLeftLogo").toggleClass("hideLogo");
    jQuery("nav").toggleClass("fullScreen");



  }); 


  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 20,

    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
    },
    navigation: {
      nextEl: '.iconSize',
      clickable: true
      // prevEl: '.swiper-button-prev',
    }
  });

  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true
    }
  });
});







('use strict');
console.log('im working');

var vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', vh + 'px');

var promoCode = document.getElementById('code').value;
var myURL = 'https://tails.com/newsignup/register?pc=' + promoCode;
document.getElementByClass('cTA').href = myURL;


 
<a class="cTA" onclick="window.location='https://tails.com/newsignup/register?pc='+ document.getElementById('code').value;return false;
  ">


<a onclick="window.location='https://tails.com?pc='+ document.getElementById('code').value;return false;">





