$(document).ready(function(){
	$(".chooseService-bt").click(function(){
		$("#services").toggle("fast");
	});
	$('li').click(function(){
		$('#container2').show('fast');
		$('html, body').animate({scrollTop: $('#container2').offset().top}, 500);
		return false;
	});
})