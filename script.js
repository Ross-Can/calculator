let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mult = (a,b) => a*b;
let div = (a,b) => a/b;

function operate(op,a,b){
    switch(op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '*':
            return mult(a,b);
            break;
        case '/':
            return div(a,b);
            break;
        default:
            return null;
    }
}