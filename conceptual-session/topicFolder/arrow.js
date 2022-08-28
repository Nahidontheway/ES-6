function run(){
    console.log('Hello World')
}
run();

const add = () => console.log('hello world from arrow function');
add();


function mutliplyX(x){
    return x*2;
}
console.log(mutliplyX(4));


const multiply = x =>(x*2);
console.log(multiply(5));


const multiLIne = (a,b) => {
    return a/b;
}
console.log(multiLIne(25,5));


const defaultPara = (a,b=0) => {
    return a+b;
}
console.log(defaultPara(25,25));