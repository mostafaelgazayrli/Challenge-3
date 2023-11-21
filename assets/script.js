var num = ['0','1','2','3','4','5','6','7','8','9'];
var specialChart = ['!','~','!','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']',':',';','"','|','\\','<','>','?','/',',','.'];
var lowercasechart = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasechart = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// get password options from user 
function getpassword() {
  var length = parseInt(prompt('Please enter how many characters you want for your password'), 10);

  if (length < 8) {
    alert('Password has to be at least 8 characters');
    return null;
  }

  if (isNaN(length)) {
    alert('You have to enter the number of password characters');
    return null;
  }

  if (length > 120) {
    alert('Password must be less than 120 characters');
    return null;
  }

  var withnum = confirm('Press OK if your password should include numbers');
  var withspecialChart = confirm('Press OK if your password should include special characters');
  var withlowercasechart = confirm('Press OK if your password should include lowercase characters');
  var withuppercasechart = confirm('Press OK if your password should include uppercase characters');

  if (!withnum && !withspecialChart && !withlowercasechart && !withuppercasechart) {
    alert('You must select at least one type of character');
    return null;
  }

  var userinters = {
    length: length,
    withnum: withnum,
    withlowercasechart: withlowercasechart,
    withuppercasechart: withuppercasechart
  };

  return userinters;
}

// function to generate random password
function randompass(x) {
  var randomidx = Math.floor(Math.random() * x.length);
  var randomnum = x[randomidx];

  return randomnum;
}

function generatePassword() {
  var passwordoptions = getpassword();

  if (!passwordoptions) {
    return null;
  }

  var result = [];
  var characters = [];
  var resultcharacters = [];

  if (passwordoptions.withnum) {
    characters = characters.concat(num);
    resultcharacters.push(randompass(num));
  }

  if (passwordoptions.withspecialChart) {
    characters = characters.concat(specialChart);
    resultcharacters.push(randompass(specialChart));
  }

  if (passwordoptions.withlowercasechart) {
    characters = characters.concat(lowercasechart);
    resultcharacters.push(randompass(lowercasechart));
  }

  if (passwordoptions.withuppercasechart) {
    characters = characters.concat(uppercasechart);
    resultcharacters.push(randompass(uppercasechart));
  }

  for (var i = 0; i < passwordoptions.length; i++) {
    var randomcharacters = randompass(characters);
    result.push(randomcharacters);
  }

  for (var i = 0; i < resultcharacters.length; i++) {
    result[i] = resultcharacters[i];
  }

  return result.join('');
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
