// write 2 different functions
// factory function
// constructor function


// Factory function
// const address = {
//     street: 'Calvalry Street',
//     city: 'Cape Town',
//     zipCode: '7764',
// }

// function showAddress(address) {
//     return {
//         address,
//     }
// }

let address = createAddress( 'Calvalry Street', 'Cape Town', '7780')

function createAddress(street, city, zipCode) {
    street,
    city,
    zipCode
}



// constructor function
// pascal notation

function Address(street, city, zipCode) {
    this.street = street;    
    this.city = city;    
    this.zipCode = zipCode;    
}

console.log(address);