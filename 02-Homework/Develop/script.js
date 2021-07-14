// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
 passwordText.value = password;

}

//password generator
function generatePassword() {
  // asks how many characters for password
  let charCount = 0;
  do {
   charCount = prompt("Between 8 and 128, how many characters would you like your password to be?");

  } while ((charCount < 8)||(charCount > 128))
  
  var lowerQuest = confirm("Would you like to include lowercase letters?");
  var upperQuest = confirm("Would you like uppercase letters included?");
  var numerQuest = confirm("Would you like to include numeric values?");
  var specQuest = confirm("Would you like to include special characters?");

  // array of lowercase letters
var lowerCaseLetters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// array of uppercase letters
var upperCaseLetters =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
// array of numeric values 
var numerValues =["1","2","3","4","5","6","7","8","9","0"];
// special characters 
var specChars =["!","`","~","@","#","$","%","^","&","*","(",")","_","+","="]
//all available characters
  

var dataArray = [""]

if (lowerQuest) dataArray = dataArray.concat(lowerCaseLetters);
if (upperQuest) dataArray = dataArray.concat(upperCaseLetters);
if (numerQuest) dataArray = dataArray.concat(numerValues);
if (specQuest) dataArray = dataArray.concat(specChars);
  console.log(dataArray)
  var passwordValue= "";
  for (var i = 0; i <= charCount; i++) {
    var randomNumber = Math.floor(Math.random() * dataArray.length);
    var randomGen = dataArray[randomNumber];
    
    passwordValue += randomGen
  }
  return passwordValue;
  // if (isNaN(charCount)){
  //   alert('Please choose a number');
  //   return; 
  // } else if (charCount < 10 || charCount > 20){
  //   alert("Must be between 10 and 20 characters");
  //   return;
  // } else { 
  //   // asks if function should include lowercase letters
  // var lowerQuest = prompt("Would you like to include lowercase letters? Y or N");
  //  if (lowerQuest !== "Y" || lowerQuest !== "N"){
  //    alert('Answer must be Y or N');
  //    return;
  //  } else {
  //    // asks if should include uppercase letters
  // var upperQuest = prompt("Would you like to include uppercase letters? Y or N");
  // if (upperQuest !== "Y" || upperQuest !== "N"){
  //   alert('Answer must be Y or N');
  //   return;
  // } else {
  //   // asks if password should include numeric values
  //   var numerQuest = prompt("Would you like to include numeric values? Y or N");
  // }
  // if (numerQuest !== "Y" || numerQuest !== "N"){
  //   alert('Answer must be Y or N');
  //   return;
  // } else {
  //   // asks if password should include special characters
  //   var specQuest = prompt("Would you like to include numeric values? Y or N");
  // if (specQuest !== "Y" || specQuest !== "N"){
  //   alert('Answer must be Y or N');
  //   return;
  // }
  // } 
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

