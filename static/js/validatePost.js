// $(document).ready(function() {
$(function () {
	// UPLOAD FILE
	$('#upload').submit(function () {
		$('#message').empty().text('Processing Request...');

		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});

	// PLACE YOUR ORDER SECTION
	$('#data').submit(function () {
		$('#message').empty().text('Processing Request...');
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});

	// ORDER DETAILS SECTION
	$('.order').submit(function () {
		$('#message-').empty().text('Processing Request...');
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message-').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});

	// SUPPLIED BY SECTION
	$('.section1').submit(function () {
		$('#message').empty().text('Processing Request...');
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});

	// STOCK CONTROL SECTION
	$('.section2').submit(function () {
		$('#message').empty().text('Processing Request...');
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});

	// STOCK FLOW SECTION
	$('.section3').submit(function () {
		$('#message').empty().text('Processing Request...');
		$(this).ajaxSubmit({
			success: function (response) {
				console.log(response)
				$('#message').empty().text(response);
			},
			error: function (xhr) {
				message('Error: ' + xhr.message);
			}
		});
		return false;
	});
});