/*global $*/
$('form button[type=submit]').click(function(e) {
	e.preventDefault();
	const form = $('form')[0];
	$.ajax({
		url: "https://formspree.io/lev.pencko@gmail.com",
		method: "POST",
		data: {
			userName: $('#name').val(),
			userPhoneNumber: $('#phone-number').val(),
			taskToDo: $('#task-to-do').val(),
		},
		dataType: "json"
	}).done(function() {
		form.reset();
		$('#message-box').html("Дякую, що зв'язалися зі мною!");
	});
});

$('.popup-opener').click(function() {
	$('.popup-wrapper').fadeIn(300);
})

$('.popup-close-button').click(function() {
	$('.popup-wrapper').fadeOut(300);
})

$('.submit-button').click(function() {
	$('input, .popup h3, .submit-button').hide();
})