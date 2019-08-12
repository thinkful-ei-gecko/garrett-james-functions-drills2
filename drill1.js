'use strict';

function createGreeting(name, age) {
  if (!age || !name) {
    throw new Error('Arguments not valid');
  }
  const greeting = `Hi my ${name} is Garrett and I'm ${age} years old`;
  return greeting;
}

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  const yearOfBirth = 2019 - age;
  return `I was born in ${yearOfBirth}`;
}
try {
  const greet = createGreeting();  console.log(greet);
} catch(error) {
  console.error(error);
}


