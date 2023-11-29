// constructor function to create a blog post
//  build a blogging engine
// the user is drafting a post
// not yet published


// const blogPost= {
//     title: 'Ayeshas Opinions',
//     body: 'blah blah blah',
//     author: 'Ayesha Galant',
//     views: 10000000,
//     comments: [
//         {
//             author: 'Brittany Spears',
//             body: 'so inspiring bsf' 
//         },
//         {
//             author: 'Michelle Obama',
//             body: 'yaaaaaaasss'
//         }
       
//     ],
       
//     isLive: true
// }

// console.log(blogPost);


// this will be directed to the 'this' operators and initialise as new property keys
let post = new Post('Ayeshas Opinions', 'blah blah blah', 'Ayesha Galant')


// views are at 0 because this is a draft
// initialise comments as an empty array
// make isLive false because youre not live bestie

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log(post);