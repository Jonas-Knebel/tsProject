/**
 * Aufgabe 1
 */
console.log("Aufgabe 1");
let firstname: string = "Daniel";
let age: number = 37;
let gender: string = "m";
console.log("firstname: " + firstname + " age: " + age + " gender: " + gender);

/**
 * Aufgabe 2
 * a:4
 * b:1
 * c:9
 * d:50
 * e:-5
 * f:2
 * g:1
 * h:0
 * i:10
 */

/**
 * Aufgabe 3
 */
console.log("Aufgabe 3");
let zahl: number = 420;
if (zahl % 2 != 0) {
  console.log("Die Zahl ist " + zahl);
} else {
  console.log("Die Zahl ist ungerade");
}

/**
 * Aufgabe 4
 */
console.log("Aufgabe 4");
function returnDivison(a: number, b: number) {
  console.log("a");
  console.log("b");
  console.log("Ganzzahliger Quotient von a/b", Math.floor(a / b));
  console.log("Divisionsrest von a/b", a % b);
}
returnDivison(103, 4);

/**
 * Aufgabe 5
 */
console.log("Aufgabe 5");
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Element an der Stelle 3:", array[2]);

/**
 * Aufgabe 6
 */
console.log("Aufgabe 6");
let arr: string[] = [
  "lukas",
  "konstatin",
  "ben",
  "jonas",
  "elias",
  "nadja",
  "nina",
  "amy",
  "Fae",
];
console.log("Vorheriges Array: " + arr);
arr.push("test");
console.log("Array nach dem Hinzufügen: " + arr);
arr.pop();
console.log("Array nach dem Löschen: " + arr);

/**
 * Aufgabe 7
 */
console.log("Aufgabe 7");
let arr3: string[] = ["a", "b", "c", "d", "e", "f"];
console.log("Vorheriges Array: " + arr3);
var index = arr.indexOf("c");
arr.splice(index, 1);
console.log("Nach dem spezifischen Löschen: " + arr3);
