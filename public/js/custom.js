$('.list-item').slick({
    dots:true,
    arrows:false,
    autoplay:false
});
$('.list-item-film-3').slick({
    dots:true,
    arrows:false,
    autoplay:false,
    vertical:true
});

$('.list-item-film-3-2').slick({
    dots:true,
    arrows:false,
    autoplay:false,
    vertical:true
});

$('.slider-item').slick({
    dots:false,
    arrows:true,
    autoplay:false,
    prevArrow: '<button type="button" class="btn-slider-prev"><img src="public/images/icon/icon_prev_slider.png"></button>',
    nextArrow:'<button type="button" class="btn-slider-next"><img src="public/images/icon/icon_next_slider.png"></button>'

});
//menu nav
$('.dropdown-menu').hover(
    function(){
        $(this).addClass('open');
    },function(){
        $(this).removeClass('open');

    }
);
if( $(".img-slider").hasClass("slick-active")){
    console.log($("#slider-h .img-slider slick-active").attr("alt"));
}