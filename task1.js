const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
const reverse_color = [];
for(let i = 0; i <= colors.length - 1; i++){
    const color = colors[i];
    // console.log(color);
    reverse_color.unshift(color);

}
    console.log(reverse_color);


// using For of
const rev_colors = [];
for(let colr of colors){
    rev_colors.unshift(colr)
}
console.log(rev_colors);

// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']

