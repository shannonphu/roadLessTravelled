$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	var $headerLinks = $('header a');
	$headerLinks.mouseover(function() {
		console.log("moused over");
		$(this).animate({
			marginLeft: "+=30px"
		}, 'slow');
	});

	$headerLinks.mouseleave(function() {
		console.log("moused leave");
		$(this).animate({
			marginLeft: "-=30px"
		}, 'slow');
	});

	var $viewMore = $('.picLayout aside');
	var $stateBanner = $('.picLayout');
	/*$stateBanner.stop(true,true).mouseout(function() {
		$viewMore.slideUp("slow");
		//$viewMore.css({ 'display' : 'none' });
	});


	$stateBanner.stop(true,true).mouseover(function() {
		$viewMore.slideDown("slow");
				//$viewMore.css({ 'display' : 'block' });
	});*/

	$stateBanner.hover(
	    function (event){
	        $viewMore.slideDown();
	    },
	    function (event){
	        $viewMore.fadeOut().slideUp();
    });

	/*var $stateBlock = $('.picLayout .stateName');
	$stateBlock.mouseover(function() {
		console.log("stateblock mouse over");
		$stateBlock.animate({
			backgroundColor: 'black'
		});
	}); */

	/*var $stateBanner = $('.picLayout .photoView img');
	$stateBanner.mouseover(function() {
		console.log("moused over");
		$(this).animate({
			width: '+=1200px'
			//height: "+=60px"
		}, 'slow');
	});
*/

});



