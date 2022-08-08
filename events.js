const time = () => {
  let array = [4, 3, 5, 7, 9, 1, 0];
  document.getElementById("practice").innerHTML =
    Date() + array.sort((a, b) => b - a);
};

let string = "abcdefghi";

console.log(string.slice(-3, -1));
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3schools");
console.log(newText);
let t = "5";
let padded = t.padEnd(4, "x");
console.log(padded);
let x = 6;
console.log(Number.MAX_VALUE);

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
debugger;
console.log(
  cars.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x > y) return 1;
    if (x < y) return -1;
    return 0;
  })
);
