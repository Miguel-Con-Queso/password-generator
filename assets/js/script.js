// Assignment code hear
var charLeng = "";
var upChar = "";
var lowChar = "";
var specChar = "";
var numChar = "";
var finalPassword = "";

var generateBtn = document.getElementById("generate");

var randomFunc = {
  lowChar: getRandomLower,
  upChar: getRandomUpper,
  numChar: getRandomNumber,
  specChar: getRandomSymbol
};


function writePassword() {
  finalPassword = generatedPassword.slice(0, charLeng)
  finalPassword = document.querySelector("#password")

} 

generateBtn.addEventListener('click', () => {

  charLeng = prompt("How many characters between '8' and '128' must your password be?");
  if (charLeng >= 8 && charLeng <= 128) {

  upChar = prompt("Must your password include uppercase letters? 'yes' or 'no'.");
  upChar = upChar.toLowerCase();
  };
  if (upChar === "yes" || upChar === "no") {

  lowChar = prompt("Must your password include lowercase letters?");
  lowChar = lowChar.toLowerCase();
  };
  if (lowChar === "yes" || lowChar === "no") {

  specChar = prompt("Must your password include special characters? 'yes' or 'no'.");
  specChar = specChar.toLowerCase();
  };
  if (specChar === "yes" || specChar === "no") {

  numChar = prompt("Must your password include arabic numerals? 'yes' or 'no'.");
  numChar = numChar.toLowerCase();
  };
  if (numChar === "yes" || numChar === "no") {


    charLeng = parseInt (charLeng, 10);
    let myString = 'true';
    let myOtherString = 'false';

    if (upChar === "yes") {
      upChar = (myString === 'true');
    } else {
      upChar = (!myString === 'false');
    };
    if (lowChar === "yes") {
      lowChar = (myString === 'true');
    } else {
      lowChar = (!myOtherString === 'false');
    };
    if (specChar === "yes") {
      specChar = (myString === 'true');
    } else {
      specChar = (!myOtherString === 'false');
    };
    if (numChar === "yes") {
      numChar = (myString === 'true');
    } else {
      numChar = (!myOtherString === 'false');
    };


    password.innerText = generatePassword(charLeng, upChar, lowChar, specChar, numChar);
  } else {
    alert("Please enter a valid response.");
    return charLeng;
  };
});

// Generate password function
function generatePassword(charLeng, upChar, lowChar, specChar, numChar) {

  let generatedPassword = "";

  var typesCount = upChar + lowChar + numChar + specChar;

  var typesArr = [{upChar}, {lowChar}, {numChar}, {specChar}].filter
  (item => Object.values(item)[0]
  );


  if(typesCount === 0) {
    return "";
  }

  for(let i = 0; i < charLeng; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, charLeng);

  return finalPassword;

};


var generateBtn = document.querySelector("#generate");


function getRandomLower() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
var symbols = "!@#$%^&*(){}[]=<>/,."
return symbols[Math.floor(Math.random() * symbols.length)];
};
