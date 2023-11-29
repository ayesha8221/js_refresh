// using constructor function of previous exercise 
// create  2 address objects


let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//   function 1 should return true and false if addresses match or dont match

function areEqual(address1, address2) {
    return address1.street === address2.street && 
           address1.city === address2.city &&
           address1.zipCode === address2.zipCode;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
console.log(areSame(address2, address3));