//Objects are used to store multiple values with different data types to store in a single variable

// 1 . Objects  =>  It contains value like a pair { } denotes curly braces
// Let us see an Example

let aadhaarCard = {
  Name:"Manoj",
  dateOfBirth:"02-03-2007",
  Age:19,
  aadhaarNumber:4443_1243_7890,
  fatherName:"RaviKumar",
  motherName:"Vimala",
  mobileNumber:9629013668
};

// Here we can Bundle my data into single variable
//display the data
console.log(aadhaarCard);

//How can we access data from aadhaarCard, There are two ways to access
// 1 . using Dot Operator
// 2 . using Brackets

//1 . Dot Operator
console.log("Name : "+aadhaarCard.Name);
console.log("aadhaarNumber : "+aadhaarCard.aadhaarNumber);

//2 . Using Bracket
console.log("Name : "+aadhaarCard["Name"]);
console.log("fatherName : "+aadhaarCard["fatherName"]);


//we can change the values using assignment operator
//for example i can change my age is 20
aadhaarCard.Age=20;
console.log("Age : "+aadhaarCard.Age);

//02 . Arrays  => Array is a collection of element without similar data type [ ] denots as brackets

let favCricketers = ["Ms Dhoni","Virat Kohli","Jhonty Rhodes","ABDeVilliers","Chris Gayle","Kane Wiliamson","Mitchel Johnson"];
console.log(favCricketers);


//we can access element by using indexing
console.log(favCricketers[2]);
console.log(favCricketers[0]);      //Every array elements starts with 0th index,so it is a starting element