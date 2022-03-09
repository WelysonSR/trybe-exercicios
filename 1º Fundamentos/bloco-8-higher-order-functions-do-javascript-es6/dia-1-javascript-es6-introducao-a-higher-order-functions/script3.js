const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) return 1;
  if ('N.A' === studentAnswer) return 0;
  return -0.5;
};

const countPoints = (rightAnswer, studentAnswers, callback) => {
  let contador = 0;
  for (let i = 0; i < rightAnswer.length; i += 1) {
    const actionReturn = callback(rightAnswer[i], studentAnswers[i]);
    contador += actionReturn;
  }
  return `Resultado do aluno: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));