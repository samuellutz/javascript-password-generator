// Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choices;

// added all special characters, letters, and numbers

lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
numbers = ("0123456789") .split("");
specialChar = ("!@#$%^&*") .split("");
var get = document.querySelector("#generate");


get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});
// Write password to the #password input
function generatePassword() {
  // Asks for user input
  