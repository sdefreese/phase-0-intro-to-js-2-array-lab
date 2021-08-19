// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Ralph");

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
destructivelyRemoveLastCat();

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

function appendCat(name) {
    const copyCats = [...cats, "Broom"];
    return copyCats;
}

function prependCat(name) {
    const newCat = ["Arnold", ...cats]
    return newCat;
}
function removeLastCat() {
    const lessCat = cats.slice(0,2);
    return lessCat;
}
function removeFirstCat() {
    const firstCat = cats.slice(-2);
    return firstCat;
}