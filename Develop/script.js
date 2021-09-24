//Assignment Code

//Create Global variables and link to HTML
const generateBtn = document.querySelector("#generate");

//Create prompt/confirm fields to get from user
let getRandomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};

//Create array with possible outcomes
let passwordArr = [];

let finalPass = [];

const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!","@","#","$","%","^","&","*","()","+","_","{","|","?"]


//User prompts with length, lower, upper, numbers, symbols for array
//Need to create the function with confirm or prompt
function generatePassword ( ) {
console.log ("generatePassword");
let length = prompt("Pick a number between 8 and 128");
console.log (length);

//Conc array for all possible outcomes
//Set unchecked items to false
//Check to see if length is >=8 and <= 128
if (length < 8 || length > 128){
  alert("Password must be between 8 and 128!");
  return 
};

let upper = confirm("Do you want Upper Case letters?");
console.log (upper);
let lower = confirm("Do you want lower case letters?");
console.log (lower);
let number = confirm("Do you want Numbers?");
console.log (number);
let symbol = confirm("Do you want Symbols?");
console.log (symbol);

if (upper === true) {
  passwordArr = passwordArr.concat(upperCase);
  console.log (passwordArr);
}; 

if (lower === true) {
  passwordArr = passwordArr.concat (lowerCase);
  console.log (lowerCase);
};

if (symbol === true) {
  passwordArr = passwordArr.concat (symbols);
  console.log (symbols);
};

if (number === true) {
  passwordArr = passwordArr.concat (numbers);
  console.log (numbers);
};

for (let i = 0; i < length; i++) {
  const randomChar = getRandom(passwordArr);
  finalPass.push(randomChar)
}

return finalPass.join("");

};

function getRandom (array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  const randomValue = array[randomIndex];

  return randomValue;
};

//Actually generate password to be sent to user
//Generate password from functions below 
function writePassword() {
  //const password = generatePassword(length, lower, upper, numbers, symbols);
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to log password after prompts
generateBtn.addEventListener("click", writePassword);



//https://www.net-comber.com/charset.html
//Functions from CharCode to generate possible password combinations
//Me trying to figure out random generation -it's all worthless code but might be worth keeping for something later
//function getRandomLower() {
//return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//};


//function getRandomUpper() {
//	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//};


//function getRandomNumbers() {
//	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//};


//function getRandomSymbols() {
//  const symbols = '!@#$%^&*()+_{}|":;<>?'
//	return String.fromCharCode[Math.floor(Math.random() * symbols.length)];
//};

//Checking to see if my functions worked
//console.log(getRandomLength());

