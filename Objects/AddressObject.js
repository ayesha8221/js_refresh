//  create  address object
// street
// city
// zip code
// create function called showAddress that displays all the properties of this object and their value

const address = {
    street: 'Calvalry Street',
    city: 'Cape Town',
    zipCode: '7764',
}

function showAddress(address) {
    for (let key in address)
    console.log(key, address[key])
}

showAddress(address);