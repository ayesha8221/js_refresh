const mvies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 2.7},
    { title: 'c', year: 2018, rating: 3.5},
    { title: 'd', year: 2017, rating: 4.7}
]

// All movies in 2018 with rating > 4
// sort by rating
// descending order
// title

const titles = movies
.filter(m => m.year === 2018 && m.rating >= 4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m => m.title)

console.log(titles);