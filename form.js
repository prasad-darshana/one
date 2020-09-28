
		function formvalidation() {
			var name=document.getElementById('name').value;
			var birthday=document.getElementById('birthday').value;
			var address=document.getElementById('address').value;
			var phoneNo=document.getElementById('tel').value;
			var email=document.getElementById('email').value;
			var password=document.getElementById('password').value;
			var repass=document.getElementById('Repassword').value;
			var x=/^([0]([789])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9])([0-9]))$/;
			var a=/[\da-zA-Z0-9._!]@[\da-zA-Z].[A-Za-z]/;


			if (name.trim() == "") {
				alert("Empty value in name");
				return false;

			}else if (birthday.trim() == " ") {
				alert("Empty value in birthday");
				return false;

			}else if (address.trim()  == " ") {
				alert("Empty value in address");
				return false;

			}else if (phoneNo.trim()  == " ") {
				alert("Empty value in phoneNo");
				return false;

			}else if (email.trim()  == " ") {
				alert("Empty value in email");
				return false;

			}else if (password.trim()  == " ") {
				alert("Empty value in password");
				return false;

			}else if (repass.trim()  == " ") {
				alert("Empty value in Repassword");
				return false;

			}else if (x.test(phoneNo)) {

				if (a.test(email)) {

					if (password.length >=8) {

						if (password == repass) {
							return true;
						}else{
							alert("Password do not match");
							return false;
						}

					}else{
						alert("Entered password length is not valid");
						return false;
					}
				}else{
					alert("email is not true");
					return false;
				}

			}else {
				alert("Phone number is not valid");
				return false;
			}

		}
