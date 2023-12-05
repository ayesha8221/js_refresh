// create circle object
// using object literal syntax
// object should have a radius property 
// should have a write to radius property
// and an area read only property

// circle.radius = 2;
// console.log(circle.area)

const circle = {
    radius: 1
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area);