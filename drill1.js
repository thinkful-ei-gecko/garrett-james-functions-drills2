'use strict';

function createGreeting(name = 'Garrett', age = 31) {
  const greeting = `Hi my ${name} is Garrett and I'm ${age} years old`;
  return greeting;
}

function getYearOfBirth(age) {
  const yearOfBirth = 2019 - age;
  return `I was born in ${yearOfBirth}`;
}
const greet = createGreeting();
console.log(greet);

