// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numVal = "1234567890"
var specialChar = "!@#$%^&*()"

// console.log(upperCase.split(""))

function generatePassword() {
  
  var charCount = prompt("Please enter number of characters 8-128")

  if (charCount < 8 || charCount > 128) {
    alert("Invalid # of characters, please try again")
    generatePassword()
  }

  if (isNaN(charCount)) {
    alert("Please enter a valid number")
    generatePassword()
  }


  var includeNumber = confirm("Include Numbers?");
  var includeUpper = confirm("Include Uppercase?");
  var includeLower = confirm("Include Lowercase?");
  var includeSpecial = confirm("Include Special Characters");

  var selectedCharType = []

  if (includeNumber) {
    selectedCharType.push(numVal)
    //console.log(selectedCharType)
  }
  if (includeUpper) {
    selectedCharType.push(upperCase)
    //console.log(selectedCharType)
  }
  if (includeLower) {
    selectedCharType.push(lowerCase)
    //console.log(selectedCharType)
  }
  if (includeSpecial) {
    selectedCharType.push(specialChar)
    //console.log(selectedCharType)
  }
  if (!includeNumber && !includeUpper && !includeLower && !includeSpecial) {
    alert("Please select at least one character type")
  }
}
  //Need to concat the strings selected into single string

  //Then create for loop to generate output





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// while (charCount=null){
//   generatePassword()
// }
