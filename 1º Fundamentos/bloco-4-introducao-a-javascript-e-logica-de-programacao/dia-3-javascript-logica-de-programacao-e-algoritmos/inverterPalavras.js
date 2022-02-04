let word = 'tryber';
let verso = [];

for (let i = word.length-1; i >= 0; i-=1) {
   verso+= word[i];
}
console.log(verso);