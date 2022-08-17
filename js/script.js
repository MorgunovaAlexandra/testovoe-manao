$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu,.header__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	
	$('.slider').slick({
		arrows:true,
		adaptiveHeight:true,
		slidesToShow:3,
		touchMove:true,
		responsive:[
			{
				breakpoint:768,
				settings:{slidesToShow:3}
			},
			{
				breakpoint:500,
				settings:{slidesToShow:1}
			},
			{
				breakpoint:414,
				settings:{slidesToShow:1}
			},
			{
				breakpoint:320,
				settings:{slidesToShow:1}
			}

		]
	})
});