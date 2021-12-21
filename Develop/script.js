// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword()
enter = parseInt(prompt("how many characters would you like your password to be? choose between 8-128"))
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
