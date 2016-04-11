var main = function(){
	$('#menu').click(function(e){
		e.preventDefault();
		$('nav ul').slideToggle();
	});
};
$(document).ready(main);