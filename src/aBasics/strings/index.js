let myString = "Some strInG Value   ";


let stringMethods = [

    myString.charAt(-1),
    myString.charAt(6),
    myString.charAt(100),
    myString.charAt(0),
    myString.charCodeAt(0),  // ASC value
    myString.concat(" concatenated"),  // Replace all the empty spaces on the string
    myString.endsWith("Value"),
    myString.includes("some"),  // Case sensitive value
    myString.indexOf("some"),
    myString.lastIndexOf("some"),  // -1 -> didn't found
    myString.localeCompare("Some strInG Value"), // 1: True // -1: False
    myString.localeCompare("Some bs"),
    myString.match(/[aeiou]/gi), // Show the values that match the regex expression
    myString.normalize(),
    myString.padEnd(20, "0"),
    myString.padStart(20, "0"),
    myString.repeat(3),
    myString.replace("Some", "Another"),
    myString.search(/[aeiou]/gi),
    myString.slice(2, 9),
    myString.split(" "),
    myString.startsWith("Some"),
    myString.substring(5, 8),
    myString.toLocaleLowerCase(),
    myString.toUpperCase(),
    myString.trim(), // Remove empty spaces
    myString.trimStart(),
    myString.trimEnd(),
    myString.valueOf(),
    myString.concat(" concatenated").toString(),

]

for (c in stringMethods) {
    console.log(c, ":", stringMethods[c]);
}