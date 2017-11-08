var firstName = "Scooby";

var lastName = "Doo";

console.log("Where are you " + firstName + " " + lastName + "?");


var greeting = {};

greeting.firstName = firstName;
greeting.lastName = lastName;

greeting;

greeting.greet = function greet(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("Where are you " + firstName + " " + lastName + "?");
};

console.log(greeting.greet(firstName, lastName));


var names = [];

names[0] = "Asterix";
names[1] = "Lucky Luke";
names[2] = "Tintin";


greeting.names = names;


greeting.greetAll = function greetAll(arr) {
    for (var i = 0; i < names.length; i++) {
        console.log("Hello " + arr[i]);
    }
};

console.log(greeting.greetAll(names));


function biggestNumber (a, b) {
    if (a > b) {
        return a;
    } else return b;
};


console.log(biggestNumber(12,5));


function display(a, b) {
    if (a < b || a === 0) {
        return "Hello Mars";
    }
}

console.log(display(12,5));




function factorial (n){
  if (n===0 || n===1){
    return 1;
  }
  return factorial(n-1)*n;
} 

var array = ["queen", "referee", "cat", "beyonce"];

function firstAndLast(arr) {
  var result = {};
  var keys = arr[0];
  var values = arr[-1];
  result = result.push(keys + values);
  return result;
}

console.log(firstAndLast(array));


 function capitalize(str){

  var strArr = str.split(" ");
  var newArr = [];

  for(var i = 0 ; i < strArr.length ; i++ ){

    var FirstLetter = strArr[i].charAt(0).toUpperCase();
    var restOfWord = strArr[i].slice(1);

    newArr[i] = FirstLetter + restOfWord;

  }

  return newArr.join(' ');

}




