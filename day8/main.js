//bai 3
let students = [
    { name: "Alice", age:20},
    { name: "Bob", age:22},
    { name: "Charlie", age:25},
];

for (let i=0;i<students.length;i++) {
    if (students[i].age >= 22){
        console.log(students[i].name);
    }
}
