const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFistWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
// console.log(upperFistWord("JOnas SchmedtmannMayesha"));

// console.log(oneWord("JOnas Schmedtmann"));

/////////////////////////////////
//Higher-order function(Function accepting callback functions)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFistWord);
transformer("Javascript is the best!", oneWord);

//Js uses callbacks all the time
const high5 = function () {
  console.log("👋");
};
document.body.addEventListener("click", high5);

//Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Jonas");
greeterHey("Feluda");

greet("Hello")("Topshe");
//using arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );

    this.bookings.push({ flight: `${ths.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Feluda");
lufthansa.book(635, "Topshe");
console.log(lufthansa);
