// If...else statements

// Hour
// If hour is between 6am and 12pm: GooD Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good Evening!

let hour = 10; 

if ( hour >= 6 && hour < 12 ) {
    console.log('Good Morning');
} else if ( hour >= 12 && hour < 18 ) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

// Switch case not really used, outdated. Use if else

 let role;

 switch (role) {
    case 'guest' :
        console.log('Guest User');
        break;

    case 'moderator' :
        console.log('Moderator User');
        break;

    default :
    console.log('Unknown User');
 }

 if (role === 'guest' && hour > 12) console.log( )



//  LOOPS

// repeat an action a number of times

// For loop
// need 3 statements
// i - index


for ( let i = 0; i < 5; i++) {
    console.log ('Hello World!');
}

// Will run 5 times

// to run only odd numbers
for (let i = 1; i <=5; i++) {
     if (i % 2 !== 0) console.log (i);
}

// displays 1, 3, 5


// WHILE

// while loop condition is met, the code block will be executed

let i = 0;
while (i <= 5) {
    if (i % 2 !== 0) console.log (i);
    i++;
}


// DO WHILE

// 

let i = 0;

do {
    if (i % 2 !== 0) console.log (i);
    i++;
} while (i <= 5);



// INFINITE LOOPS
//  will crash your browser






// FOR IN

const person = {
    name: 'Ayesha',
    age: 23 
}

for (let key in person)
  console.log(key, person[key]);

//   will give name and the name and age and the age

  const colours = ['red', 'blue', 'green'];

  for (let index in colours)
  console.log(index, colours[index]);
// gives colours and index


// FOR OF
// used to iterate over items in an array

for (let colour of colours)
 console.log(colour);



//  BREAK AND CONTINUE

let i = 0;
while (i )

