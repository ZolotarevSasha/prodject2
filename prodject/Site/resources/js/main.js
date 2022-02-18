//import '../styles/main.scss';
$(document).ready(function () {
    window.slider = $(".slider").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
    });
  });
  
  function navigateTo(direction) {
    $(".slider").slick(direction);
  }
  