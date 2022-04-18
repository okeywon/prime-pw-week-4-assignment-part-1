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
    return "True";
  } else {
    return "False";
  }
}

// Call the function to test each outcome (true & false)
console.log(isPositive(10));

// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3));
console.log(isPositive(3));
console.log( 'isPositive - should say false', isPositive(0));
console.log(isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3));
console.log(isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let array1 = ["this", "that", "the other"];
let array2 = [];
array="";
function getLast(array) {
  return array[array.length - 1];
}

console.log(getLast(array1));
console.log(getLast(array2));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let myArray = [1, 2, 3, 4, 5];
let searchValue = 1;
let newValue = 6;
let length = myArray.length;
function find(value, array) {
  for (let i = 0; i < length; i++) {
    if (value === array) {
      return "True!"
    } else {
      return "False."
    } 
  }
}

console.log(find(searchValue, myArray));
console.log(find(newValue, myArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
let string = "apple";
let letter = "a";
let newLetter = "z";
function isFirstLetter(letter, string) {
  if (string.startsWith(letter)) {
    return "True!";
  } else {
    return "False."
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log(isFirstLetter(letter, string));
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log(isFirstLetter(newLetter, string));
// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
    return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let numArray = [-3, 7, 0, -2, 5]

function positives() {
  let total = 0;
  let i = 0;
  for (let x in numArray) {
    if (x > 0) {
      i++;
      {
        return total += x;
      }
    }
  }
}

console.log(positives(numArray));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
