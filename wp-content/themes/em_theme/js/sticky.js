/*----------------------------------------------------
/* Stiky Nav
/*---------------------------------------------------*/
jQuery(document).ready(function() {
	jQuery('#sticky').exists(function() {
		function isScrolledTo(elem) {
			var docViewTop = jQuery(window).scrollTop(); //num of pixels hidden above current screen
			var docViewBottom = docViewTop + jQuery(window).height();

			var elemTop = jQuery(elem).offset().top; //num of pixels above the elem
			var elemBottom = elemTop + jQuery(elem).height();

			return ((elemTop <= docViewTop));
		}

		var sticky = jQuery('#sticky');
		jQuery(window).scroll(function(e) {
			if(isScrolledTo(sticky)) {
				sticky.css({'position': 'fixed', 'top': '0', 'height': '215px', 'transition': 'all .8s ease-in'});
			}
			if (jQuery(window).scrollTop() == 0) {
				sticky.css({'position': 'relative', 'top': 'auto', 'height': '215px', 'transition': 'all .2s ease-in'});
			}
		});
	});
});
