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



//  FINDING PRIMITIVES

// different to finding refernce types

const courses = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
];

const course = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course);
// 0 because index of a is 0


// ARROW FUNCTIONS

//  reads as curses.find points to course.name that equals to a
const course = courses.find(course => course.name === 'a');

console.log(course);


// REMOVE ELEMENTS FROM AN ARRAY

const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop()
console.log(numbers);
console.log(last);
// 1, 2, 3
// 4

// Beginning
const first = numbers.unshift()
console.log(first);
// 2,3

// middle
// first argument start index
// second argument how many elements top delete
numbers.splice(2, 2);
console.log(numbers);
// 1, 2
