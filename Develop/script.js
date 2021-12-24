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
  var  passwordtotal = "";
  var result = "";
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
    for (var i = 0; i < lowerCase.length; i++) {
      passwordtotal.push(specialChar[i]);
   }
  }
   var upperCaseConfirm = confirm("Do you want your password to include upper case letters?");
   if(upperCaseConfirm === true){
    for (var i = 0; i < upperCase.length; i++) {
      passwordtotal.push(specialChar[i]);
    }
    }
    var numberConfirm = confirm ("do you want to include numbers?");
    if(numberConfirm === true){
     for (var i = 0; i < numbers.length; i++) {
      passwordtotal.push(specialChar[i]);
    }
   }
    var SpecialCharacter = confirm("do you want to include special characters?")
    if(SpecialCharacter === true){
      for (var i = 0; i < specialChar.length; i++) {
        passwordtotal.push(specialChar[i]);
    }
   }
  for (i = 0; i < lengthConfirm; i++) {
    passwordtotal[
      Math.floor(Math.random() * passLength.length)];
   passwordtotal +=
      passwordtotal[
        Math.floor(Math.random() * passLength.length)
      ];
    }
  console.log(i)
   return passwordtotal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
