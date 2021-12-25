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
  var UserInput = parseInt
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user inputvar
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated giving selection of options
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmLowercase = confirm("Will this contain lowercase letters?");
      confirmUppercase = confirm("Will this contain uppercase letters?");
  };

  // if for 4 negative options give message

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose something to put in!");

  }
  // First if statement that uses user input prompts to determine choices
  //  for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase
    ) {

      choices = specialChar.concat(numbers, upperCase, lowerCase, specialChar);
  }
  // for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = specialChar.concat(numbers, upperCase, specialChar);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = specialChar.concat(numbers, lowerCase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = specialChar.concat(lowerCase, upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = numbers.concat(lowerCase, upperCase);
  }
  // for 2 positive options 
  else if (confirmCharacter && numbers) {
      choices = specialChar.concat(numbers);

  } else if (confirmCharacter && confirmLowercase) {
      choices = specialChar.concat(lowerCase);

  } else if (confirmCharacter && confirmUppercase) {
      choices = specialChar.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = lowerCase.concat(numbers);

  } else if (confirmLowercase && confirmUppercase) {
      choices = lowerCase.concat(upperCase);

  } else if (confirmNumber && confirmUppercase) {
      choices = numbers.concat(upperCase);
  }
  // for 1 choice
  else if (confirmCharacter) {
      choices = specialChar;
  }
  else if (confirmNumber) {
      choices = numbers;
  }
  else if (confirmLowercase) {
      choices = lowerCase;
  }

  else if (confirmUppercase) {
      choices = upperCase;
  };