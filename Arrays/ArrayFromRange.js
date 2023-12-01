// write a function called arrayFromRange
// take 2 parameters min max
// returns numbers from min to max


const numbers = arrayFromRange(10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    // first create an empty array
    const output = [];
    // need a for loop to generate numbers
    for (let i = min; i <= max; i++)
    output.push(i);
return output;
}