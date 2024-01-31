function solution(inputString) {
  if (inputString === "" || !inputString) return false;

  const noSpaceSample = inputString.toLowerCase().replace(/ /, "").split("");
  return noSpaceSample.join("") === noSpaceSample.reverse().join("");
}

console.log("aabaa", solution("aabaa"));
console.log("a", solution("a"));
console.log("abc", solution("abc"));
console.log("Kayak", solution("Kayak"));
console.log("taco cat", solution("taco cat"));
console.log("Never Odd or Even", solution("Never Odd or Even"));
console.log("Step on no pets", solution("Step on no pets"));
console.log("UFO Tofu", solution("UFO Tofu"));
console.log("Palindrome", solution("Palindrome"));
