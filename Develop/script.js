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
    if(lowerCaseConfirm === true){
    }

   var upperCaseConfirm = confirm("Do you want your password to include upper case letters?");
    if(upperCaseConfirm === true){}
      for (i = 0; i < upperCase.length; i++)
    

    var numberConfirm = confirm ("do you want to include numbers?");
      if (numberConfirm === true){}
        for (i = 0; i < numbers.length; i++)
      

    var SpecialCharacter = confirm("do you want to include special characters?")
      if (SpecialCharacter === true){}
        for (i = 0; i < specialChar.length; i++)
  {}}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
