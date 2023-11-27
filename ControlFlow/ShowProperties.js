// function called showProperties
// should display all proprtoes of an object that are 'string'.

const movie = {
    title: 'The Sisterhood of the travelling pants',
    year: 2005,
    rating: '5 stars'
}

showProperties(movie);

function showProperties(movie) {
    for (let key in movie) 
        if (typeof movie[key] === 'string') {
          console.log(movie, key)  
        }
        
    
}