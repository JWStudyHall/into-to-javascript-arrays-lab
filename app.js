// Exercise 1
const foods = [];

console.log("Exercise 1 result:", foods);

// Exercise 2
foods.push("pizza", "cheeseburger");

console.log("Exercise 2 result:", foods);

// Exercise 3
foods.unshift("taco");

console.log("Exercise 3 result:", foods);

// Exercise 4
console.log(foods[1]);
let favFood = foods[1];
console.log("Exercise 4 result:", favFood);

// Exercise 5
foods[2] = "tofu";
foods[3] = "cheeseburger";
console.log("Exercise 5 result:", foods);

// Exercise 6
// splice mutates the Array
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item0)
// splice(start, deleteCount, item0, item1)
// splice(start, deleteCount, item0, item1, /* …, */ itemN)
foods.splice(1, 1, "sushi", "cupcake");

console.log("Exercise 6 result:", foods);

let yummy = foods.slice(1, 3);

console.log("Exercise 7 result:", yummy);

//exercise 8

foods.indexOf("tofu");

const soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 result:", soyIdx);

//exercise 9

foods.join(" -> ");

const allFoods = foods.join(" -> ");

console.log("Exercise 9 result:", allFoods);

//exercise 10

foods.includes("soup");
const hasSoup = foods.includes("soup");
console.log("Exercise 10 result:", hasSoup);

//exercise 11 **modulo**
// const nums =[100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
// let odds =[];
// for (let i = 0; i < nums.length; i++) {
//     let num =nums[i]
//   if(nums[i]% 2 === 1)
// }

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 1) {
    odds.push(nums[i]);
  }
}

console.log("Exercise 11 result:", odds);

// Exercise 12

let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];

  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  } else if (num % 3 === 0) {
    fizz.push(num);
  } else if (num % 5 === 0) {
    buzz.push(num);
  }
}

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];
let numList = numArrays[numArrays.length - 1];
console.log("Exercise 13 result:", numList);
//exercise 14
const num = numArrays[2][1];

console.log("Exercise 14 result:", num);

//exercise 15
let total = 0;
// for (let i = 0; i < numArrays.length; i++) {
// for(let j =0; j < numArrays[i].length;j++){
//     total += numArrays[i][j]
// }
// }
numArrays.forEach((arr) => {
  arr.forEach((num) => (total += num));
});
console.log("Exercise 15 result:", total);
