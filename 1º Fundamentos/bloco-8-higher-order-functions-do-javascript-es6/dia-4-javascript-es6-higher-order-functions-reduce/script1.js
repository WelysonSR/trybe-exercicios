const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (arr) => {
  return arr.reduce((acc, crr) => {
    for (const iterator of crr) {
      acc.push(iterator)
    }
    return acc;
  }, [])
}
console.log(flatten(arrays));