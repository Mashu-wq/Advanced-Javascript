"use strict";

//destructuring
const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(x, y, z); // output: 2 3 4
console.log(arr); //output [2, 3, 4] (unpacking)

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second); // output: Italian Pizzeria

const [main, , main2] = restaurant.categories;
console.log(main, main2); // output: Italian Vegetarian

const [primary, secondary] = restaurant.categories;
const temp = primary;
primary = secondary;
secondary = temp;
console.log(primary, secondary); // output: Vegetarian Italian
//using destructuring
[primary, secondary] = [secondary, primary];
console.log(primary, secondary); // output: Italian Vegetarian

console.log(restaurant.order(2, 0)); // output: [Garlic Bread Pizza]
//destructuring
const [starter, m] = restaurant.order(2, 0);
console.log(starter, m); // output: Garlic Bread Pizza

//Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // output: 2 [5 6]
const [t, , [p, n]] = nested;
console.log(t, p, n); // output: 2 5 6

//default values
const [s, b, c] = [8, 9];
console.log(s, b, c); // output: 8 9 undefined
