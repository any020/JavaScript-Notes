//var number = 5; //in-line comment

/* Lang kommentar
xxxxxxx
xxxxxxx
xxxxxxx
*/

/*
Data types:
undefined, null, boolean, string, symbol, number, and object

Variable = var //#endregion
*/
//var myName = 'Are'
//myName = 8 //#endregion
//let kan bare brukes innenfor sitt scope
//let ourName = "vg.no"
// const kan ikke endres

/*Storing Values with Assignment Operators
assigning
var a; //deklarer en variable til å bli kalt 'a'
var b = 2; //assigninger 2 til 'b'


a = 7;

b = a;

//console.log = print
console.log(a);


// Initializing Variables w/Assignment Operator
//var a = 9; //a deklerer 9 initialzing import {  } from "module";

// Initializing these three variables
var a = 1;
var b = 2;
var c = "jeg er en ";

a = a + 3;
b = b + 2;
c = c + "string";

console.log(c);

//Decklaration - camelCase
var studyCapVar;
var properCamelCase;
var titleCaseOver;

//ASSIGNMENT
studyCapVar = 10;
properCamelCase = "a string";
titleCaseOver = 9000;

//Adding numbers, diving etc
var sum = 10 + 10;
console.log(sum);

//INCREMENT NUMBERS
var myNumber = 10;
myNumber++
console.log(myNumber);
//slå sammen int og floats fungerer på samme måte

//REST
var remainders;
remainders = 11 % 3;

/*+= Compound Assignment with Augemented addition
var a = 3
var = a + 3 er det samme som:
a += 13

var a = 3; 
var b = 5;
var c = 12;

a += 12;
b += 10;
c += 8;
*/

//ESCAPE CHARACTERS
//"two "\string\" inside "\this\" string"

function ourReuseableFunction() {
  console.log("hey world");
}
ourReuseableFunction();

function doSomething(a, b) {
  console.log(a + b);
}
doSomething(210, 210);

// Passing VALUES ti funtions with arguments //#endregion
//parametere er variabler som oppfører som placeholders

function functionWithArgs(a, b) {
  //with parameters
  console.log(a - b); //do what? with variables
}
functionWithArgs(400, 20); //funksjonskall/ functioncall

//GLOBAL SCOPE AND FUNCTIONS
//scope, visability off variables
//global = seen everywhere in the javascript code
var myGlobal = 10;

function fun1() {
  //assign 5 to oopsGlobal Here
  oopsGlobal = 5; //NO var blir global automatisk, med var = undefined
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    //check if program knows about the variable(global)
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

//LOCAL SCOPE AND FUNCTIONS
function myLocalScope() {
  var myVar = 5 + " This is myVar";
  console.log(myVar);
}
myLocalScope();

//Global vs.Local Scope in Functions
//global and local variable can have the same name

var outerWear = "t-shirt";

function myOutfit() {
  var outerWear = "sweater"; //local variable overtar den globale variabelen
  return outerWear;
}
console.log(myOutfit());

//RETURN A VALUE FROM A FUNCTION WITH RETURN
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); //console log the function

function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5));

//UNDERSTANDING UNDEFINED VALUE
//RETURNED FROM A FUNCTION
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5; // undefined cause it doesnt log
}

//ASSIGNMENT WITH A RETURNED VALUE
function change(num) {
  return (num + 5) / 3;
}

changed = change(10); //stored in new variable: changed

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

//STAND IN LINE
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArray = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArray));
console.log(nextInLine(testArray, 6));
console.log("After: " + JSON.stringify(testArray));

//BOOLEAN VALUES //TRUE OR FALSE
function welcomeToBooleans() {
  return true;
}

// USE CONDITIONAL LOGIC WITH IF STATEMENTS
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "yes, it´ss true";
  }
  return "no,it´s false";
}

function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "yes, its true";
  }
  return "no, that was false";
}
console.log(trueOrFalse(true));

//Comparison with the Equality Operator
//Setup
function testEqual(val) {
  if (val == 12) {
    return "equal";
  }
  return "not equal";
}
//change this value to test
console.log(testEqual(10));

//COMPARISON WITH THE OPERATOR STRICT EQUALITY OPERATOR
function testStrict(val) {
  if (val === 7) {
    return "equal";
  }
  return "Not equal";
}
//
testStrict(10);
/*
3 === 3
3 === '3'
*/

//PRACTICE COMPARING DIFFERENT VALUES
function compareEquality(a, b) {
  if (a === b) {
    //typeconversion, === not converting
    return "Equal";
  }
  return "Not equal";
}

console.log(compareEquality(10, "10"));

//COMPARISON WITH THE INEQULITY OPERATOR
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

//COMPARISON WITH THE OPERATOR !STRICT! INEQUALITY OPERATOR
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "not equal bitch";
  }
  return "equal";
}
console.log(testStrictNotEqual(10));

//COMPARISONS WITH THE LOGICAL And OPERATOR
function testGreaterThan(val) {
  if (val > 100) {
    return "over 100";
  }
  if (val > 10) {
    return "over 10";
  }
  return "under 10";
}
console.log(testGreaterThan(9));
console.log({});

//COMPARISON WITH THE GREATER THAN
//OR EQUAL TO OPERATOR
function testLessThan(val) {
  if (val < 25) {
    return "under 25";
  }
  if (val < 55) {
    return "over 55";
  }
}
console.log(testLessThan(10));

//COMPARISON WITH THE LESS THAN OR EQUAL TO OPERATOR
function testLessOrEqual(val) {
  if (val <= 12) {
    return "smaller than or equal to 12";
  }
  if (val >= 24) {
    return "smaller than or equal to 24";
  }
  return "more than 24";
}
console.log(testLessOrEqual(10));

//COMPARISONS WITH THE LOGICAL And OPERATOR
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    //&& = AND
    return "yes";
  }

  return "NO";
}
testLogicalAnd(10);

//COMPARISON WITH THE LOGICAL 'OR' OPERATOR
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    //|| = OR
    return "outside";
  }
  return "inside";
}
testLogicalOr(15);

//ELSE STATEMENTS
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "bigger than 5";
  } else {
    result = "5 or smaller";
  }
  return result;
}
//ELSE IF STATEMENTS
//mulitple additions that needs to be adressed
function testElseIf(val) {
  if (val > 10) {
    return "greater than 10";
  } else if (val < 5) {
    return "smaller than 5";
  } else {
    return "between 5 and 10";
  }
}
testElseIf(7);

//LOGICAL ORDER IN If Else statements
function orderMyLogic(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "less than 10";
  } else {
    return "greater than equal to 10";
  }
}
console.log(orderMyLogic(7));

//CHAINING If Else Statements
function testSize(num) {
  if (num < 5) {
    return "tiny";
  } else if (num < 10) {
    return "small";
  } else if (num < 15) {
    return "medium";
  } else if (num < 20) {
    return "large";
  } else {
    return "huge";
  }
}
console.log(testSize(10));

//GOLF CODE
var names = [
  "hole-in-one",
  "eagle",
  "birdie",
  "par",
  "bogey",
  "double-bogey",
  "go home"
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes <= par - 2) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4));

//SWITCH STATEMENTS isf chained statements
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "charlie";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(4));

//DEFAULT OPTION IN SWITCH STATEMENTS
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}
console.log(switchOfStuff("a"));

//MULITPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
// NO BREAKES
function sequentalSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "high";
      break;
  }
  return answer;
}
console.log(sequentalSizes(5));

// REPLACING IF ELSE CHAINS WITH SWITCH
function chainToSwitch(val) {
  var answer = "";

  switch (val) {
    case "bob":
      anwser = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "ate nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch(42));

/*RETURNING BOOLEAN VALUES FROM FUNCTIONS

function isLess(a, b) {
  if (a < b) {
    return true;
  } else {
    return false;
  }
}
isLess(10, 15);
*/

function isLess(a, b) {
  return a < b;
}

console.log(isLess(50, 40));

//RETURNING EARLY PATTERN FROM FUNCTIONS
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));

//COUNTING CARDS
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "Knekt":
    case "Dronning":
    case "Konge":
    case "Spa":
      count--;
      break;
  }
  var holdbet = "hold";
  if (count > 0) {
    holdbet = "Bet";
  }
  return count + " " + holdbet;
}

cc(2);
cc(3);
cc(10);
cc("Konge");
cc("Spa");

console.log(cc(10));

//-----------------------------------------------------
//BUILD JAVASCRIPTS OBJECTS

//Properties: name etc
var ourDog = {
  name: "Rex",
  legs: 4,
  tails: 1,
  friends: ["everything!"]
};
var myDog = {
  name: "quincy",
  legs: 3,
  tails: 2,
  friends: []
};

//ACCESSING OBJECTS PROPERTIES WITH DOT NOTATION
//find values of objects
var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

//Names with space use bracket !!
var entreeValue = testObj["an entree"]; //change this line
var drinkValue = testObj["the drink"]; //change this line

//ACCESSING OBJECT PROPERTIES WITH VARIABLES
var testObj = {
  12: "namath",
  13: "montana",
  19: "uniteas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; //using variable to lookup the property

// UPDATING OBEJCT PROPERTIES //#endregion
var ourCat = {
  name: "camper",
  legs: 4,
  tails: 1,
  friends: ["alle"]
};

ourCat.name = "happy camper";

var myCat = {
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp campers"]
};
//update here
myCat.name = "happy catter";

// ADD NEW PROPERTIES TO AN OBJECT
var ourDog = {
  name: "ole",
  legs: 4,
  tails: 1,
  friends: ["everything"]
};
//this is a new property
ourDog.bark = "vof-voff";

var myDog = {
  name: "kai",
  legs: 3,
  tails: 2,
  friends: ["ahhaa"]
};
//add properties to objects[]
myDog["bark"] = "woof!";

//DELETE PROPERTIES FROM AN OBJECTS
var ourDog = {
  name: "ole",
  legs: 4,
  tails: 1,
  friends: ["everything"],
  bark: "bow wow"
};
//delete property
delete ourDog.bark;

//USING OBJECTS FOR LOOKUPS
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "a",
    bravo: "b",
    charlie: "c",
    delta: "d",
    echo: "e",
    foxtrot: "f"
  };
  result = lookup[val];

  return result;
  /*erstattes av var lookup
  switch (val) {
    case "alpha":
      result = "a";
      break;
    case "bravo":
      result = "b";
      break;
    case "charlie":
      result = "c";
      break;
    case "delta":
      result = "d";
      break;
    case "foxtrot":
      result = "f";
      break;
  }
  return result;
  */
}
console.log(phoneticLookup("c"));

//TESTING OBEJCTS FOR PROPERTIES
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "not found";
  }
}

console.log(checkObj("hello"));

//MANIPULATING COMPLEX OBJECTS
//inside array, objects. inside obekcts, er keyvaluepairs
var myMusic = [
  {
    artist: "Billy Idol",
    title: "piano man",
    release_year: 1973,
    formats: ["cd", "LP"],
    gold: true
  },
  {
    artist: "Elton John",
    title: "piano man",
    release_year: 1987,
    formats: ["cd", "spotify"]
  }
];

//ACCESSING NESTED OBJECTS
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    outside: {
      trunk: "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);

//ACCESSING NESTED ARRAYS
var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

//RECORD COLLECTION
var collection = {
  "2548": {
    album: "slippery when met",
    artist: "bon jovi",
    tracks: ["let it rock", "you give love a bad name"]
  },
  "2634": {
    album: "blabla when met",
    artist: "bon iver",
    tracks: ["let it stock", "girl give love a good game"]
  },
  "1111": {
    album: "when met"
  },
  "album title": "jallå"
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id[prop]];
  } else if (prop === "tracks") {
    collection[id[prop]] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}

updateRecords(2548, "tracks", "test");
console.log(updateRecords(2548, "artist", "bon jovi"));

//ITERATE WITH WHILE LOOPS
var myArray = [];

var i = 0;
while (i < 5) {
  myArray.push(i);
  i++; //increment i
}

console.log(myArray);

//ITERATE WITH FOR LOOPS
var ourArray = [];
//initial, next thing condition, the final thing(iteration)
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);

//ITERATE ODD NUMBERS WITH A FOR LOOP
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

//odd numbers
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

//COUNT BACKWARDS WITH A FOR LOOP
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

//ITERATE THROUGH AN ARRAY WITH A FOR LOOP
//ITERATE THOUTHPUT THE CONTENT OF AN ARRAY
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var total = 0;
//add opp numbers in array

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

//NESTING FOR LOOPS
function multiplyAll(arr) {
  var product = 1;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      //multiply togheter
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

console.log(product);

// ITERATE WITH DO..WHILE LOOPS //#endregion
var myArray = [];
var i = 10;

//do: run through once before it checks condition
do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

//PROFILE LOOKUP //#endregion
//key value pairs
var contacts = [
  {
    firstName: "Are",
    lastName: "Nyhammer",
    numbers: "123",
    likes: ["training", "food"]
  },
  {
    firstName: "jesus",
    lastName: "kristus",
    numbers: 777,
    likes: ["god, peace"]
  }
];

//lookup function
function lookUpProfile(name, prop) {
  //iterate through contacts
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "no such property";
    }
  }
  return "No such name";
}

var data = lookUpProfile("Are", "lastName");
console.log(data);

//Generate Random Fractions
function randomFractions() {
  return Math.random();
}
console.log(randomFractions());

//Generate random whole numbers
//Math.Floor
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//Generate Random Whole NUmbers within a Range
function ourRandomRange(ourMin, ourMax) {
  //calculation to get a random number between min-max
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);

console.log(myRandom);

//Use the parseInt function
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

//Use the parseInt Function with a Radix
function convertToInteger(str) {
  //pass 2 so the computer knows it is a binary number
  return parseInt(str, 2);
}
convertToInteger("10011");
