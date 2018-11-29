window.onload = () => {
  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true
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
};
