// If...else statements

// Hour
// If hour is between 6am and 12pm: GooD Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 10; 

if ( hour >= 6 && hour < 12 ) {
    console.log('Good Morning');
} else if ( hour >= 12 && hour < 18 ) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

// Switch case not really used, outdated. Use if else

 let role;

 switch (role) {
    case 'guest' :
        console.log('Guest User');
        break;

    case 'moderator' :
        console.log('Moderator User');
        break;

    default :
    console.log('Unknown User');
 }

 if (role === 'guest' && hour > 12) console.log( )



//  LOOPS

// repeat an action a number of times

// For loop
// need 3 statements
// i - index


for ( let i = 0; i < 5; i++) {
    console.log ('Hello World!');
}

// Will run 5 times

// to run only odd numbers
for (let i = 1; i <=5; i++) {
     if (i % 2 !== 0) console.log (i);
}

// displays 1, 3, 5


// WHILE

// while loop condition is met, the code block will be executed

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log (i);
    i++;
}


// DO WHILE

// 

let i = 0;

do {
    if (i % 2 !== 0) console.log (i);
    i++;
} while (i <= 5);



// INFINITE LOOPS
//  will crash your browser






// FOR IN

const person = {
    name: 'Ayesha',
    age: 23 
}

for (let key in person)
  console.log(key, person[key]);

//   will give name and the name and age and the age

  const colours = ['red', 'blue', 'green'];

  for (let index in colours)
  console.log(index, colours[index]);
// gives colours and index


// FOR OF
// used to iterate over items in an array

for (let colour of colours)
 console.log(colour);



//  BREAK AND CONTINUE

let i = 0;
while (i )

//

// EXERCISE

// if statement??
// if number a is larger than number b 
// return number a
// if number b is larger than number a 
// return number b

let r = 4;
let s = 7;

if (r > s) {
    console.log(r)
} else if (r < s) {
    console.log(s)
} else {
    console.log('not working')
}

// EXERCISE
// return true if landscape
// retuen false if portrait



function isLandscape( width, height) {
    if (width > height) {
        return ('true')
    } else {
        return('false')
    }   
};

// function divisible by 3 => Fizz
// Divisible by 5 => Buzz
//  Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// not a number = 'Not a number'

// const output = fizzbuzz(7);
// console.log(output);

// function fizzbuzz(input) {
//     if ( input % 3 ) {
//         console.log('Fizz')
//     } else if ( input % 5) {
//         console.log('Buzz')
//     } else if ( input % 3 && 5) {
//         console.log('FizzBuzz')
//     } else if (input % 3 || 5 !== 0){
//         console.log(input)
//     } else {
//         console.log('Not a number')
//     }
// }


const output = fizzbuzz(7);
console.log(output);

function fizzbuzz(input) {
    // first do typeof operator to display 'not a number'
    if ( typeof input !== 'number')
        return 'Not a number';
    // moved up because will not be evaluated because under divisible by 3 or 5
    if ((input % 3 === 0 ) && ( input % 5 === 0))
        return 'FizzBuzz';

     if (input % 3 === 0) 
        return 'Fizz';

    if ( input % 5 === 0) 
        return 'Buzz';
    
        return input;
}

// EXERCISE
// SPEED LIMIT =70 
// for every 5 km above speed limit = 1 point
// Math.floor(1.3)
// 12 points = suspended

checkSpeed();

function checkSpeed(speed) {

// define constants to make code easier to read
const speedLimit = 70;

    if (speed <= speedLimit)
    return 'OK';

    if (Math.floor(1.3)  )
}
