// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var numbers = ("0123456789") .split("");
var specialChar = ("!@#$%^&*") .split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

  passwordText.value = password;

}

function generatePassword() {
  var  password = ""
  var result = ""
 console.log ("button click")
  var passLength = parseInt(prompt("please select character length between 8 and 128."));
console.log(passLength)
  var lengthConfirm = parseInt(passLength);
  console.log(lengthConfirm);

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert ("error, choice is not valid. please try again.");
    return;
  }

  var lowerCaseConfirm = confirm("Do you want your password to include lower case letters?");
  if(lowerCaseConfirm === true){
    for (var 
  }
   var upperCaseConfirm = confirm("Do you want your password to include upper case letters?");
   if(upperCaseConfirm === true){
    for (var 
  }
    var numberConfirm = confirm ("do you want to include numbers?");
    if(numberConfirm === true){
     for (var 
    }
    var SpecialCharacter = confirm("do you want to include special characters?")
    if(SpecialCharacter === true){
      for (var 
    }
  for (i = 0; i < lengthConfirm; i++);{
   randomLetter[(Math.floor(Math.random() * passLength.length))];
   result +=
   randomLetter[
       Math.floor(Math.random() * randomLetter.length)
   ];
  }
  console.log(i)
   return result;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
