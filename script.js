// Given array and object
let players = ['player1', 'player2', 'player3'];
let person = { name: 'John', age: 30, city: 'New York' };

// Create a variable team that references the players array
let team = players;

// Create a variable team1 that is a copy of the players array using spread syntax
let team1 = [...players];

// Create a variable cap1 that is a copy of the person object using object destructuring
let cap1 = { ...person };
