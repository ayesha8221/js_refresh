// obkects are collections of key value pairs
// eg. building apps for different shapes
// this requires multiple variables

let radius = 1;
let x = 1;
let y = 1;

// put everything as one object
// can pass to any function

const circle = {
    radius: 1, // can be undefined, null, boolean etc or another object
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
}

// access using dot notation

circle.draw(); // called a METHOD

//OBJECT ORIENTED PROGRAMMING (OOP)


//  FACTORY FUNCTION
// produces objects
// this function 

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    }
}

// change radius here
const circle1 = createCircle(1);
console.log(circle1);

// eg
const circle2 = createCircle(2);
console.log(circle2);


// to call draw method

circle1.draw()



// CONSTRUCTOR FUNCTION

// CAMEL NOTATION : oneTwoThreeFour
// PASCAL NOTATION : OneTwoThreeFour


const myCircle = createCircle(1);


function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// 'new' operator dows 3 things
// operator creates an empty object 
// them sets 'this' to point to the object
// then returns the object

const circle = new Circle(1);


// DYNAMIC NATURE OF OBJECTS

// ONCE YOU CREATE THEM YOU CAN MODFY OR DELETE THEM

const circle = {
    radius: 1
};

// adding properties 'colour' to the object
circle.colour = 'yellow';

// adding a function to the object
circle.draw = function() {}


// delete properties an function
delete circle.colour;
delete circle.draw;

console.log(circle);


const another = new Circle(1);

 

// ENUMERATING PROPERTIES OF OBJECTS

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
console.log(key, circle[key]);

for (let key of Object.keys(circle))
console.log(key);

for (let entry of Object.entries(circle))
console.log(entry);

if ('color' in circle) console.log('yes');



// CLONING AN OBJECT

const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// const another = {};
// for (let key in circle)
//   another[key] = circle[key];

const another = Object.assign({}, circle);

const another = { ...circle};

console.log(another);