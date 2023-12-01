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


// EMPTYING AN ARRAY

 let numbers = [1, 2, 3, 4];
 let another = numbers;

//  Solution 1
numbers = [];

// Solution 2
numbers.length = 0;

console.log(numbers);
console.log(another);


// COMBINING OR SLICING AN ARRAY 

const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
// 1,2,3,4,5,6
const slice = combined.slice(2, 4);
// 3, 4

console.log(combined);
console.log(slice);


// SPREAD OPERATOR

// when you all the elements of the first array followed by the second array

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];
// 1,2,3,4,5,6

// create new array called copy to copy elements to a whole new array
// returns elements of combinned array
const copy = [...combined]

console.log(combined);
console.log(slice);


// ITERATING AN ARRAY

// for
// forEach
// Fat arrow / arrow function

const numbers = [1, 2, 3];

for(let number in numbers) {
    console.log(number);
}
// 1
// 2
// 3

numbers.forEach(function(number) {
    console.log(number);
})
// 1
// 2
// 3

// arrow function
// remove function
// can have more parameters
numbers.forEach((number, index) => console.log(index, number));
// 0 1
// 1 2
// 2 3


// JOINING ARRAYS

// this is used to make urls

const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message'; 
const parts = message.split('');
console.log(parts);

const combined = parts.join('-');
console.log(combined);


// SORTING ARRAYS

const numbers = [1, 2, 3]

numbers.reverse();
console.log(numbers);  

const courses = [
    {
        id: 1,
        name: 'Nodejs'
    },
    {
        id: 2,
        name: 'javascript'
    }
];

courses.sort(function(a, b) {

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;

})

console.log(courses);


// TESTING ELEMENTS OF ARRAY

// every() checks to see if every object matches the criteria 
// some() checks if some objects match the criteria

const numbers = [1, -1, 2, 3];

// checking to see if all positive
const atLeastOnePositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// FILTERING AN ARRAY

// return posiive numbers
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value) {
//      return value >=0;
//     });

const filtered = numbers.filter(n => n >= 0);

    // able to use an arrow function because its one line of code just returning a number make it look cleaner
    console.log(filtered);