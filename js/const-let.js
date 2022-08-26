let numbers = [12,15,56,78,14,12];
numbers.pop();
numbers.push(23);
numbers[1]=90;
let sum = 0;
for(let i=0 ; i<numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
console.log(sum);