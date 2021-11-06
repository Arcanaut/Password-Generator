// Assignment code here

// Get references to the #generate element
Math.floor(8, 128)

var generateBtn = document.querySelector("#generate");

//variables
//variables for key selection

var passwordLowerCase = ["'a','b','c','d','e','f','g','h','i','s','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]

var passwordUpperCase = ["'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"]

var passwordSpecialCharacters = ["'!','@','#','$','%',';','^','&','*','(',')','-','_','=','+','[',']','{','}','/','?','`','~','.','*'"]

var passwordNumbers = ["'1','2','3','4','5','6','7','8','9'"]
// vars will need to go through catcatination and then use the math.random()

//end of key selection

//variables for prompts
var passLow = confirm("Include lower-case letters in your password?");

var passUpp = confirm("Include upper-case numbers in your password?")

var passSpec = confirm("Include special characters in your password?")

var passNum = confirm("Include Numbers in your password?");
//end of prompt variables
// end of variables



function generatePassword() {

  console.log("button clicked");


  // 1. prompt the user password criteria 

  passLength = prompt("Enter a number value between 8-128.");
 if (passLength === null) {
   return;
 }

//if entry is anything besides a # between 6-128 alert is prompted  
if (passLength < 8 || passLength >128 || isNaN(passLength)) {  
alert("ERROR: Entry must be a number between 8 and 128. ")

}

alert("You have chosen your password to be " + passLength + " characters long.")

if (passwordNum === true){
passArray.concat(passNumbers);
}

if (passSpec === true){
  passArray.concat(passwordSpecialCharacters);
}

if (passUpp === true){
  passArray.concat(passwordUpperCase);
}

if (passLow ===true){
  passArray.concat(passwordLowerCase);
}
  //length 8-128- set ceiling/floor 

  //uppercase,lowercase,numbers,special characters, make an index?

  // 2. validate the input

  // 3. Generate password based on criteria

  // 4. Display password on page

  passArray = [""]
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