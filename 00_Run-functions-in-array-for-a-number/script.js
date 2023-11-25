function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

function chain(input, fns) {
  // implement the "chain" function

  let sum = input;

  fns.map((func) => {
    sum = func(sum);
  });

  return sum;
}

console.log(chain(2, [add, mult]));
