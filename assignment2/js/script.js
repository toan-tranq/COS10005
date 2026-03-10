
// filename: script.js
// author: Tran Quoc Toan
// description: javascript for assignment 2 

// function to validate registration form

function regvalidate() {
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	var pwd2 = document.getElementById("pwd2").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var email = document.getElementById("email").value;
	var ice1 = document.getElementById("ice1").checked;
	var ice2 = document.getElementById("ice2").checked;
	var ice3 = document.getElementById("ice3").checked;
	var location = document.getElementById("location").value;
	var errMsg = "";
	var result = true;

	if (username == "") {
		errMsg += "Username cannot be empty.\n";
	}
	if (pwd == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd.length < 9) {
		errMsg += "Password has to be at least 9 characters long.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype Password cannot be empty.\n";
	}
	if (pwd != pwd2) {
		errMsg += "Passwords do not match.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((!male) && (!female)) {
		errMsg += "A gender must be selected.\n";
	}
	if ((!ice1) && (!ice2) && (!ice3)) {
		errMsg += "You have to choose at least 1 type of ice cream.\n";
	}
	if (location == "") {
		errMsg += "You have to choose a location.";
	}
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

// function to validate order form 

function ordvalidate() {
	var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
	var deliadd = document.getElementById("deliadd").value;
	var billadd = document.getElementById("billadd").value;
	var contact = document.getElementById("contact").value;
	var email2 = document.getElementById("email2").value;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var card = document.getElementById("card").value;
	var creditnum = document.getElementById("creditnum").value;
	var errMsg2 = "";
	var result2 = true;
	
	if ((!delivery) && (!pickup)) {
		errMsg2 += "Please select delivery or pickup.\n";
	}
	if (delivery) {
		if ((!deliadd) && (!billadd)) {
			errMsg2 += "Please enter both delivery and billing address.\n";
		}
	}
	if (contact == "") {
		errMsg2 += "Please enter your contact number.\n";
	}
	if (email2 == "") {
		errMsg2 += "Please enter your email for receipt.\n";
	}
	if ((!paypickup) && (!payonline)) {
		errMsg2 += "Please select a payment method.\n";
	}
	if (payonline) {
		if ((card == "") && (creditnum == "")) {
			errMsg2 += "Please select a type of card and credit card number.\n";
		}
		if (card == "visa" || card == "master") {
			if (creditnum.length != 16) {
				errMsg2 += "VISA or MasterCard must have 16 numbers.\n"
			}
		} else if (card == "american") {
			if (creditnum.length != 15) {
				errMsg2 += "American Express card must have 15 numbers.\n"
			}
		}
	}
	if (errMsg2 != "") {
		alert(errMsg2);
		result2 = false;
	}
	return result2; 
}

// enhancements function 

function enhancements() {
	var delivery = document.getElementById("delivery").checked;
	var payonline = document.getElementById("payonline").checked;

	if (delivery) {
		document.getElementById("deliadd").disabled = false;
		document.getElementById("same").disabled = false;
		document.getElementById("billadd").disabled = false;
	} else {
		document.getElementById("deliadd").disabled = true;
		document.getElementById("same").disabled = true;
		document.getElementById("billadd").disabled = true;
	}
	if (payonline) {
		document.getElementById("card").disabled = false;
		document.getElementById("creditnum").disabled = false;
	} else {
		document.getElementById("card").disabled = true;
		document.getElementById("creditnum").disabled = true;
	}
	if (document.getElementById("same").checked) {
		document.getElementById("billadd").value = document.getElementById("deliadd").value;
	}
	document.getElementById("same").addEventListener("change", function (event) {
		if (document.getElementById("deliadd").value == "" && document.getElementById("same").checked == true) {
			alert("Please enter your delivery address first");
			document.getElementById("same").checked = false;
		}
	})
}

// calling the functions to active on load and on change 

function init() {
	var regForm = document.getElementById("regform");
	var ordForm = document.getElementById("ordform");
	if (regForm != null) {
		regForm.onsubmit = regvalidate;
	}
	if (ordForm != null) {
		ordForm.onsubmit = ordvalidate;
	}
}

window.onload = init;
window.onchange = enhancements;