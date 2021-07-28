
/* navbar auto hide scrolling */

$(document).ready(function () {
	var previousScroll = 0;
	$(window).scroll(function () {
		var currentScroll = $(this).scrollTop();
		if (currentScroll < 100) {
			/* showTopNav(); */
		} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
			if (currentScroll > previousScroll) {
				hideNav();
			} else {
				showNav();
			}
			previousScroll = currentScroll;
		}
	});

	function hideNav() {
		$(".navbar").removeClass("is-visible").addClass("is-hidden");
	}

	function showNav() {
		$(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
	}
});


$(function () {
   $('.navbar-toggler').addClass('collapsed');
});

/* condition that targets viewports at least 768px wide */
const mediaQuery = window.matchMedia('(min-width: 767px)')

function handleTabletChange(e) {
  if (e.matches) {
  	$('.navbar-collapse').css('display','inline-block');
  }
  else {
  	$('.navbar-collapse').removeAttr("style");;
  }
}

mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)