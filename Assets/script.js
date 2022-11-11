// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numVal = "1234567890"
var specialChar = "!@#$%^&*()"

// console.log(upperCase.split(""))

function generatePassword() {
  // var confirmMessage = confirm(charCountMin)
  var charCount = prompt("Please enter number of characters 8-128")

  if (isNaN(charCount)) {
    alert("Please enter a valid number")
    return null;
  }

  if (charCount < 8 || charCount > 128) {
    alert("Invalid # of characters, please try again")
    return null;
  }

  // console.log(charCount)

//Variables below are confirm values for each confirm question to set parameters of the password
  var includeNumber = confirm("Include Numbers?");
  var includeUpper = confirm("Include Uppercase?");
  var includeLower = confirm("Include Lowercase?");
  var includeSpecial = confirm("Include Special Characters");

//Variable below captures each type of selected character
  var selectedCharType = []

//Series of if statements to push each string into an array of selected types of characters
  if (includeNumber) {
    selectedCharType.push(numVal)
    //console.log(selectedCharType)
  }
  if (includeUpper) {
    selectedCharType.push(upperCase)
    //console.log(selectCreCharType)
  }
  if (includeLower) {
    selectedCharType.push(lowerCase)
    //console.log(selectedCharType)
  }
  if (includeSpecial) {
    selectedCharType.push(specialChar)
    //console.log(selectedCharType)
  }
  //if none of the above conditions are met the then alert to select at least one and return to beginning of function
  if (!includeNumber && !includeUpper && !includeLower && !includeSpecial) {
    alert("Please select at least one character type")
    // generatePassword()
  }

  //This will concat the strings selected into single string and then split that into an array
  var masterArray = selectedCharType.join('').split('')
  // console.log(masterArray)

  //Variable for final password set as undefined array.  Then create for loop to generate output variable for specified number of characters.
  var finalPassword = []
  for (var i = 0; i < charCount; i++) {
    var output = masterArray[Math.floor(Math.random() * masterArray.length)]
  //Push each random selection from master array to the end of the output
    finalPassword.push(output)
    // console.log(finalPassword)
    //console.log(output)
  }
  //returns final password array and joins it together into string
  return finalPassword.join('')
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


