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



