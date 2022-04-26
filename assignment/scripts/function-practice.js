console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log(hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return ("Hello, " + name);
}

// Remember to call the function to test
console.log(helloName("Courtney"));

// 3. Function to add two numbers together & return the result
function addNumbers(a, b) {
  // return firstNumber + secondNumber;
  return (a + b);
}

console.log(addNumbers(1,2));

// 4. Function to multiply three numbers & return the result
let x = multiplyThree(1, 2, 3);
function multiplyThree(a, b, c){
  return (a * b * c);
}

console.log(x);

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0 ){
    return true;
  } else {
    return false;
  }
}

// Call the function to test each outcome (true & false)
console.log("5 Checking my positive - True:", isPositive(10));
console.log("5 Checking my negative - False:", isPositive(-1));

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3));
console.log( 'isPositive - should say false', isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let array1 = ["this", "that", "the other"];
let array2 = [];

function getLast(array) {
  return array[array.length - 1];
}
console.log("Return the last item in the list -> should say: 'the other.'", getLast(array1));
console.log("Return if the list is empty -> should say: 'undefined.'", getLast(array2));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

console.log("_____________________________Edan! I have many questions here! If you have time let me know.___________________________")

let myArray = [1, 2, 3, 4, 5];
let searchValue = 1;
let newValue = 6; 

function find(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true;
    } else {
      return false;
    } 
  } 
}

console.log("7 - Find the value of an array.")
console.log("Should be true:", find(myArray, searchValue));
console.log("Should be false:", find(myArray, newValue));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  if (string.startsWith(letter)) {
    return true;
  } else {
    return false;
  }
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let theArray = [1, 2, 3, 4, 5];

function sumAll() {
  let sum = 0
  // TODO: loop to add items
  for (let num of theArray) {
    sum += num;
  }
    return sum;
}
console.log("Is this the answer you're looking for?", (sumAll()));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let numArray = [-3, 7, 0, -2, 5];
let emptyArr = [];

function positives(array) {
  let total = 0;
  for (let x = 0; x < numArray.length; x++) {
    if(array[x] > 0) total += array[x]
  }
    return total;
}
console.log("Adding positives only please:", positives(numArray));
console.log("Empty array:", positives(emptyArr));
// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Write a function that takes an integer 'minutes' and converts it to seconds.

function toSeconds(minutes) {
  let seconds = 60;
  return minutes *= seconds;
}

console.log("These are the moments:", toSeconds(2));
console.log("These are the moments:", toSeconds(3));
console.log("These are the moments:", toSeconds(5));

console.log("_____________________________START HERE!!!!__________________________________");

// function to determine how many minutes in a set number of hours
function toMinutes( hours ) {
    return hours * 60;
}

console.log("Calling toMinutes function, should say 600", toMinutes(10));

// function that takes hours and multiplies by 60 minutes.

// function to determine the 3rd side of a triangle === side 1 * side2 / 2

function sideThree(a, b){
  console.log( (a * b) / 2 );
}

console.log(sideThree(10, 10));



console.log('----------------------START HERE-----------------------');

let firstName = "Courtney";
let lastName = "Azar";
let favFood = "Pizza";

function myIntro (a, b, c) {
  console.log( "Hello, my name is:", (a + " " + b), "and I like", c, ".");
}

console.log(myIntro(firstName, lastName, favFood));