window.onload = () => {
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
