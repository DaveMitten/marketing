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

  jQuery('#navbarSupportedContent').delay(1000);


  jQuery('.navbar-toggler').click(function() {
    jQuery('#navbarSupportedContent').css({ 'visibility': 'visible' });

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



// Burger - How it works:<a class="cTA" onclick="window.location='https://tails.com/how-it-works?pc='+ document.getElementById('code').value;return false;
// ">




// - Burger - Food: <a class="cTA" onclick="window.location='https://tails.com/lp/our-dog-food?pc='+ document.getElementById('code').value;return false;
// ">


// - Burger - Our pricing: <a class="cTA" onclick="window.location='https://tails.com/pricing/?pc='+ document.getElementById('code').value;return false;
// ">


// - Burger - Reviews: <a class="cTA" onclick="window.location='https://tails.com/reviews?pc='+ document.getElementById('code').value;return false;
// ">


// - Burger - Help: <a class="cTA" onclick="window.location='https://tails.com/help/?pc='+ document.getElementById('code').value;return false;
// ">


// - Burger - Login: <a class="cTA" onclick="window.location='https://tails.com/signin/?pc='+ document.getElementById('code').value;return false;
// ">

// - Burger - Twitter icon:<a class="nav-link" href="https://twitter.com/tailsdogfood" style="margin: 5px;">

// // - Burger - Facebook icon:<a class="nav-link" href="https://www.facebook.com/tailsUK/" style="margin: 5px;">
 

// // - Burger - Instagram icon: <a class="nav-link" href="https://www.instagram.com/tails.com_uk/" style="margin: 5px;">











('use strict');
console.log('im working');

var vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', vh + 'px');

var promoCode = document.getElementById('code').value;
var myURL = 'https://tails.com/newsignup/register?pc=' + promoCode;
document.getElementByClass('cTA').href = myURL;


 
<a class="cTA" onclick="window.location='https://tails.com/newsignup/register?pc='+ document.getElementById('code').value;return false;
   ">


// <a onclick="window.location='https://tails.com?pc='+ document.getElementById('code').value;return false;">





