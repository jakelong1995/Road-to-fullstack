const myStudents = ["hoang","hong","truc","kien"];
const car = {
    brand: "Toyota",
    year: 2022,
    color: "red"
}
console.log(car.brand)

const user = [
    {
        userName: "hotboydatinh",
        password: "34fjjfgd",
    },
    {
        userName: "hotboi",
        password: "34fjj34",
    }
]

function hello(name) {
    console.log(`Hello ${name}, have a good day!`)    
}

//bai 3
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 25 },
  ];
  
  let filteredStudents = students.filter((student) => student.age >= 22);
  
console.log(filteredStudents)



//bai 4
let numbers = [2, 4, 6, 8, 10];
let doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);



//Bai 5
let names = ["Alice","Bob","Charlie","David","Eve"];
  
  let filteredNames = names.filter((name) => name.length >= 5);
  
console.log(filteredNames)


//Bai 6
let shoppingCart = [
    {name: "iPhone", price: 999},
    {name: "Macbook Pro", price: 1999},
    {name: "Airpods", price: 199},
    {name: "iPad", price: 799},
];

let totalPrice = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);

console.log(totalPrice);

//Bai 7

let myArray = [1, 2, 3, 4, 5];
let jsonString = JSON.stringify(myArray);

console.log(jsonString);
