// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz") .split();
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") .split();
var numbers = ("0123456789") .split();
var specialChar = ("!@#$%^&*") .split();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 console.log ("button click")
  var passLength = parseInt(prompt("please select character length between 8 and 128."));

  var lengthConfirm = parseInt(passLength);
  console.log(lengthConfirm);

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert ("error, choice is not valid. please try again.");
    return;
  }

  var lowerCaseConfirm = confirm("Do you want your password to include lower case letters?");
  if(lowerCaseConfirm){
    var randomLetter = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[randomLetter];
  }

   var upperCaseConfirm = confirm("Do you want your password to include upper case letters?");
   if(upperCaseConfirm){
    var randomLetter = Math.floor(Math.random() * upperCase.length);
    password += upperCase[randomLetter];
  }

    var numberConfirm = confirm ("do you want to include numbers?");
    if(numberConfirm){
      var randomNumber = Math.floor(Math.random() * numbers.length);
      password += numbers[randomLetter];
    }
    var SpecialCharacter = confirm("do you want to include special characters?")
    if(SpecialCharacter){
      var randomLetter = Math.floor(Math.random() * specialChar.length);
      password += specialChar[randomLetter];
    }
   return password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
