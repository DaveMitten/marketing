
  // window.addEventListener('resize', () => {
  //   // We execute the same script as before
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // });



window.onload = () => {


  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);



  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
    },
    navigation: {
      nextEl: '.iconSize',
      clickable: true,
      // prevEl: '.swiper-button-prev',
    },
  });


  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
      // noSwipingClass: true,
    }
    // navigation: {
    //   prevEl: '.clickUp',
    //   clickable: true,
    //   // prevEl: '.swiper-button-prev',
    // },
  });



}

// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
