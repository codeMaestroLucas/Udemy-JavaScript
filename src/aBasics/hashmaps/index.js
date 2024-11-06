const person = {

    name: "Lucas",
    lastname: "Samuel",
    age: 23,

    speak() {
        console.log(`Olá, meu nome é ${this.name} ${this.lastname} e tenho ${this.age} anos.`);
    },

    increaseAge() {this.age++}

};

let joao = person;

joao.name = "João";

joao.speak();


person.speak();
person.increaseAge();

person.speak();
person.increaseAge();

person.speak();
person.increaseAge();
person.speak();



// Primitive Types

/*

- Primitive (Unmutable): string, number, boolean, undefined
    null (bigint, symbol) => copieed values

- Refference (Muttable): array, object, function


*/


const a = {
    nome: 'Jhon',
    sobrenome: 'Due'
};

const b = a;

b.nome = 'João';
console.log(a);
console.log(b);