// function add(first,second){
//     console.log(first,second);
//     second = second || 0;
//     if(second===undefined){
//         second=0;
//     }
//     const total = first + second;
//     return total;
// }
// const result = add(10,20);
// console.log(result);

function add(first,second=20){
    let total = first + second;
    return total;
}
const result = add(20);
console.log(result);

function name(firstName,lastName='chowdhury'){
    const fullName = firstName+' '+lastName;
    return fullName;
}
const namef = name('aslam');
console.log(namef);