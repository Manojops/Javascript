
// Variables ==> it can hold the data and we can use.variables are stored a temporary memory location
//Three types of declare a Variables
//let,var,const
//three keywords to declare variables

/*
        console.log(messages) => display the output or messages into console
 */

//This is Alert Message ,it shows on your html webpage
alert("This is a Exclusive Javascript course");

//This is warning message
console.warn("Warning");

var name1="Manoj";    //var keyword does not support scope and can be redeclare and reassign for same name
let name2="Manoj";    //let is a improvement of var keyword
const pi=3.14;      //const variable cannot be reassign and does not make changes

console.log("Hello "+name1);  //this is string concatenation
console.log(pi);
console.log("How are you "+name2+" ?");

var name1="Ram";    //Here we can redeclare the variable with same name,but no error
console.log("Hello "+name1);

//let name2="Shyam";   //Here we cannot redeclare the variable when we use let keyword
// console.log("How are you "+name2+" ?");  {This line says error ,so i comment it}

name2="Shyam";    //But we can assign the another name for same variable name ,when we only use let keyword
console.log("How are you "+name2+" ?");

//Here we come to the const keyword,i can try to assign the value 4.15 to the pi varibale name
//pi=4.15;    It says hey we cannot assign the value 4.15,because you declare it is a constant variable


//Rules of declare a variable name

/*

    1 . We cannot declare a keywords for varibale name
    2 . variable name does not starts with Numbers
    3 . you declare a variable name meaningful
    4 . variable name is a case sensitive
    5 . Mostly try to declare a variable name camel case
    6 . we do not declare a space between variable names and hyphens

 */

//Let us see Example

let fullName="Mahendra singh Dhoni";  //here i can use camelcase ,meaningful name,dont use keywords

//if your variable name is too large,it is a best method to practice
let account_number_2=89012341223;  //using underscore inplace of space

//boolean value
let isRainy=true;

//To check the type of the variables
console.log(typeof name1);
console.log(typeof fullName);
console.log(typeof account_number_2);
console.log(typeof isRainy);

// In javascript,it is dynamic we cannot declare a data type of variable
// string,numbers,boolean

console.log(typeof 12.345);   //It is also a number data type,it is not a float data type.

//we can print multiple value in same line,for example
const number1=12;
const number2=24;
console.log(number1,number2);

//Problems from Variables

// 01 . declare a two numbers and add two numbers ,display it

let num1=10;
let num2=87;
console.log(num1+num2);


//02 . Swap the two variables

let x = 12;
let y = 21;
console.log('Before Swapping : ' + x, y);
let temp=x;
x=y;
y=temp;
console.log("After Swapping : "+x,y);

//03 . Find the Area of the circle

let radius=2;
console.log(pi*radius**2);

