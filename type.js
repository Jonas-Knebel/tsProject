/**
 * Aufgabe 1
 */
var firstname = "Daniel";
var age = 37;
var gender = "m";
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
var zahl = 420;
if (zahl % 2 != 0) {
    console.log("Die Zahl ist " + zahl);
}
else {
    console.log("Die Zahl ist ungerade");
}
/**
 * Aufgabe 4
 */
function returnDivison(a, b) {
    console.log("a");
    console.log("b");
    console.log("Ganzzahliger Quotient von a/b", Math.floor(a / b));
    console.log("Divisionsrest von a/b", a % b);
}
returnDivison(103, 4);
/**
 * Aufgabe 5
 */
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Element an der Stelle 3", array[2]);
