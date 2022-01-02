/**
 * function keyword
 * console.log function
 */


//function
//-------------------------------------------------------------------------
/**
 * function keyword
 * Arrow Functions
 */
//use function keyword to declare and define functions
function sub(num1, num2) {
    return num1 - num2;
}
console.log("sub(5, 2) = ", sub(5, 2)); //sub(5, 2) =  3

//define function as a regular const
const square = function (x) {
    return x * x;
}
console.log("square(3) = "+square(3));


//use Arrow Function
const subArrow = (num1, num2) => num1 - num2;
console.log("subArrow(5, 2) = ", subArrow(5, 2)); //subArrow(5, 2) =  3