const arr = ["red", "blue", "white"];

let [red, blue, white] = arr;

console.log(arr[0], red, arr[1], blue, arr[2], white);

const America: string = `America's flag is ${red}, ${white}, and ${blue}`;

blue = "green";
arr[2] = "green";

console.log(blue, arr);

const Mexico: string = `Mexico's flag is ${red}, ${white}, and ${blue}`;

const students = [];
