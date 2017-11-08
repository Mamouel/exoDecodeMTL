// Cours 2 : Maths and Numbers

// Find the hypothenuse of a right-triangle

var a = 3;
var b = 4;
var c = Math.sqrt(a*a + b*b);


console.log("hypotenuse : ", c);


// Find the sum of all numbers in this array:

var arr = [4, 5, 12, 31, 44, 99, 23];
var sum = 0;

for (var i = 0, i < arr.length; i++) {
    sum += arr[i];
}

console.log("sum : " + sum);


// Write a function that returns a random integer between a given min and max inclusive


function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/* NB:
Math.floor(3.8) => 3        // arrondi en dessous 
Math.round(3.888) => 4      // arrondi normal
Math.ceil (3.1) => 4        //arrondi au dessus
*/
console.log("random : " + randInt(3, 6));


// Write a function that returns the first common multiple of 2 numbers. ex : (4,10) => 20.

function commonMultiple (x, y) {
    var n = x+y;
    while (!(n%x === 0 && n%y === 0)) { 
          n++;
    }
    return n;
}

console.log("Multiple : " + commonMultiple(4, 10));


// Write a function which return the Nth number in the fibonnacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

function fib(n) {
    var a = 0;
    var b = 1;
    var temp ;
    
    while (n>1) {
        temp = b;
        b += a;
        a += temp;
        n--;
    }
    return b;
}

console.log("fibonnacci : " + fib(6));


// FIZZBUZZ :

function fizzbuzz() {
    for (var i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            console.log("FizzBuzz");
        } else if (i % 3 ===0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}



// Get primes :


var array = [];
var number = Number(prompt("Choisissez un nombre");

function isPrime(num) {
    if (num < 2) {
        return false;
}   for (var i = 2; i < num; i++) {
        if(num%i === 0) {
            return false;
        }
    } 
    return true;
}

for (var i = 0; i <= number; i++) {
    if (isPrime(i)) {
        array.push(i);  
    }
}

console.log(array);













