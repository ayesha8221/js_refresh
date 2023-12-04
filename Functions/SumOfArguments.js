// function
// takes a number of arguments and returns their sum


// function sum() {
//     let total = numbers.reduce((a, b) => a + b)
//     return total;
// }

// console.log(sum);

// rest operator will create the array
function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
    items = [...items[0]];

    return items.reduce((a, b) => a + b);
}