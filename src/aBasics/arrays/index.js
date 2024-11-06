let students = ['Jhon', 'Mary', 'Carlos']; // Jhoan, Terence


// students = 123;
// console.log(students); // 123
// console.log(students instanceof Array); // false

students.push('Jhoan');
students.push('Terence');

console.log(students.slice(0, 2)); // [0 - 2)

console.log(students[3]);
console.log(students[30]);  // undefined

const removed = students.shift(); // Remove the first element
console.log(removed); // Jhon

students.unshift("Jhon"); // Add in the start of the list
students.unshift("Tereza");

console.log(students);

students[students.length] = "Luisa"; // Adding in the end
students[students.length] = "Luiza";
students[students.length] = "Luhísa";

console.log(students);

students[0] = "Lucas";
students[1] = "Joao";

console.log(students);
