// Assignment Code
var generateBtn = document.querySelector("#generate");

var questions = function() {
  // Ask user for password length
  var userChoice = window.prompt("Choose password length");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }
// Convert to integer to make comparisons easier
userChoice = parseInt(userChoice) + "<br>";

  }

questions();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//password generator
function generatePassword() {
//all available characters
  const characters="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=`~;:',./<>?[][]p\*";
  var passwordLength= 10;
  var passwordValue= "";
  for (var i=0; i<passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
      passwordValue += characters.substring(randomNumber, randomNumber+1);
  }

  }



