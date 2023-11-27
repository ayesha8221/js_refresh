// create function called countTruthy which takes an array and returns a number of truthy elements in this array
// Falsy values - undefined, null, '' , false, 0, NaN
// the javascript engine interprets value either truthy or falsy

const array = [];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let value of array) {
        if (value)
        count++;
    return count;
    }
}