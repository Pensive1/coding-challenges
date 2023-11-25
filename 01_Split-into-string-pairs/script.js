function solution(str) {
  const pairStr = (input) => {
    const strGroups = [];
    let strPair = "";

    for (let i = 0; i < input.length; i += 2) {
      strPair = input.slice(i, i + 2);
      //   console.log(strPair);
      strGroups.push(strPair);
    }
    return strGroups;
  };

  if (str.length % 2 === 0) {
    return pairStr(str);
  } else {
    const evenStr = str + "_";
    return pairStr(evenStr);
  }
}

console.log(solution("abcdefg"));
