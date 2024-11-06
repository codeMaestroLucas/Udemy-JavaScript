let n1 = 0.7;
let n2 = 0.3;

console.log(((n1 * 10) + (n2 * 10)) / 10);
console.log(((n1 * 10) - (n2 * 10)) / 10);

n1 = Number(((n1 * 10) + (n2 * 10)) / 10).toFixed(9);
console.log(n1); //  1.000000000


console.log(Number.isInteger(n1));
n1 = n1.toString();

console.log(n1 - n2);  //! 0.7
// ZUADO DMS


console.log((100 / 0));    // Infinte
console.log(!(100 / 0));   // false
console.log(!!(100 / 0));  // true

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));  // Max value: 1500
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Min value -50
const randomVal = Math.round(Math.random() * (10 - 5) + 5);
console.log(randomVal); // Random number between 5 and 10