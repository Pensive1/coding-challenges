// TODO: Find out the oldest candidate from the candidates object.
const candidates = {
  0: {
    name: "Alice",
    age: 28,
  },
  1: {
    name: "Bob",
    age: 53,
  },
  2: {
    name: "Jake",
    age: 22,
  },
  3: {
    name: "Rose",
    age: 48,
  },
};

// OUTPUT:
// "The oldest candidate is Jhon with age 99".

// your code goes here
const checkMaxAge = (obj) => {
  const people = Object.entries(obj);
  let currentOldest = 0;

  // check oldest
  //-------- OLD CODE ----------------
  // for (let i = 0; i < people.length; i++) {
  //   const currentPerson = people[i][1];

  //   if (currentPerson.age > currentOldest) {
  //     oldestPerson = currentPerson;
  //     currentOldest = currentPerson.age;
  //   }
  // }

  const oldestPerson = people.reduce((oldest, curr) => {
    const currentPerson = curr[1];

    if (currentPerson.age > currentOldest) {
      currentOldest = currentPerson.age;
      oldest = currentPerson;
    }
    return oldest;
  }, null);

  // return oldest;
  console.log(
    `The oldest candidate is ${oldestPerson.name} with age ${oldestPerson.age}`
  );
};

checkMaxAge(candidates);
