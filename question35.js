//35) Write a function that takes an array of numbers and returns their sum.

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));