function insertZerosOnLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function formattDate(date) {

    const day = insertZerosOnLeft(date.getDate());
    const month = insertZerosOnLeft(date.getMonth() + 1);
    // The months in JS start from 0 - January ; 1 - February ...
    const year = insertZerosOnLeft(date.getFullYear());
    const hour = insertZerosOnLeft(date.getHours());
    const minute = insertZerosOnLeft(date.getMinutes());
    const seconds = insertZerosOnLeft(date.getSeconds());

    return `${day}/${month}/${year} ${hour}h ${minute}min ${seconds}s`
}

const date = new Date();
const brDate = formattDate(date);

console.log(brDate);