const numberOne = [12, 18, 20, 25, 96];
const numberTwo = [17, 95, 35, 27, 47];
// console.log(Math.max(...numberOne));
// console.log(Math.min(...numberOne));
const newArray = [...numberOne,...numberTwo];
// console.log(newArray);
// console.log(Math.max(...newArray));

const [a,b, ...rest] = newArray;
// console.log(a,b);
// console.log(rest);

const x = [12, 14, 17, 25];
const y = [...x];

// for (let item of x){
//     y.push(item);
//     console.log(item);
// }
y.push(23);
console.log(x);
console.log(y);