let array = ['java', 'javascript', 'python', 'html', 'css'];

let tamanho1 = array[0].length;

let tamanho2 = array[0].length;

for(let i = 0; i < array.length; i+=1 ){
    
    if(tamanho1 < array[i].length){
        tamanho1 = array[i];
    }
    if(tamanho2 > array[i].length){
        tamanho2 = array[i];
    }
}
console.log(tamanho1);
console.log(tamanho2);