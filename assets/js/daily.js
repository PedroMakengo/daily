$(function () {
  AOS.init();

  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    smartSpeed: 2e3,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
