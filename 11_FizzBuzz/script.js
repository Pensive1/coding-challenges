const fizzBuzz = (limit = 100) => {
  for (let i = 1; i <= limit; i++) {
    const fizz = i % 3 === 0;
    const buzz = i % 5 === 0;

    if (fizz && buzz) console.log(`${i}: fizzbuzz`);
    else if (fizz) console.log(`${i}: fizz`);
    else if (buzz) console.log(`${i}: buzz`);
    else console.log(i);
  }
};

fizzBuzz();
