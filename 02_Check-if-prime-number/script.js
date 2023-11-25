console.group("Codewars test: Check if prime (Multiples of 3 and 5)");

function isPrime(num) {
  if (num > 1) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } else return false;
}
console.time("Prime number check");
console.log(isPrime(2));
console.timeLog("Prime number check");
console.log(isPrime(3));
console.timeLog("Prime number check");
console.log(isPrime(75));
console.timeLog("Prime number check");
console.groupEnd("Codewars test: Check if prime (Multiples of 3 and 5");
