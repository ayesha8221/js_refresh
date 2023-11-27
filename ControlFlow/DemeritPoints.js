// EXERCISE

// SPEED LIMIT =70 
// for every 5 km above speed limit = 1 point eg.75 = 1 point, 80 = 2 points
// Math.floor(1.3) built-in function converts floating points to the nearest integer
// 12 points = suspended

checkSpeed();

// function checkSpeed(speed) {

// define constants to make code easier to read later
// const speedLimit = 75;
// const kmPerPoint = 5;

//     if (speed < speedLimit + kmPerPoint)
//     return 'OK';
//     else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12)
//         console.log('Licence suspended');
//         else 
//         console.log('Points', points);
//     }
// }

// TO MAKE CODE CLEANER
// add return and remove else block

function checkSpeed(speed) {

// define constants to make code easier to read later
const speedLimit = 75;
const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('OK');
     return;
    }
   
        const points = Math.floor((speed - speedLimit) / kmPerPoint);

        if (points >= 12)
        console.log('Licence suspended');
        else 
        console.log('Points', points);
}
