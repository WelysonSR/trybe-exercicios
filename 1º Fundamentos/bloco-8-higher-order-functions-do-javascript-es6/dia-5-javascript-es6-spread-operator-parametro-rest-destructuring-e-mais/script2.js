const sum = (...rest) => rest.reduce((acc, crr) => acc + crr, 0);

console.log(sum(1000, -7));
console.log(sum(15, 10, 26));
console.log(sum(1, 37, 18, 17));