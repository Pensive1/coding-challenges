function duplicateCount(text) {
  const strArr = [...text.toLowerCase()];
  const checkedLetters = [];

  const result = strArr.reduce((dups, currLetter, _, arr) => {
    if (!checkedLetters.includes(currLetter)) {
      checkedLetters.push(currLetter);
      const dupCount = arr.filter((letter) => letter === currLetter).length;
      if (dupCount > 1) dups++;
    }

    return dups;
  }, 0);
  return result;
}

console.log(`Word: 'abcde', duplicates: ${duplicateCount("abcde")}`);
console.log(`Word: 'aabbcde', duplicates: ${duplicateCount("aabbcde")}`);
console.log(`Word: 'aabBcde', duplicates: ${duplicateCount("aabBcde")}`);
console.log(
  `Word: 'indivisibility', duplicates: ${duplicateCount("indivisibility")}`
);
console.log(
  `Word: 'Indivisibilities', duplicates: ${duplicateCount("Indivisibilities")}`
);
console.log(`Word: 'aA11', duplicates: ${duplicateCount("aA11")}`);
console.log(`Word: 'ABBA', duplicates: ${duplicateCount("ABBA")}`);
