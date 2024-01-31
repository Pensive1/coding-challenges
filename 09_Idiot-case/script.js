"use strict";

const convertForm = document.querySelector(".case-conv");
const txtInput = document.querySelector(".case-conv__input");
const conversionOutput = document.getElementById("conv-output");

// NOTE: I'm sure this function will be more efficient with regex.
// For now, do this to the best of your ability

const idiotCase = (str) => {
  const strArr = str.toLowerCase().split("");
  const output = [];

  for (let i = 0; i < strArr.length; i++) {
    let prevLetr = output[i - 1];
    let charBeforeSpace = output[i - 2];
    let charBeforeSpaceUpper =
      prevLetr === " " && charBeforeSpace === charBeforeSpace.toUpperCase();
    let charBeforeSpaceLower =
      prevLetr === " " && charBeforeSpace === charBeforeSpace.toLowerCase();

    //Push empty spaces
    if (strArr[i] === " ") {
      output.push(strArr[i]);
      continue;
    }

    // Capitalise first strArr
    if (i === 0) {
      output.push(strArr[i].toUpperCase());
      continue;
    }

    // If prev strArr exists, is not empty and  is uppercase -> Lower case it
    if (
      (prevLetr !== " " && prevLetr === prevLetr.toUpperCase()) ||
      charBeforeSpaceUpper
    ) {
      output.push(strArr[i].toLowerCase());
      continue;
    }

    // If prev strArr exists, is not empty and  is lowercase -> capitalise it
    if (
      (prevLetr !== " " && prevLetr === prevLetr.toLowerCase()) ||
      charBeforeSpaceLower
    ) {
      output.push(strArr[i].toUpperCase());
      continue;
    }
  }
  return output.join("");

  return jumblestrArr(strArr);
};

console.log(idiotCase("This is my house"));
console.log(idiotCase("And this is my second house"));

convertForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(txtInput.value);
  conversionOutput.textContent = idiotCase(txtInput.value);
});
