const output = move(numbers, 0, -1);

console.log(output);

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1) [0];
    output.splice(position, 0, element);
    return output;
}