(function(){
	$('#nav-button').click(function(event) {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {

			// open nav
			$('body').css({
				'position': 'relative',
				'overflow': 'hidden'
			});
			$('body').animate({left: '-258px'}, 400);
			$('#mobile-nav').animate({right: 0}, 400);

		} else {

			// close nav
			$('body').css({
				'overflow': 'visible'
			});
			$('body').animate({left: '0'},400);
			$('#mobile-nav').animate({right: '-258px'}, 400);
		}
	});
})();
