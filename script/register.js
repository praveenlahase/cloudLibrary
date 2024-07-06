function register(){
	var nameInput = document.getElementById('nameInput').value;
	var emailInput = document.getElementById('emailInput').value;
	var pwdInput = document.getElementById('pwdInput').value;
	var repwdInput = document.getElementById('repwdInput').value;
	
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	var isValid = emailPattern.test(emailInput);
	
	validateRegister(nameInput,emailInput,pwdInput,repwdInput,isValid);
}

function validateRegister(nameInput,emailInput,pwdInput,repwdInput,isValid){
	if(nameInput == "" || nameInput == null || nameInput == undefined ||
			emailInput == "" || emailInput == null || emailInput == undefined ||
			pwdInput == "" || pwdInput == null || pwdInput == undefined ||
			repwdInput == "" || repwdInput == null || repwdInput == undefined){
		return alert("Registration Unsuccessful! Please fill in all details.");
	}else 
		if(isValid != true){
			return alert("Registration Unsuccessful! Please check email Id.");
		  }
		  else 
			  if(pwdInput != repwdInput){
					alert("Registration Unsuccessful! Password and Re-Type Password do not match.");
				}
			  else 
					alert("Registration Successful!"+"\nWelcome " + nameInput);
				}