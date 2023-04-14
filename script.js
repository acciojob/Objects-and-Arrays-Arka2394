const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// Create a variable team that stores a reference to players
const team = players;

// Create a variable team1 that is a copy of players using spread syntax
const team1 = [...players];

// Create a variable cap1 that is a copy of person object using object destructuring
const cap1 = { ...person };

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
