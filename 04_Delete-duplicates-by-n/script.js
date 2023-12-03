function deleteNth(arr, n) {
  const tempArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentValueCount = tempArr.filter((num) => num === arr[i]).length;

    if (
      !tempArr.includes(arr[i]) ||
      (tempArr.includes(arr[i]) && currentValueCount < n)
    ) {
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
}

console.log(
  deleteNth(
    [
      23, 7, 43, 43, 7, 41, 7, 26, 22, 7, 41, 23, 7, 26, 7, 22, 22, 41, 41, 43,
      7, 23, 23, 22, 10, 43, 43, 41, 10, 26, 41, 10, 7, 23, 41, 23, 43, 22, 23,
      10, 22, 10, 7, 23, 22,
    ],
    2
  )
);
