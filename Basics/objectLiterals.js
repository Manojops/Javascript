let students=[
    {
        id:1,
        Name:"Manoj",
        Age:18,
        RollNo:7
    },
    
    {
        id:2,
        Name:"Ram",
        Age:16,
        RollNo:10
    },

    {
        id:3,
        Name:"Jeffry",
        Age:17,
        RollNo:23
    }
]

console.log(students)

console.log(`Name : ${students[0].Name}`);
console.log(students[1]);


//To convert into JSON format
let jsonStu = JSON.stringify(students);
console.log(jsonStu);


let employee={
    Name : ["Manoj","Ram","Shyam"],
    salary:[120000,70000,55000],
    Address:[
        {
            Area:"Machuvadi",
            District:"Pudukkottai"
        },

        {
            Area:"Rk nagar",
            District:"Chennai"
        },

        {
            Area:"Triplicane",
            District:"Trichy"
        }
    ]
}

console.log(employee);

console.log(employee.Name[0]);
console.log(employee.Address[2].Area);
console.log(employee.Address);