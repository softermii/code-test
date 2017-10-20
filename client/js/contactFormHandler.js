(function(){



	$('.contact-form form').validate({
		errorClass: 'helper-message error',
		rules: {
			email: {
				required: true,
				email: true
			},
			username: {
				required: true,
			},
			phone: {
				required: true
			},
			message: {
				required: true

			}
		},
		messages: {
			email: "Error: Please enter a valid email",
			username: "Error: Please enter username",
			phone: "Error: Please enter a valid phone",
			message: "Please enter as much detail as possible"
		},
		errorElement: 'div',
		submitHandler: onFormSubmit
	});

	function onFormSubmit(form, event) {
		event.preventDefault();
	}
})();
