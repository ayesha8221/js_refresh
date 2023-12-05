//  if this first argument is not an array
// throw an exception
// wrap the two lines with try catch block


const numbers = [1, 2, 3, 4];

const count = countOccurrences(null, 1);
console.log(count);

function countOccurances(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Invalid array')

    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrance;
    }, 0);
}