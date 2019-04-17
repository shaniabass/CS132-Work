// JavaScript Document

function stopLogin() {
		var passInput = document.getElementById("pass-fill");
		var inputBox = document.getElementById("pass-box");
		if (inputBox.value === "error") {
			passInput.innerHTML ="<span style='font-size:12px; color:white; font-weight: bold;'>ERROR: Your password appears to be incorrect. Please try again.</span>";
			return false;
		}
		}