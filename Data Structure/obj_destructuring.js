const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//destructuring object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { namee: restaurantName, opening: hours, categoriess: tags } = restaurant;
console.log(restaurantName, hours, tags);

const { fri } = openingHours;
console.log(fri); // output  fri: [open: 11, close: 23]

const {
  sat: { open, close },
} = openingHours;
console.log(open, close); //0 24

const {
  thu: { op: o, clo: c },
} = openingHours;
console.log(o, c); //12 22
