/*
Task 1:
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']


*/



// using 'for of' looping method for reverse an array
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const revColors = [];
for(let color of colors) {
    revColors.unshift(color);
}
// console.log(revColors);

// using 'for' looping method for reverse an array
const reverseColors = [];
for(let i = 0; i < colors.length; i++) {
    const color = colors[i];
    reverseColors.unshift(color);
}
console.log(reverseColors);