(function(){

	$.validator.addMethod("phoneValidation", function (value, element, param) {
		let regex = /^([+][0-9]{10,14})$/;
		return regex.test(value);
	}, "Phone number not valid");


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
				required: true,
				phoneValidation: true
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
		submitHandler: onFormSubmit,
		highlight: function(element, errorClass, validClass) {
			$(element).addClass('error').removeClass('valid');
		},
	});

	function onFormSubmit(form, event) {
		event.preventDefault();
	}
})();
