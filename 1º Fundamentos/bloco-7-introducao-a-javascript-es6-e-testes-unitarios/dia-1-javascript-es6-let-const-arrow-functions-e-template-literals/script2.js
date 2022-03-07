const fatorial = (num) => {
  let n = num;
  for (let i = 1; i < num; i += 1) {
    n *= i
  }
  return n;
}
console.log(fatorial(5));