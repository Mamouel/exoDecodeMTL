
// Cours 1 : Basics 

// OBJECTS
var objectOne = {}; // empty object

var someObject = {
    word: "hi",   // property of object with key word and value  hi
    year: 1923,
    nestedObj: {}
};

var w {
    aa: 1234,
    bbb: "test"
};

w.x = "hi";

/*
w = {
    aa: 1234,
    bbb: "test",
    x: "hi"
};
*/

// this code :

var w = {
    x: "test",
    y: 1234,
    z: "potato",
    w: {}
};

//is same as :

var w = new Object();
w.x = "test";
w.y = 1234;
w.z = "potato";
w.w = new Object();

// Some objects are called functions
// a function is an object that is callable

//FUNCTIONS

var sayHi = function(name) {
    var a = "Hello " + name;
    return a;
};

sayHi("world");  // returns : "Hello world"

// In JS, it is OK to invoke a function with a mismatched (= incompatible) number of arguments.
// At run time, any arguments that wasn't passed a value is filled with the "undefined" value, just like a local variable without any assignement.

var f = function(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
};

f("rat", "potato");   // returns: "rat" "potato" undefined

// A function does not necessarily need to return a value explicitly.
// When that is the case, it  returns "undefined"

var f = function() {
    return "f";
};

var q = function() {
    // no return statement
};

f(); // returns "f"
q(); // returns undefined


//ARRAYS

var myArray [];  //empty array

var anotherArr = [
    "hello",
    42,
    "junior chicken",
    [],
    {},
    false,
    Infinity
];                      // array with 7 elements

anotherArr[0];   // "hello"
anotherArr[5];   // false

// Initializing an array


//this code
var w = [
    "test",
    1234,
    {},
    [],
    "hi"
];

w[4];  // "hi"

// is same as :
var w = new Array(5);
w[0] = "test";
w[1] = 1234;
w[2] = new Object();
w[3] = new Array();
w[4] = "hi";

w[4];  // "hi"

// Some of things you can do with array :

var arr = ["test", 1234, {}, [], "hi"];

arr.push("sixth");  // appends value to end of array
arr.length;         // 6
arr[5];             // "sixth"
arr.pop();          // removes value from end of array ("sixth" ici)


// LOGICAL STATEMENTS

"cat" === "dog"    //false
2 === 3-1          //true

4 !== 2+2          //false
"dog" !== "cat"    //true

4 > 3              //true
9 > 10             //false

1 <= 10-9          //true
5 >= 2+3           //true

true               //true
false              //false



// CONDITIONALS

var x = "cat";
var y = "dog";
var w;

if (x !== y) {
    console.log("not the same");
} else {
    console.log("x and y are equal");
};

if (4 > 5-3+2) {
    console.log("true");
} else if (w) {
    console.log("We have a value in w");
} else {
    console.log("Nothing was true");
};


// LOOPS

//for

for (var i = 0; i < 10; i++) {
    console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9 

var myArray = ["car", "city", "cone", "bar"];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// "car" "city" "cone" "bar"

var myArray = [
    "car",
    "city",
    "cone",
    "bar"
];


//while

var i = 0;
while (i < myArray.length) {
    console.log(myArray[i]);
    i += 1;
}
// "car" "city" "cone" "bar"





























































