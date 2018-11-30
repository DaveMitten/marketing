window.onload = () => {
  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
    }
  });
  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
      noSwipingClass: true

    }
  });
  var swiperVTwo = new Swiper('.swiper-container-v-two', {
    direction: 'vertical',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true
    },
  });
};
e