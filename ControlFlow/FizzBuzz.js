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
};