// calculate grade of a student
// caluclate average grade ie. divide by amount of items in array
// check what grade the average responds to


// 1-59: f
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks= [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
const average = calculateAverage(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
for (let mark of marks)
sum += value;
return sum / array.length;
}
