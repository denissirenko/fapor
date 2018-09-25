$('.slider').slick({
	slidesToShow: 1,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
  cssEase: 'linear',
	prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fas fa-chevron-left"></i></div></div>',
	nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fas fa-chevron-right"></i></div></div>'
})

$(function(){
  $('.nav-list').slicknav({
		appendTo:'header .container',
		label: ''
  });
});

$.validate();

new WOW().init();