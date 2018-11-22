// burger menu jquery
// console.log($);

// alert("hello");
$(document).ready(function() {
  // fly out burger menu
  $('.menu').click(function() {
    console.log('clicked');
    $('.menu').toggleClass('active');
    $('.navbar-menu').toggleClass('active');
  });

  // slide left functionality
  $('.box').click(function() {
    console.log('BEEN CLICKED!');

    $(this).animate(
      {
        left: '-50%'
      },
      500,
      function() {
        $(this).css('left', '150%');
        $(this).appendTo('#container');
      }
    );

    $(this)
      .next()
      .animate(
        {
          left: '50%'
        },
        500
      );
  });
});
