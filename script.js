// Flat Array:

// let array = ['Tor', 5, true, 'Hans', 25, true, 'Emil', 28, false];

// console.log(array);


// Object Array:
let arrayDetails = [
  { name: 'Tor', age: 5, isPresent: true },
  { name: 'Hans', age: 25, isPresent: true },
  { name: 'Alex', age: 20, isPresent: true },
  { name: 'Jørgen', age: 28, isPresent: true },
  { name: 'Emil', age: 14, isPresent: true },
  { name: 'Nils', age: 30, isPresent: true },
  // { name: 'Kai', age: 40, isPresent: false },
];

// let names = arrayDetails.map(function (person) {
//   return person.name;
// });

// console.log("first person's name:", arrayDetails[0].name);
// console.log("second person's age:", arrayDetails[1].age);
// console.log(names);


// Nested Array:

// let objectArray = {
//   people: [
//     { name: 'Tor', age: 5 },
//     { name: 'Hans', age: 25 },
//     { name: 'Alex', age: 20 },
//     { name: 'Jøren', age: 28 },
//     { name: 'Emil', age: 14 },
//     { name: 'Nils', age: 30 },
//     { name: 'Maddis', age: 24 },
//     { name: 'Kai', age: 90 },
//   ],
//   games: ['Lies of P', 'Once Human', 'Marvel Rivals', 'Toxic League'],
//   present: [true, false],
// };

// console.log(objectArray);
// console.log(objectArray.people);

let names = arrayDetails.map((person) => person.name);

let i = 0;

function displayNames() {
  if (i < names.length) {
    let displayContent = `
    <p>Name 1: ${names[i]}</p>
    <p>Name 2: ${names[i + 1]}</p>
`;

    document.getElementById('names-list').innerHTML = displayContent;
    i += 2;
  } else {
    clearInterval(intervalId);
    document.getElementById('names-list').innerHTML =
      '<p>No more names to show.</p>';
  }
}

let intervalId = setInterval(displayNames, 6000);

displayNames();
