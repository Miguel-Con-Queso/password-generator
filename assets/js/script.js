// Assignment code hear
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercaseEl');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');

var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateBtn.addEventListener("click", writePassword) = function() {
  var length = +lengthEl.value;
  var hasLower = null;
  var hasUpper = null;
  var hasNumber = null;
  var hasSymbol = null;

  console.log(length)



  resultEl.innerText = generatePassword( hasLower, hasUpper, hasNumber, hasSymbol, length);
}

function generatePassword(lower, upper, number, symbol, length) {
  // filter out unchecked types and loop over length generator function

  let generatePassword = "";

  var typesCount = lower + upper + number + symbol;

  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (item => Object.values(item)[0]
  );

  console.log("typesArr: ", typesArr);

  if(typesCoutn === 0) {
    return "";
  }

for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach(type => {
    var funcName = Object.keys(type)[0];

    generatedPassword += randomFunc[funcName]();
  });
}

var finalPassword = generatedPassword.slice(0, length);



}




/* Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.onclick = function() {
  var charLeng = prompt("How many characters between '8' and '128' must your password be?");
  var upChar = prompt("Must your password include uppercase letters? 'yes' or 'no'.");
  var specChar = prompt("Must your password include special characters? 'yes' or 'no'.");
  var numChar = prompt("Must your password include arabic numerals? 'yes' or 'no'.");
  console.log(charLeng, upChar, specChar, numChar);

  if (charLeng < 8 || charLeng > 128 || !upChar === "yes" || !upChar === "no" || !specChar === "yes" || !specChar === "no" || !numChar === "yes" || !numChar === "no") {
    alert("Please enter a valid response.");
    return generateBtn.onclick();
  } else {


    numChar = Math.floor(Math.random() * 128);
    console.log(numChar);


  }
*/


function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) +97)
}

function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) +65)
}

function getRandomNumber() {
return String.fromCharCode(Math.floor(Math.random() * 10) +48)
}

function getRandomSymbol() {
const symbols = "!@#$%^&*(){}[]=<>/,."
return symbols[Math.floor(Math.random() * symbols.length)];
};



/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
