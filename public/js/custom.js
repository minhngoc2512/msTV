// $(".list-item").slick({
//   dots: true,
//   arrows: false,
//   autoplay: true
// });

$('.list-item-group-1').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,  
  centerMode: false,
  autoplay: true,
  focusOnSelect: true,
  arrows: false,
});

// $(".list-item-group-1").on("afterChange", function(slick, currentSlide) {
//   var str = $(".list-item-group-1").slick('getSlick');  
//   var tag_html = $(".list-item-group-1 .slick-list .item.slick-slide.slick-active");
//   console.log(tag_html.length);
//   for(var i=0;i<tag_html.length;i++){
//     // tag_html[i].css('width','188px!important');
//   }
  
// });



$('.list-item-group-2').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,  
  centerMode: false,
  autoplay: true,
  focusOnSelect: true,
  arrows: false,
});

$(".item-4").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  vertical: true
});

$(".item-4-2").slick({
  dots: true,
  arrows: false,
  autoplay: true,
  vertical: true
});

$(".slider-item").slick({
  // slidesToShow: 1,
  // slidesToScroll: 1,
  // lazyLoad: 'ondemand',
  dots: false,
  arrows: false,
  autoplay: true
  // prevArrow: '<button type="button" class="btn-slider-prev"><img src="public/images/icon/icon_prev_slider.png"></button>',
  // nextArrow:'<button type="button" class="btn-slider-next"><img src="public/images/icon/icon_next_slider.png"></button>'
});

// $('.lazy').slick({
//   lazyLoad: 'ondemand',
//   slidesToShow: 3,
//   slidesToScroll: 1
// });
//menu nav
$(".dropdown-menu").stop().hover(
    function(){
        var id = $(this).attr('data-id');
        $('#menu-child-nav-'+id).stop().show(500);
    },function(){
        var id = $(this).attr('data-id');
        $('#menu-child-nav-'+id).stop().hide(500);
    }
);
  // function() {
  //   $(this).addClass("open");
  // },
  // function() {
  //   $(this).removeClass("open");
  // }
if ($(".img-slider").hasClass("slick-active")) {
 var title =  $("#slider-h .slick-list .slick-track .slick-active").attr("alt");
  $("#link-img-slider").text(title);
}
$(".slider-item").on("afterChange", function(slick, currentSlide) {
  if ($(".img-slider").hasClass("slick-active")) {
      var title =  $("#slider-h .slick-list .slick-track .slick-active").attr("alt");
    $("#link-img-slider").text(title);
  }
});
function nextSlider() {
  $(".slider-item").slick("slickNext");
}
function prevSlider() {
  $(".slider-item").slick("slickPrev");
}
