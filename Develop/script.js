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
  if(lowerCaseConfirm += true){
    var randomLetter = Math.floor(Math.random() * lowerCase.length);
    password += lowerCase[randomLetter];
  }
  console.log(password)
console.log (lowerCaseConfirm)
   var upperCaseConfirm = confirm("Do you want your password to include upper case letters?");
   if(upperCaseConfirm += true){
    var randomLetter = Math.floor(Math.random() * upperCase.length);
    password += upperCase[randomLetter];
  }
console.log(upperCaseConfirm)
    var numberConfirm = confirm ("do you want to include numbers?");
    if(numberConfirm += true){
      var randomLetter = Math.floor(Math.random() * numbers.length);
      password += numbers[randomLetter];
    }
    var SpecialCharacter = confirm("do you want to include special characters?")
    if(SpecialCharacter += true){
      var randomLetter = Math.floor(Math.random() * specialChar.length);
      password += specialChar[randomLetter];
    }
  // var randomPassword = "";
  // for (var i = 0; i <lengthConfirm; i++) {
  //   password [
  //     math.floor(math.random() * password.length)];
  //     randomPassword += password[
  //           math.floor(math.random() * password.length)
  //       ];
  // }

   return password;
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
