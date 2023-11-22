// Objects

let name = 'Ayesha';
let age = 23;


let person = {
    name: 'Ayesha',
    age: 23
};

console.log(person);

// Lmao not me calling myself an object

// Dot notation
person.name = 'Beulah';

// bracket notation
person['name'] = 'Luke';

console.log(person.name);



// ARRAYS
// a data structure that is used to represent a list of items
let selectedColours = ['red', 'blue'];
selectedColours[2] = 'green';
console.log(selectedColours[0]);



//FUNCTIONS
// set of statements performs a task or calculates a value

function greet(name) {
    console.log('Hello' + name);
}

greet('Miss', 'Galant');

// caluculating a value
function square(number) {
    return number * number;
}

console.log(square(3));


// OPERATORS

// ARITHMETIC
// used to perform calculations

let x = 10;
let y = 3;

// increment (++)
console.log(x++);

// decrement (--)
console.log(x--);


// ASSIGNMENT

let c = 15;

c++ 
// x+1

c = c + 5;
c += 5;

c = c * 3;
c *= 3;

// COMPARISON 
//  use operators to compare values to something else

let a = 1;

// relational

console.log(x > 0);
// true

console.log(x >= 1); 
// true

console.log(x < 1);
// false

console.log(x <= 1);
// true 

// equality 

// check to see if x is equal to 1 
console.log(x === 1);

// check to see if x is not equal to 1
console.log(x !== 1);


// EQUALITY

// strict equality 

// will check for same type + value (===)

console.log(1 === 1);
console.log('1' === 1);
// false

// lose equality same value (==)
// will convert anything on the right to the same value as the left

console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);
// all true


// TERNERY

// 


