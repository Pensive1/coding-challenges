function gimmeTheLetters(sp) {
  const firstLetterIndx = sp.charCodeAt(0);
  const lastLetterIndx = sp.charCodeAt(2);

  let finalStr = "";

  for (let i = firstLetterIndx; i <= lastLetterIndx; i++) {
    finalStr += String.fromCharCode(i);
  }

  return finalStr;
}

console.log(gimmeTheLetters("a-d"));
console.log(gimmeTheLetters("h-o"));
console.log(gimmeTheLetters("Q-Z"));
console.log(gimmeTheLetters("J-J"));
