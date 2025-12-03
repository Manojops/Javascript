//Hello World program

console.log("Hello World")      //Display the output
console.warn("Warning !")       //This will popup a warning msg on your browser
console.error("error !")        //This will popup a error msg on your browser

//Variables are used to hold the data
//var,let,const  =>But we use only let and const

let name='Manoj';
console.log(`Hi ${name}`);

//primitive data types

let a='Dhoni';
let num=123;
let perc=98.4;
let isWin=true;
let x=null;
let y;
const z=undefined;


//using typeof to find the type of variable

console.log(typeof a);
console.log(typeof num);
console.log(typeof perc);
console.log(typeof isWin);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


//when i use const ,the value does not change or reassign

const pi=3.14;
console.log(pi);

//String

let str="Hello Manoj How are you";
console.log("Length : "+str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(3));
console.log(str[6]);
console.log(str.split(' '));

//Arrays  (in javascript we can store multiple data types in array)

let arr=new Array(1,2,3,"java");
console.log(arr)

//another way to create an array

let arr2=[1,3,4,true,"python",null];
console.log(arr2);
console.log(arr2.length);


//to add elements in the last
arr2.push("Dog")
console.log(arr2);

//to add elements in the first
arr2.unshift(false)
console.log(arr2);

//to remove last element
arr2.pop()
console.log(arr2)

//index of the particular element
console.log(arr2.indexOf("python"))

//insert a particular index
arr2.splice(4,0,"C++");
console.log(arr2);
