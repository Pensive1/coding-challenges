function toCamelCase(str) {
  if (str.length === 0) return "";

  const separateStr = (str, separator) =>
    str
      .split(separator)
      .map((word, i, newWordArr) => {
        if (i === 0) {
          return word;
        } else if (i > 0) {
          word.toLowerCase();
          return word[0].toUpperCase() + word.slice(1);
        }
      })
      .join("");

  const checkAndModStr = (str) => {
    let modStr;
    if (str.includes("-")) {
      modStr = separateStr(str, "-");
    } else if (str.includes("_")) {
      modStr = separateStr(str, "_");
    }

    //Recursively check if the modified string contains '-' or '_'
    if (modStr.includes("-") || modStr.includes("_"))
      modStr = checkAndModStr(modStr);

    return modStr;
  };

  return checkAndModStr(str);
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
console.log(toCamelCase("A-Cat_is-pippi"));
console.log(toCamelCase("The_pippi-Was-kawaii"));
