$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

});
$(function(){
    $('.moverytexas img:gt(0)').hide();
    setInterval(function(){
      $('.moveytexas :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.moveytexas');}, 
      250);
});