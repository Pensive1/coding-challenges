"use strict";

function duplicateEncode(word) {
  const str = [...word.toLowerCase()];
  return str.reduce((newStr, letter, _, arr) => {
    if (arr.filter((char) => char === letter).length > 1)
      return (newStr += ")");
    return (newStr += "(");
  }, "");
}

console.log(`Word: 'din', Encoding: ${duplicateEncode("din")}`);
console.log(`Word: 'recede', Encoding: ${duplicateEncode("recede")}`);
console.log(`Word: 'Success', Encoding: ${duplicateEncode("Success")}`);
console.log(
  `Word: '(( @"),"))((', Encoding: ${duplicateEncode('(( @"),"))((')}`
);
