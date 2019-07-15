//Exercise for week 2 of Javascript 1
//#1:
'use strict'
english = 'Hello World';
console.log(english);

swedish = 'Hej Världen';
console.log(swedish);

swahili = 'Hujambo';
console.log(swahili);

//#2:
console.log("I\'m awsome!")
// without the slash before the apostrophe we get an error in the console
//we also could use " " instead of ' ' to avoid error

//#3:
let x; 
console.log( "the value of my variable x will be : undefined since it hasn´t been declared.");
console.log(x);
let x = 256;
console.log("the value of x will be 256")
console.log("the valueof x will be " + x);

//#4:
let y = 'It is Sunday today';
console.log("the value of my string will be: 'It is Sunday today' ");
console.log("the value of y is " + y);

let y = 'This is a sign';
console.log("the value of y will change and be: This is a sign"); 
console.log(y)// The value of y will be changed to 'This is a sign' since the new string replaces the old one

//#5:
//we round off numbers by using Math.round for example:
let z = 7.25;
console.log(x);

let a = Math.round(c); //here we declare the variable d and call on the function Math.round and we specify which declared variable is to be rounded off
console.log(d); // the answer will be 7

//#6:
let trees =[];
console.log("since we havent added any elements into the array, the value of 'trees' will be empty");
console.log(trees);

let myFavAnimals = ['cats', 'tigers', 'squirrels', 'dogs'];
console.log('Animals that I love are: ' + myFavAnimals + '.');

myFavAnimals.push('baby pigs'); // adds a string to the existing array
console.log('My favourite animals together with Daan\'s are :' + myFavAnimals +'.');

//#7:
let myString = "this is a test";
console.log(myString);
let findLength = myString.length; //This gives the length of the string in the variable myString

console.log(findLength);

//#8:

let randBool = 'false';
console.log('The types of variable I am declaring is a Boolean')
console.log('The value of my variable is ' + randBool);

let randString = 'Winter is coming';
console.log('The types of variable I am declaring is String')
console.log('The value of my variable is ' + randString);

let randNum = 157;
console.log('The types of variable I am declaring is Numbers')
console.log('The value of my variable is ' + randNum);

let randArray = ['chairs', 'tables', 'pots', 'pans'];
console.log('The types of variables I am declaring is an Array')
console.log('The value of my variable will be' + randArray);


console.log( typeof randBool);
console.log(typeof randString);
console.log(typeof randArray);
console.log(typeof randNum);

if (typeof randBool === randNum){
    console.log('SAME TYPES')
} else {
    console.log('DIFFERENT TYPES')
};

if (typeof randBool === typeof randBool){
    console.log('SAME TYPE')
} else {
    console.log('DIFFERENT TYPES')
};

if (typeof randBool === typeof randString){
    console.log('SAME TYPE')
} else {
    console.log('DIFFERENT TYPES')
};
if (typeof randBool === typeof randArray){
    console.log('SAME TYPES')
} else {
    console.log('DIFFERENT TYPES')
};

//#9:
let x = 7;
x = x % 3;
console.log('The answer we will get will be 1 since it is the remainder we get when 7 is divided by 3');
console.log('The value of x is ' + x + '.');

//#10:1
//Yes we can be able to store multiple types in an array. For example:
let testArray = [['hounds', 'bats', 'vampires', 'chupacabras', 17], 29, 4, 'This is Halloween', true];
console.log(testArray);

//#10:2
//How to compare infinities'
let inf1 = 6 / 0;
let inf2 = 10 / 0;

if (inf1 === inf2){
    console.log('These infinities give the same answers')
} else {
    console.log('These infinities are not the same at all')
};