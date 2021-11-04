// Assignment code here

// Get references to the #generate element
Math.floor(8,128)
Math.ceil(8,128)

var generateBtn = document.querySelector("#generate");

var passwordLowerCaseLetters = "abcdefghisklmnopqrstuvwxyz"

var passwordUpperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var passwordSpecialCharacters = "!@#$%^&*()-_=+[]{}/?`~.*"

var passwordNumbers = "123456789"

var passwordlength = window.prompt(i)

function generatePassword(){


 console.log("button clicked");


// 1. prompt the user password criteria 
window.prompt("enter length of password")

 

  //length 8-128- set ceiling/floor 
 
  //uppercase,lowercase,numbers,special characters, make an index?

// 2. validate the input

// 3. Generate password based on criteria






// 4. Display password on page

return "generated password";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
