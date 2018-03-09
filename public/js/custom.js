$(".list-item").slick({
  dots: true,
  arrows: false,
  autoplay: true
});
$(".list-item-film-3").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  vertical: true
});

$(".list-item-film-3-2").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  vertical: true
});

$(".slider-item").slick({
  dots: false,
  arrows: false,
  autoplay: true
  // prevArrow: '<button type="button" class="btn-slider-prev"><img src="public/images/icon/icon_prev_slider.png"></button>',
  // nextArrow:'<button type="button" class="btn-slider-next"><img src="public/images/icon/icon_next_slider.png"></button>'
});
//menu nav
$(".dropdown-menu").hover(
  function() {
    $(this).addClass("open");
  },
  function() {
    $(this).removeClass("open");
  }
);
if ($(".img-slider").hasClass("slick-active")) {
 var title =  $("#slider-h .slick-list .slick-track .slick-active").attr("alt");
  $("#link-img-slider").text(title);
}
$(".slider-item").on("afterChange", function(slick, currentSlide) {
  if ($(".img-slider").hasClass("slick-active")) {
      var title =  $("#slider-h .slick-list .slick-track .slick-active").attr("alt");
    console.log(title);
    $("#link-img-slider").text(title);
  }
});
function nextSlider() {
  $(".slider-item").slick("slickNext");
}
function prevSlider() {
  $(".slider-item").slick("slickPrev");
}
