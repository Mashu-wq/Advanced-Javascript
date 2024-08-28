// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1.
const [players1, players2] = game.players;
console.log(players1, players2);
//2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//4.
const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
//5.
const {
  odds: { team1, draw, team2 },
} = game;
console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);
//7.
team1 < team2 && console.log("Team 1 is more likely to win");

// Coding Challenge #2

/* 
    Let's continue with our football betting app!
    
    1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
    2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
    3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
          Odd of victory Bayern Munich: 1.33
          Odd of draw: 3.25
          Odd of victory Borrussia Dortmund: 6.5
    Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
    
    BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
          {
            Gnarby: 1,
            Hummels: 1,
            Lewandowski: 2
          }
    
    GOOD LUCK 😀
    */

//1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
const ods = Object.values(game.odds);
for (const [team, odd] of ods) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Coding Challenge #3

/* 
    Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
    
    1. Create an array 'events' of the different game events that happened (no duplicates)
    2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
    3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
    4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
          [FIRST HALF] 17: ⚽️ GOAL
    
    GOOD LUCK 😀
    */

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1.
const events = [...new Set(gameEvents.values())];
console.log(events);

//2.
gameEvents.delete(64);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

/**
 * coding challenge #4
 * write a program that receives a list of variable names written in underscore_case and convert them to camelCase. The input will come from textarea inserted into the DOM(see code below) , and conversion will happen when the button is pressed.
 *
 * THIS TEST DATA (pasted to textarea)
 * underscore_case
 * first_name
 * some_variable
 * calculate_AGE
 * delayed_departure
 *
 * SHOULD PRODUCE THIS OUTPUT(5 separate console.log outputs)
 *
 * underscoreCase
 * firstName
 * someVariable
 * calculateAge
 * delayedDeparture
 *
 * HINT 1: Remember which character defines a new line in the textarea.
 * HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
 * HINT 3: Start without worrying about the (tik sign). Tackle that only after you have the variable name conversion working.
 * HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. The pause and continues.
 *
 * Afterwards, test with your own test data!
 *
 * GOOD LUCK
 */

//solution

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const text = document.querySelector("textarea").value;

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    console.log(first, second);

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

//String part

// Working With Strings - Part 2

// Split and join
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Working With Strings - Part 2

const airline = "TAP Air Portugal";

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}
//////////////////////////////////////////////////////
// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

///////////////////////////////////////
// Working With Strings - Part 1
const airline1 = "TAP Air Portugal";
const plane1 = "A320";

console.log(plane1[0]);
console.log(plane1[1]);
console.log(plane1[2]);
console.log("B737"[0]);

console.log(airline1.length);
console.log("B737".length);

console.log(airline1.indexOf("r"));
console.log(airline1.lastIndexOf("r"));
console.log(airline1.indexOf("portugal"));

console.log(airline1.slice(4));
console.log(airline1.slice(4, 7));

console.log(airline1.slice(0, airline1.indexOf(" ")));
console.log(airline1.slice(airline1.lastIndexOf(" ") + 1));

console.log(airline1.slice(-2));
console.log(airline1.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(1));

////////////////////////////////////////////////////
//string methods practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}
