

showStars();

function showStars(rows) {

    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        // nested loop (loop inside a loop)
        for (let i = 0; i < row; i++) 
        pattern += '*';
    console.log(pattern);
    }
}