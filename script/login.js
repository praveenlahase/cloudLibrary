function login(){
	var loginId = document.getElementById('nameInput').value;
	var pwd = document.getElementById('pwdInput').value;
	console.log(loginId);
	console.log(pwd);
	
	if(validateLogin(loginId,pwd))
		alert("Login Successful!"+"\nWelcome " + loginId);
	else
		alert("Login Unsuccessful! Please check Logind ID or Password.");
}

function validateLogin(loginId,pwd){
	if(loginId == "" || loginId == null || loginId == undefined ||
			pwd == "" || pwd == null || pwd == undefined){
		return false;
	}
	else return true;
	
}
