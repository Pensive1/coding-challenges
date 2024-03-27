function deleteNth(arr, n) {
  // const tempArr = [];

  // ----- OLD CODE -----
  // for (let i = 0; i < arr.length; i++) {
  //   let currentValueCount = tempArr.filter((num) => num === arr[i]).length;

  //   if (
  //     !tempArr.includes(arr[i]) ||
  //     (tempArr.includes(arr[i]) && currentValueCount < n)
  //   ) {
  //     tempArr.push(arr[i]);
  //   }
  // }

  return arr.reduce((finalArr, cur) => {
    let currentValueCount = finalArr.filter((num) => num === cur).length;

    if (
      !finalArr.includes(cur) ||
      (finalArr.includes(cur) && currentValueCount < n)
    ) {
      finalArr.push(cur);
    }
    return finalArr;
  }, []);
}

console.log(deleteNth([23, 7, 43, 43, 7, 41, 7, 26, 22, 7, 41, 7], 2));
console.log(deleteNth([1, 2, 5, 7, 8, 6, 4, 5, 5, 1, 1, 2, 3, 3, 3], 1));
