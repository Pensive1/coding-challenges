function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return [...str].reduce((count, letter) => {
    if (vowels.includes(letter)) count++;
    return count;
  }, 0);
}

console.log(`abracadabra: ${getCount("abracadabra")}`);
console.log(`pear tree: ${getCount("pear tree")}`);
console.log(
  `o a kak ushakov lil vo kashu kakao: ${getCount(
    "o a kak ushakov lil vo kashu kakao"
  )}`
);
console.log(`my pyx: ${getCount("my pyx")}`);
