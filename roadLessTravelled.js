$(document).ready(function() {
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
	console.log("ready");
});



