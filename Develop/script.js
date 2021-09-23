//Assignment Code

//Create Global variables and link to HTML
const generateBtn = document.querySelector("#generate");


let getRandomFunc = {
  //length: getRandomLength,
  upper: getRandomUpper,
  lower: getRandomLower,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};

let passwordArr = [];

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!","@","#","$","%","^","&","*","()","+","_","{","|","?"]


//Need to create Elements in the OnClick
//Need to create the function with media.alert() or media.prompt
// Function to obtain elements from the choices given for pwd to the #password box; my "listen" event
// generateBtn.addEventListener("click", () => {
//     const length = +lengthBtn
//     const upperChecked = uppercaseBtn.checked;
//     const lowerChecked = lowercaseBtn.checked;
//     const numbersChecked = numbersBtn.checked;
//     const symbolsChecked = symbolsBtn.checked;

//     //This is where I will place the results from generator functions
// password = generatePassword(
//   length, 
//   upperChecked, 
//   lowerChecked, 
//   numbersChecked, 
//   symbolsChecked
// );
  
// });

//Create array with length, lower, upper, numbers, symbols

function generatePassword ( ) {
console.log ("generatePassword");
let length = prompt("Pick a number between 8 and 128");
console.log (length);
let upper = confirm("Do you want Upper Case letters?");
console.log (upper);
let lower = confirm("Do you want lower case letters?");
console.log (lower);
let number = confirm("Do you want Numbers?");
console.log (number);
let symbol = confirm("Do you want Symbols?");
console.log (symbol);
};

//Set unchecked items to false
function myPassword () {

  if (upper === true) {
    passwordArr.concat(upperCase);
    console.log (upperCase);
  }; 
  
  if (lower === true) {
    passwordArr.concat (lowerCase);
    console.log (lowerCase);
  };
  

  if (symbol === true) {
    passwordArr.concat (symbols);
    console.log (symbols);
  };

  if (number === true) {
    passwordArr.concat (numbers);
    console.log (numbers);
  };

   return myPassword;

};


//Actually generate password to be sent to user
//Set length to >=8 and <= 128
//Generate password from functions below 
function writePassword() {
  //const password = generatePassword(length, lower, upper, numbers, symbols);
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

};


//https://www.net-comber.com/charset.html
//Functions from CharCode to generate possible password combinations
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = '!@#$%^&*()+_{}|":;<>?'
	return String.fromCharCode[Math.floor(Math.random() * symbols.length)];
}

//Checking to see if my functions worked
//console.log(getRandomLength());

// Add event listener to log password after prompts
generateBtn.addEventListener("click", writePassword);