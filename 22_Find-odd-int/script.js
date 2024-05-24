function findOdd(A) {
  return A.reduce((int, currInt, _, arr) => {
    const numCount = arr.filter((num) => num === currInt).length;
    if (numCount % 2 === 1) int = currInt;
    return int;
  }, 0);
}

console.log(`[7] -> ${findOdd([7])}`);
console.log(`[0] -> ${findOdd([0])}`);
console.log(`[1,1,2] -> ${findOdd([1, 1, 2])}`);
console.log(`[0,1,0,1,0] -> ${findOdd([0, 1, 0, 1, 0])}`);
console.log(
  `[1,2,2,3,3,3,4,3,3,3,2,2,1] -> ${findOdd([
    1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1,
  ])}`
);
