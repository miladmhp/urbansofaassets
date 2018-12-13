$('.question .title').on('click touch', function(){
	$('.question').not($(this).parent()).removeClass('open');
	$(this).parent().toggleClass('open');
});
