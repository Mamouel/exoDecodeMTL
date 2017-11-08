//DecodeMTL : Objects


var me = {
    name: "Manu",
    age: 26,
    colour: "green",
    lifeGoal: "become dev"
};

function Person(name, age, colour, lifeGoal) {
    this.name = name;
    this.age = age;
    this.colour = colour;
    this.lifeGoal = lifeGoal;
    this.introductions = function() {
        console.log("My name is " + this.name + " and I'm " + this.age + ".")
    }
}

var patricia = new Person("Patricia", 32, "purple", "Swim with aliens");
var george = new Person("George", 76, "maroon", "Was to sky dive");
var molly = new Person("Molly", 4, "blue", "Drive a car");

console.log(patricia);
console.log(george);
console.log(molly);
george.introductions()


// Write a function that returns a list of the properties (keys) of a given object
function getKeys(obj) {
    return Object.keys(obj)
}

console.log(
    getKeys(patricia)
);


// Write a function that returns a list of the values of a given object


function getValues(obj) {
    var arr = Object.keys(obj);
    for (var i = 0; i < keys.arr; i++) {
        arr[i] = obj[arr[i]]
    }
    return arr;
}

console.log(getValues(me));


// Write a function which returns the number of properties of an object

function objLength(obj) {
    return Object.keys(obj).length;
}


// Write a function which returns a copy of an object where the values and keys have swapped places


function swapKeysAndValues(obj) {
    var result = {};
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
        result[obj[keys[i]]] = keys[i];
    }
    return result;
}

console.log(
    swapKeysAndValues(george);
);



// Write a function to check wether an object contains a given property

function hasProperty(obj, propName) {
    return obj[propName] !== undefined
}
    
console.log(
    hasProperty(patricia, "lifeGoal");
);

    
    
// Write a function which sorts an array of objects by their "age" property



var arrOfObjects = [
    me,
    patricia,
    george,
    molly,
    new Person("Sam", 17, "green", "Not sure");
    new Person("Violet", 44, "pink", "To play a Stradivarius");
];

    
function sortByAge (arr) {
    return arr.sort(function(a, b) {
        return a.age - b.age;   
    });
}
    
console.log(
    sortByAge(arrOfObjects);
);  
    
    
    
// Create a constructor that creates a circle objects which contains two methods
// One for getting itsarea, and one for getting its perimeter
    
    
function Circle(radius) {
    this.radius = radius;
    this.circumference = function() {
        return (2 * Math.PI() * this.radius).toFixed(2);
    };
    this.area = function() {
        return (Math.PI() * this.radius * this.radius).toFixed(2);
    }
}   
    
var circle1 = new Circle(5);
var circle2 = new Circle(3);
var circle3 = new Circle(11);


cnsole.log(
    circle1.circumference(),
    circle1.area()
)


    



// HOMEWORK



var nestedObj = {
    species: 'dog',
    stats: {
        height: 4,
        weight: 32,
    }
}
// flattenObject(nestedObj) returns => { species: 'dog', height: 4, weight: 32 }

var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

console.log(flattenObject(nestedObj));


































    
    
    
    
    
    
    
    
    