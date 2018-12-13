$('#show-filters').click(function(event) {
    $('section.filters').toggleClass('active');
    $('.actions').toggleClass('active');

    checkBodyOverflow();
    $('body').toggleClass('open-right');
	event.stopPropagation();
});

$('.filters .cat').click(function () {
	$('.filters .heading').addClass('active');
	$('.filters .heading strong').html($(this).data('title'));
	$(this).find('.items').addClass('active');
});

$('.filters .heading i').click(function (event) {
	event.stopPropagation();

	if ($('.filters .heading').hasClass('active')) {
		$('.filters .heading').removeClass('active');
		$('.filters .heading strong').html('Filter');
		$('.items').removeClass('active');
	} else {
		$('.filters').removeClass('active');
		$('.actions').toggleClass('active');

		checkBodyOverflow();
		$('body').toggleClass('open-right');
	}
});

$('.filters .cat .item').click(function () {
	$(this).toggleClass('active');
});

$('section.filters').bind('click touchstart', function(event) {
    event.stopPropagation();
});

$(window).bind('click touchstart', function () {
	$('.filters').removeClass('active');
	$('.actions').removeClass('active');
	$('.items').removeClass('active');
	$('.filters .heading').removeClass('active');
	$('.filters .heading strong').html('Filter');

	checkBodyOverflow();
	$('body').removeClass('open-right');
});
