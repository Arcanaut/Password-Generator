// Assignment code here

// Get references to the #generate element
Math.floor(8, 128)

var generateBtn = document.querySelector("#generate");

//variables
//variables for key selection

var passwordLowerCase = ["'a','b','c','d','e','f','g','h','i','s','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"];

var passwordUpperCase = ["'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"];

var passwordSpecialCharacters = ["'!','@','#','$','%',';','^','&','*','(',')','-','_','=','+','[',']','{','}','/','?','`','~','.','*'"];

var passwordNumbers = ["'1','2','3','4','5','6','7','8','9'"];

var i = 0


// vars will need to go through catcatination and then use the math.random()

//end of key selection

//variables for prompts



function generatePassword() {

  console.log("button clicked");


  // 1. prompt the user password for password length

  passSize = prompt("Enter a number value between 8-128.");
  if (passSize === null) {
    return;
  }

  //if entry is anything besides a # between 6-128 alert is prompted  
  if (passSize < 8 || passSize > 128 || isNaN(passSize)) {
    alert("ERROR: Entry must be a number between 8 and 128. ")
    return;

  }

  alert("You have chosen your password to be " + passSize + " characters long.")


  var passLow = confirm("Include lower-case letters in your password?");

  var passUpp = confirm("Include upper-case numbers in your password?");

  var passSpec = confirm("Include special characters in your password?");

  var passNum = confirm("Include Numbers in your password?");

  passArray = "";

  if (passNum === true) {
    passArray = passArray.concat(passNumbers);
  }

  if (passSpec === true) {
    passArray = passArray.concat(passwordSpecialCharacters);
  }

  if (passUpp === true) {
    passArray = passArray.concat(passwordUpperCase);
  }

  if (passLow === true) {
    passArray = PassArray.concat(passwordLowerCase);
  }

  for (i - 0; i < passSize; i++)
  {
  var randomPassword = [Math.floor(Math.random)() * passArray.length];
  }
 
}

return "generated password";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log
//return array

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//loop over array pick 1 randomly until it matches the user set, and inserts in to a new array, with the new array storing the password

//end up with character array and then turn that in to a string.