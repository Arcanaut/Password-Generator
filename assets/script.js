// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



//variables for key selection

var passwordLowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 's', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var passwordUpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var passwordSpecialCharacters = ['!', '@', '#', '$', '%', ';', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '/', '?', '`', '~', '.', '*'];

var passwordNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//end of key selection




function generatePassword() {




  // 1. prompt the user password for password length

  passSize = parseInt(prompt("Enter a number value between 8-128."));
  if (passSize === null) {
    return;
  }

  //if entry is anything besides a # between 6-128 or not a number alert is prompted  
  if (passSize < 8 || passSize > 128 || isNaN(passSize)) {
    alert("ERROR: Entry must be a number between 8 and 128. ")
    return;

  }
//message confirming password length
  alert("You have chosen your password to be " + passSize + " characters long.")

  //variables for prompts

  var passLow = confirm("Include lower-case letters in your password?");

  var passUpp = confirm("Include upper-case numbers in your password?");

  var passSpec = confirm("Include special characters in your password?");

  var passNum = confirm("Include Numbers in your password?");
//end of variables for prompts

//array for the concated arrays to go in to
  var possibleCharacters = [];

  var results = [];

  if (passNum === true) {
    possibleCharacters = possibleCharacters.concat(passwordNumbers);

  }

  if (passSpec === true) {
    possibleCharacters = possibleCharacters.concat(passwordSpecialCharacters);

  }

  if (passUpp === true) {
    possibleCharacters = possibleCharacters.concat(passwordUpperCase);

  }

  if (passLow === true) {
    possibleCharacters = possibleCharacters.concat(passwordLowerCase);

  }

//keeps adding new random keys from the set parameters until the length of them reaches the password length determined by passSize
  for (var i = 0; i < passSize; i++) {
    var possibleCharacter = getRandom(possibleCharacters)
    results.push(possibleCharacter)
  };

  return results.join("")
};

//returns array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length)
  var randomElement = arr[randomIndex]
  return randomElement;

};

// Writes password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
