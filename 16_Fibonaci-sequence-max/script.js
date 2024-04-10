const fibMax = (n) => {
  const seq = [0, 1];

  while (seq.at(-1) <= n) {
    const seqIteration = seq.at(-2) + seq.at(-1);
    seq.push(seqIteration);
  }

  if (seq.at(-1) > n) seq.pop();

  return seq;
};

console.log(fibMax(5));
console.log(fibMax(20));
console.log(fibMax(30));
