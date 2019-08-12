'use strict';

function createGreeting(name = 'Garrett', age = 31) {
  const greeting = `Hi my ${name} is Garrett and I'm ${age} years old`;
  return greeting;
}

const greet = createGreeting();
console.log(greet);

