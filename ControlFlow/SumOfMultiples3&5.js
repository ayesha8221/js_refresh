// function called sum
// give it a limit
// return the sum of all the multiples of 3 and 5 from 0 up to the limit

console.log(sum());

function sum(limit) {
    
    let sum = 0;

    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
        // console.log(i);
        sum += i;

        return sum;
    }
}