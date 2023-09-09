let arrayString = ["banana", "mamão", "amora"];
let arrayNumber = [8, 2, 5];
let arraySortido = ["uva", 12, true];
let arrayNum = [20];
let arrayVazio = [];

console.log(arrayString.length);
console.log(arrayString[2]);
console.log(arrayString);

console.log(arraySortido.includes(true));
console.log(arraySortido.includes(12));
console.log(arraySortido.includes(10));
console.log(arraySortido.includes("uva"));

let copiarArrayString = arrayString;
console.log(copiarArrayString);

copiarArrayString.push("uva");
console.log(copiarArrayString);
console.log(arrayString);

//let copiarArrayString1 = arrayString.slice();
//console.log(copiarArrayString1);

//copiarArrayString.pop();
//console.log(copiarArrayString)

copiarArrayString.splice(2,2);
console.log(copiarArrayString);
console.log(copiarArrayString.length);

