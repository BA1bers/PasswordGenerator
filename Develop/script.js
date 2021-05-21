var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";
//textArea displays the password on screen
var textArea = document.getElementById("password");

function characterTypes() {
  var passwordCapital = confirm("would you like to include uppercase letters?");
  var passwordLowercase = confirm("would you like to include lowercase letters?");
  var passwordNumeric = confirm("would you like to include numbers?");
  var passwordSpecial = confirm("would you like to include special characters?");
  if (passwordCapital === true || passwordLowercase === true || passwordNumeric === true || passwordSpecial === true) {
    //if uppercase letters are chosen, its added to the variable "passString"
    if (passwordCapital === true) {
      passString += capital
    }
    //if lowercase letters are chosen, its added to the variable "passString"
    if (passwordLowercase === true) {
      passString += lower
    }
    //if numbers are chosen, its added to the variable "passString"
    if (passwordNumeric === true) {
      passString += numeric
    }
    //if special characters are chosen, its added to the variable "passString"
    if (passwordSpecial === true) {
      passString += special
    }

  }
  // This else statement alerts if none of the variables were chosen and loops back to the beginning of characterTypes function
  else {
    alert("Please choose at least one character type.")
    characterTypes()
  };
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var text = '';
  // function questions allows for the prompt to loop back if a value less than 8 or greater than 128 was chosen
  function questions() {
    var passwordLength = prompt("How long would you like your password to be? Please choose a number between 8 characters to 128 characters.");
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes()
      //
      for (let i = 0; i < passwordLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)]
        passResult += x;
      }
      console.log(passResult);
      console.log(textArea);
      text = document.createTextNode(passResult);
      //removes old password in the instance "generate password" was clicked after the first was made
      textArea.innerHTML = '';
      textArea.appendChild(text);
      passResult = '';

    };


  }
  questions()
}

// writePassword now connected with the generate password button
generateBtn.addEventListener("click", () => {
  writePassword();
});