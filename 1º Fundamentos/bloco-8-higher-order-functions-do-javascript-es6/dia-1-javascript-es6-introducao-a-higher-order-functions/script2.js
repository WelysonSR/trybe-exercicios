const checkerNumber = (myNumber, number) => myNumber === number;

const drawResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Você Ganhou!!!' : 'Tente novamente!';
};

console.log(drawResult(2, checkerNumber));