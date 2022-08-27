/* Three types of scopes 

1. Global scopes
2. Local scopes
3. Block scopes */

//global scope
const x = 5;
{
    const x = 10;
    console.log('inside block element ',x);
}
console.log('outside block element ', x);


// block scope
let y = 15; // global variable can changes from anywhere
{
    y = 20;
    console.log('inside block element ',y);
}
console.log('outside block element ', y);


// local scope
function add(){
    const total = 3+5;
    console.log('Addition : ', total);
}
add();
