function spinWords(string) {
  const stringArr = string.split(" ");

  return stringArr
    .reduce((newStr, word) => {
      word.length >= 5
        ? newStr.push([...word].reverse().join(""))
        : newStr.push(word);
      return newStr;
    }, [])
    .join(" ");
}

console.log(`Welcome -> ${spinWords("Welcome")}`);
console.log(`Hey fellow warriors -> ${spinWords("Hey fellow warriors")}`);
console.log(`This is a test -> ${spinWords("This is a test")}`);
console.log(`This is another test -> ${spinWords("This is another test")}`);
console.log(
  `This sentence is a sentence -> ${spinWords("This sentence is a sentence")}`
);
console.log(
  `You are almost to the last test -> ${spinWords(
    "You are almost to the last test"
  )}`
);
console.log(
  `Just kidding there is still one more -> ${spinWords(
    "Just kidding there is still one more"
  )}`
);
console.log(
  `Seriously this is the last one -> ${spinWords(
    "Seriously this is the last one"
  )}`
);
