"use strict";

function diamond(n) {
  if (n % 2 === 0 || n <= 0) return null;
  const strChain = [];

  //start middle chain
  strChain.push("*".repeat(n) + "\n");

  // Surrounding chains
  let linkCount = 0;
  for (let i = n - 2; i >= 1; i -= 2) {
    linkCount++;
    let otherLink = "*".repeat(i).padStart(i + linkCount, " ") + "\n";

    strChain.unshift(otherLink);
    strChain.push(otherLink);
  }

  return strChain.join("");
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(7));
