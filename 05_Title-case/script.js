function titleCase(title, minorWords = "") {
  const exceptions = minorWords.toLowerCase().split(" ");
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  if (title.length > 0) {
    const newWord = title
      .toLowerCase()
      .split(" ")
      .map((word, i) => {
        if (i === 0) {
          return capitalize(word);
        }

        return exceptions.includes(word) ? word : capitalize(word);
      })
      .join(" ");

    return newWord;
  }
  return "";
}

// console.log(titleCase("", ""));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
