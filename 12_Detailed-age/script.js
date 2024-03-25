const detailedAge = (day, month, year) => {
  const birthDate = new Date(year, month - 1, day);
  const dateDiff = new Date() - birthDate;

  //Calcs
  const yearMs = 1000 * 60 * 60 * 24 * 365;
  const monthMs = yearMs / 12;
  const dayMs = 1000 * 60 * 60 * 24;

  const yearDiff = Math.floor(Math.abs(dateDiff / yearMs));
  const monthDiff = Math.floor((dateDiff % yearMs) / monthMs);
  const dayDiff = Math.floor((dateDiff % monthMs) / dayMs);

  const yearOutput = `${pluralRule(yearDiff, "year")}`;
  const monthOutput = `, ${pluralRule(monthDiff, "month")}`;
  const dayOutput = ` ${pluralRule(dayDiff, "day")}`;

  return `You are ${yearOutput}${monthOutput}${
    monthOutput && " and" + dayOutput
  } old.`;
};

// Just a bonus feature I came up with
const pluralRule = (quantity, str) =>
  quantity === 0 || quantity > 1 ? `${quantity} ${str}s` : `${quantity} ${str}`;

console.log(detailedAge(9, 8, 1989));
console.log(detailedAge(17, 2, 1988));
console.log(detailedAge(26, 2, 2024));
