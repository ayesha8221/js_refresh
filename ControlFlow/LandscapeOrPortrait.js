// EXERCISE
// return true if landscape
// retuen false if portrait

console.log(isLandscape(800, 600))

function isLandscape( width, height) {
    if (width > height) {
        return ('true')
    } else {
        return('false')
    }   
};