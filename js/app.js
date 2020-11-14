$(function() {
	/* sticky nav */
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();

	    if (scrollTop >= 62) {
	        $('#sticky-nav').addClass('gl__nav--isFixed');
	    } else {
	        $('#sticky-nav').removeClass('gl__nav--isFixed');
	    }
	});
	/* end */

	/* nav trigger */
	$('.nav__trigger').on('click', function(e) {
		$(this).toggleClass('nav__trigger--isActive');
		$('body').toggleClass('nav-overflow-hidden');
		$('.gl__nav').toggleClass('gl__nav--isActive');
	});
	/* end */

	/* search trigger */
	$('.search-trigger').on('click', function(e) {
		$('body').toggleClass('search-overflow-hidden');		
		$('.search').toggleClass('search--isActive');
		$('.search__overlay').toggleClass('search__overlay--isActive');
	});
	/* end */

	/* overlay trigger destroy */
	$('.search__overlay').on('click', function(e) {
		$('body').removeClass('search-overflow-hidden');		
		$('.search').removeClass('search--isActive');
		$('.search__overlay').removeClass('search__overlay--isActive');
	});	

	/* carousel */
	$('.gl__figure').owlCarousel({
	    loop: true,
	    margin: 0,
	    dots: false,
	    nav: true,
	    items: 1,
	    touchDrag: false,
	    mouseDrag: false,
		autoplay: true,
	    autoplayTimeout: 5000,
	    autoplayHoverPause: true,	    
	    navText: ["<span class='show-for-sr'><i class='fas fa-angle-left'></i></span>","<span class='show-for-sr'><i class='fas fa-angle-right'></i></span>"]
	});
	/* end */
});