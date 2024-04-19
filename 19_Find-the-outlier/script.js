function findOutlier(integers) {
  const countInts = (arr, remainder) => {
    const nums = arr.filter(
      (number) => number % 2 === remainder || number % 2 === -remainder
    );
    return nums;
  };
  const countEven = countInts(integers, 0);
  const countOdd = countInts(integers, 1);

  return countEven.length < countOdd.length ? countEven[0] : countOdd[0];
}

console.log(`[0, 1, 2] -> ${findOutlier([0, 1, 2])}`);
console.log(`[1, 2, 3] -> ${findOutlier([1, 2, 3])}`);
console.log(`[2, 6, 8, 10, 3] -> ${findOutlier([2, 6, 8, 10, 3])}`);
console.log(`[0, 0, 3, 0, 0] -> ${findOutlier([0, 0, 3, 0, 0])}`);
console.log(`[1, 1, 0, 1, 1] -> ${findOutlier([1, 1, 0, 1, 1])}`);
console.log(`[2, -6, 8, -10, -3] -> ${findOutlier([2, -6, 8, -10, -3])}`);
