/*
Question
    The previous chapter introduced the standard function Math.min that returns
    its smallest argument. We can build something like that now. Write a function
    min that takes two arguments and returns their minimum.
*/

const minimum = (a, b) => {
    return a < b ? a : b;
}

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
console.log(minimum(a, b))