//  Function Declaration
// 
function walk() {
    console.log('walk');
}

// Anonymous(without name)/Named Function Expression

// declare a variable and set it to a function (which are objects)
// setting a variable to a function is similar to setting it to an object
const run = function walk() {
    console.log('run')
};

// move references the same function object in memory
let move = run;

// calling the function
run();
move();


// HOISTING

// the process of moving function declarations to the top of the file
// done autmatically by the js engine

walk();

function walk() {
    console.log('walk');
};

// ARGUMENTS

// arguments object

function sum() {
// to iterate over many arguments
    let total = 0;
    for (let value of arguments)
    total += value;
return total;
}


console.log(sum(1, 2, 3, 4, 5, 10));


// REST OPERATOR

// TO USE IF YOU HAVE A FUNCTION WITH VARYING NUMBER OF PARAMETERS

function sum(discount, ...prices) {
    // when applying a rest operator to a parameter of a function, 
    // we can pass a varying number of arguments
    // rest operator will take all of them and put them in an array
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
    }
    
// in this example we have discount and the ...prices REST OF THE PARAMETERS hence being a called rest operator
    
    console.log(sum(0.1, 20, 30));


// DEFAULT PARAMETERS

// to give parameters a default value, either make it last or eberything after that should have a default value too

function interest(principal, rate = 3.5, year = 5){
    return principal * rate / 100 * year;
}

console.log(interest(10000));



// GETTERS AND SETTERS

// getters => access properties
// setters => change (mutate) them

// with getters and setters
// you can read persons full name
// and then change it from the outside
    
const person = {
    firstName : 'Ayesha',
    lastName : 'Galant',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        // to make spacing
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Buelah Kruger';

console.log(person);
