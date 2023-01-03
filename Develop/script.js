// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //88 character passcode set from https://www.grc.com/ppp.htm
  let charNumeric = "23456789";
  let charUpper = "ABCDEFGHJKLMNOPRSTUVWXYZ";
  let charLower = "abcdefghijkmnopqrstuvwxyz";
  let charSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_{|}~"
  let passStable = "";

  var lenPass = prompt ("How many characters would you like your password to be? [Min = 8, Max = 128]", 8);
  if (lenPass <8){
    lenPass = 8; 
  }
  else if (lenPass >128){
    lenPass = 128;
  }
  else{}

  var incNumeric = prompt ("Do you want Numeric characters? [Y/N]", "Y");
  if (incNumeric != "Y"){
    if (incNumeric != "N") {
      incNumeric = "Y";
    }
  }
  var incUpper = prompt ("Do you want to include Uppercase letters? [Y/N]", "Y");
  if (incUpper != "Y"){
    if (incUpper != "N") {
      incUpper = "Y";
    }
  }
  var incLower = prompt ("Do you want to include Lowercase letters? [Y/N]", "Y");
  if (incLower != "Y"){
    if (incLower != "N") {
      incLower = "Y";
    }
  }
  var incSpecial = prompt ("Do you want to include Special characters? [Y/N]", "Y");
  if (incSpecial != "Y"){
    if (incSpecial != "N") {
      incSpecial = "Y";
    }
  }
 
  if (incNumeric == "Y"){
    if(incUpper == "Y"){
      if (incLower == "Y"){
        if (incSpecial == "Y"){
          passStable = charNumeric + charUpper + charLower + charSpecial;
        } else {
          passStable = charNumeric + charUpper + charLower;
        }
      } else {
        if (incSpecial == "Y"){
          passStable = charNumeric + charUpper + charSpecial;
        } else {
          passStable = charNumeric + charUpper;
        }
      }
    } else {
      if (incLower == "Y"){
        if (incSpecial == "Y"){
          passStable = charNumeric + charLower + charSpecial;
        } else {
          passStable = charNumeric + charLower;
        }
      } else {
        if (incSpecial == "Y"){
          passStable = charNumeric + charSpecial;
        } else {
          passStable = charNumeric;
        }
      }
    }
  } else {
    if(incUpper == "Y"){
      if (incLower == "Y") {
        if (incSpecial == "Y") {
          passStable = charUpper + charLower + charSpecial;
        } else {
          passStable = charUpper + charLower;
        }
      } else {
        if (incSpecial == "Y") {
          passStable = charUpper + charSpecial;
        } else {
          passStable = charUpper;
        }
      }
    } else {
      if (incLower == "Y"){
        if (incSpecial == "Y"){
          passStable = charLower + charSpecial;
        } else {
          passStable = charLower;
        }
      } else {
        if (incSpecial == "Y"){
          passStable = charSpecial;
        } else {
          passStable = "Invalid Input";
        }
      }
    }
  }

 // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passStable;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);