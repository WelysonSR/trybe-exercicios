const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (array, arr) => {
  return array.map((item, index) => {
    return {
      name: item,
      average: (arr[index].reduce((acc, curr) => acc + curr, 0) / arr[index].length),
    }
  });
}

console.log(studentAverage(students, grades));