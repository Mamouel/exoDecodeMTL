// Strings


// Is string blank?

function isBlank(str) {
    return str === "";
}
console.log(isBlank(""));  //return true


// Convert a sentence into an array of words

function toWordArray(str) {
    return str.split("");
}
console.log(toWordArray("house"));  // returns ["h", "o", "u", "s", "e"]


// Convert array of words into a sentence


function toSentence(arrOfWords) {
    var sentence = arrOfWords.join(" ");
    var letters = sentence.split("");
    letters[0] = letters[0].toUpperCase;
    letters.push(".");
    sentence = letters.join("");
    return sentence;
}

console.log(toSentence(["every", "day", "is", "a", "holiday"]));   // returns Every day is a holiday.


// Strip a string of leading and trailing spaces

// ex : "    Hamlet   " => "Hamlet"


function trim(str) {
    if(str[0] === " ") {
        str = str.slice(1);
        return trim(str);
    }
    if (str[str.length-1] === " ") {
        str = str.slice(0, -1);
        return trim(str);
    }
    return str;
}
console.log(trim("    Hamlet    "));



// Convert string to kebab case
// My house is beautiful => my-house-is-beautiful

function toKebab(str) {
    var lowerCaseStr = str.toLowerCase();
    var arrOfWords = lowerCaseStr.split(" ");
    var kebabStr = arrOfWords.join("-");
    return kebabStr;
}

consoloe.log(toKebab("Coding is fun"));


// OU

function toKebab(str) {
    return str.toLowerCase().split(" ").join("-");
}


// Converta string to camel case
function toCamel(str) {
    var lowerCaseStr = str.toLowerCase();
    var arrOfWords = lowerCaseStr.split(" ");
    for (var i = 0; i < arrOfWords.length; i++) {
        arrOfWords[i] = arrOfWords[i][0].charAt(0).toUpperCase + arrOfWords[i].slice(1);
    }
    return arrOfWords.join("");
}

console.log(toCamel("coding is fun"));


// Humanize any number
function humanizeFormat(num) {
    num = num.toString();
    var lastDigit = num[num.length-1];
    if(lastDigit === "1") {
        return num + "st";
    }
    else if(lastDigit === "2") {
        return num + "nd";
    }
    else if(lastDigit === "3") {
        return num + "rd";
    }
     else {
        return num + "th";
    }
}

console.log(humanizeFormat(21));



// Check to see if string is a palindrome

function isPalindrome(str) {
    var cleanStr = str.replace(/[^a-z]/ig, "").toLowerCase();
    var invertedStr = cleanStr.split("").reverse().join("");
    return cleanStr === invertedStr;
} 

console.log(isPalindrome("kayak"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("wonderful world"));



function invertWord(word) {
    var invertedWord = "";
    for (var i = 0; i < word.length; i++) {
        invertedWord = word[i] + invertedWord;
    }
    return invertedWord;
}

var invertedWord = invertWord(word);

if (invertedWord === word) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pasun palindrome");
}


// Write a JS function to hide email addresses to protect from unauthorized user.
// Ex : george_tht_magician@hotmail.com => georg...@homail.com

function protectEmail(emailStr) {
    var splitEmail = emailStr.split("@");
    var user = splitEmail[0];
    var domain = splitEmail[1];
    user = user.slice(0, 5) + "...";
    return user + "@" + domain;
}

console.log(protectEmail(george_the_magician@hotmail.com));

// HOMEWORK

// repeat function(num, str)  => str*num
//huh,3 => huhhuhhuh

function repeat(num, str) {
    return str.repeat(num);
}
console.log(repeat(3, "huh"));


//Swapcase ====> AbAcH => aBaCh

function swapCase(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            newStr += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        }
    } return newStr;
}
 console.log(swapCase("AbAcH"));


//FindOccurencencies
// function(str, longerStr) => str inside longerStr
//

var longerStr = "The moon is the darkest place the world knows"
var longerStr2 = "The moon is the darkest place"



function findOccurencencies(str, longerStr) {
   var substrings = longerStr.toLowerCase().split(str);
   return substrings.length - 1;
}

console.log(findOccurencencies("the", longerStr));
console.log(findOccurencencies("the", longerStr2));





