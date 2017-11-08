// Cours Array


// Given some array, clone it

var arr1 = ["cat", null, 33, "hi", 91, "dog"];

function cloneArray(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr2 = cloneArray(arr1);
arr[1] = Infinity;
console.log(
    "#1 : ",
    arr1, arr2
);


// Return the last n number of elements from an array

console.log(arr1.slice(0, 4)); //garde les 4 premiers éléments (de 0 à 3)

console.log(arr1.slice(0, 3)); //garde les 3 premiers éléments (de 0 à 2)

console.log(arr1.slice(2)); //garde tous les éléments sauf les deux premiers (le 2 définit où commence le slice donc on passe les éléments 0 et 1)


console.log(arr1.slice(-2)); //garde tous les éléments sauf les deux derniers (le - signifie qu'on commence à partir de la fin du tableau)

function lastN(arr, n) {
    return arr.slice(-n);
}

console.log(
    "#2 : ",
    lastN(arr2, 4)
); // returns [33, "hi", 91, "dog"]


// Swap two specified indexes in array

// ex : échanger infinity (position 1) et dog (position 5) dans le tableau arr1

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}

console.log(
    "#3 : ",
    swap(arr1, 1, 5)
);


// Shuffle an array

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) + min);
}

function shuffle(arr) {
    var shuffleTimes = randInt(100, 200);
    for (var i = 0; i < shuffleTimes; i++) {
        var pos1 = randInt(0, arr.length-1);
        var pos2 = randInt(0, arr.length-1);
        arr = swap(arr, pos1, pos2);
    }
    return arr;
}


console.log(
    "#4 : ",
    shuffle(arr1);
);


//Filter an array of its falsy values

var someArr = [1, 0, "Hello", "", false, true, null, -0, "cat", undefined];

function filterFalse(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(Boolean(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(
   "#5 : ",
    filterFalse(someArr)
);


//Generate an array of integers between two specified values (x and y) with step size 1. (x mustbe smaller than y)


function generateArray(x, y) {
    var arr = [];
    for (var i = 0; i <= y-x; i++) {
        arr[i] = x+i;
    }
    return arr;
}

console.log(
    "#6 : ",
    generateArray(22,31)
);




// HOMEWORK

// Return only elements which are common to two arrays


var arrA = ["dog", 4, "hello", "world", 77, null];
var arrB = [1, false, 77, "dog", 4, "world"];

function arrayUnion(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}

console.log(arrayUnion(arrA, arrB));


// Filter out elements of an array of strings which have an odd length

var stringsArr = ["cat", "Infinity", "33333", "hi", "Halloween", "dog"];

function isOdd(str) {
    if(str.length % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

//OU


function isOdd(str) {
  return str.length%2 !== 0
}


function filterOdd(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if(isOdd(arr[i]) === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(filterOdd(stringsArr));

// Flatten an array of nested array
// #3 Complete the function 'flattenArray' which takes an array and flattens any nested arrays so that the resulting array no longer contains any nested arrays. Every element which was previously inside a nested array should be at the top level of this new flattened array. 
// Example: var nestedArray = [2, [4, 3], [5, 1, [9]], 10]
//          flattenArray(nestedArray) returns => [2, 4, 3, 5, 1, 9, 10]

var arrays = [["a"], ["b", "c"]];
var a = Array.prototype.concat.apply([], arrays);
console.log(a);

//ou

var nestedArray = [2, [4, 3], [5, 1, [9]], 10];


function flattenArray(arr) {
    var result = [].concat.apply([], arr);
    return result;
}

console.log(flattenArray(nestedArray));

//ou le meilleur :


var nestedArray = [2, [4, 3], [5, 1, [9]], 10];


function flattenArray(arr) {
   var newArr = arr.toString().split(",");
   return newArr;
}


console.log(flattenArray(nestedArray));



































