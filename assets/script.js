// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//variables
//variables for key selection

var passwordLowerCase = ['a','b','c','d','e','f','g','h','i','s','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var passwordUpperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var passwordSpecialCharacters = ['!','@','#','$','%',';','^','&','*','(',')','-','_','=','+','[',']','{','}','/','?','`','~','.','*'];

var passwordNumbers = ['1','2','3','4','5','6','7','8','9'];




// vars will need to go through catcatination and then use the math.random()

//end of key selection

//variables for prompts



function generatePassword() {




  // 1. prompt the user password for password length

  passSize = parseInt(prompt("Enter a number value between 8-128."));
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

  var possibleCharacters = [];
  
  var guaranteedCharacters = [];

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


  for (var i = 0; i < passSize; i++) {
  var possibleCharacter = getRandom(possibleCharacters)
  results.push(possibleCharacter) 
  };

return results.join("")
};

function getRandom(arr){
  var randomIndex = Math.floor(Math.random() * arr.length ) 
  var randomElement = arr[randomIndex]
  return randomElement;

};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//return array

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//loop over array pick 1 randomly until it matches the user set, and inserts in to a new array, with the new array storing the password

//end up with character array and then turn that in to a string.