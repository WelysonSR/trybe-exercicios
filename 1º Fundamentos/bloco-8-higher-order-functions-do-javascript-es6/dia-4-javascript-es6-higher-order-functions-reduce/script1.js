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

const flatten2 = (arr) => {
  return arr.reduce((acc, crr) => {
    crr.reduce((accumulator, interaction) => acc.push(interaction), 0)
    return acc;
  }, [])
}

const flatten3 = (arr) => {
  return arr.reduce((acc, crr) => acc.concat(crr), [])
}

console.log(flatten(arrays));
console.log(flatten2(arrays));
console.log(flatten3(arrays));