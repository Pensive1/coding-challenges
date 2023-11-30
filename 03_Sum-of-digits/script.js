function digitalRoot(n) {
  // ...
  const digits = n
    .toString()
    .split("")
    .map((num) => Number(num));

  const digitRoot = digits.reduce((acc, cur) => (acc += cur));
  const digitRootDigits = digitRoot.toString().split("");

  if (digitRootDigits.length > 1) {
    return digitalRoot(digitRoot);
  } else {
    return digitRoot;
  }
}

console.log(digitalRoot(16));
console.log(digitalRoot(456));
