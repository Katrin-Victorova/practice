// персонализированное приветсвие
// function greet (name, owner) {
//   if(name === owner) {
// return 'Hello boss';
//   }
// return 'Hello guest';
// }

// тернарный
// return name === owner ? 'Hello boss' : 'Hello guest';
// return 'Hello ' + (name === owner ? 'boss' : 'guest');

const greet = (name, owner) => `Hello + ${(name === owner ? 'boss' : 'guest')}`;