let n1 = prompt("Type one number: ");
let n2 = prompt("Type another number: ");

n1 = Number (n1);
n2 = Number (n2);

alert(`O resultado da sua conta foi de: ${n1 + n2}`);


//

let varA = 'A';
let varB = 'B';
let varC = 'C';

// Switch values
[varA, varB, varC] = [varB, varC, varA];

console.log("VarA = " + varA);  // B
console.log("VarB = " + varB);  // C
console.log("VarC = " + varC);  // A
