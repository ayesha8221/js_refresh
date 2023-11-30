const numbers = [3,  4];

//  adding elements to the END

numbers.push(5, 6);


// adding elements to the beginning
numbers.unshift(1, 2);


// with this method parameters allow you are able to go to existing elements and add, delete 
numbers.splice(2, 0, 'a', 'b') // starting index is 2, delete 0, and add 'a' and 'b' starting at index 2

console.log(numbers.splice(2, 0, 'a', 'b'));
// 1, 2, 'a', 'b', 3, 4, 5, 6

// FINDING ELEMETNS

// Depends if youre storing primitive or reference types in an array

const numbers = [1, 2, 3, 1, 4];

// indexOf returns the index of this element or -1 if it doesnt exist
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf('1'));
//  -1
// -1 no strings

console.log(numbers.lastIndexOf('1'));
// returns 3 because at position 3 is the last index of 1

// returns true if element exists in the array
console.log(numbers.includes(1));
// true



// 