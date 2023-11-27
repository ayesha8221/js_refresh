
// write a function callled show numbers that takes in a parameter called (limit)
// any number that is input, the console should display every number until the (limit)
// and display whether even or odd



showNumbers();

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0)
        console.log(i, 'Even')
    else {
        console.log(i, 'Odd')
    }
} 

}

// Success! youre so smart bestie
// forgot to add numbers next to words