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
