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
            case 'X':
            return mult(a,b);
            break;
        case '/':
            return div(a,b);
            break;
        default:
            return null;
    }
}

let displayStr = "";
let operand = null;
let operator = null;


let display = document.querySelector('.display');
let writeToDisplay = str => display.textContent+=str;
let clearDisplay = () => display.textContent = "";
let reset = () =>{
    operand,operator = null;
    displayStr="";
    clearDisplay();
};

let keys = document.querySelectorAll(".key");
 
keys.forEach(key=>{
    key.addEventListener('click', () =>{
        displayStr += key.textContent;
        writeToDisplay(key.textContent);
    });
});



let opKeys = document.querySelectorAll(".op-key");
opKeys.forEach(key=>{
    key.addEventListener('click', () =>{
       
        if(checkForEval()){
            writeToDisplay(key.textContent);
            return;
        }

        operand = parseInt(displayStr.valueOf());
        displayStr="";
        operator = key.textContent;
        writeToDisplay(key.textContent);
    });
});

let eqKey = document.querySelector("#equal");
eqKey.addEventListener('click', () =>{
   let n = parseInt(displayStr.valueOf());
   if(n == 0 && operator == "/"){
       alert('You cannot divide by 0');
       writeToDisplay(displayStr.substring(0, displayStr.length-1));
       displayStr = "";
       return;
   }
   checkForEval();
});


userEnteredEquation = () => operand != null;

function checkForEval(){
    if(!userEnteredEquation()) return false;

    let operand2 = parseInt(displayStr);

    if(operand2 == 0 && operator == "/"){
       alert('You cannot divide by 0');
       writeToDisplay(displayStr.substring(0, displayStr.length-1));
       displayStr = "";
       return;
   }

    let ans = operate(operator,operand,operand2);
    displayStr = "";
    clearDisplay();
    writeToDisplay(ans);
    operand = ans;
    console.log(operand)
    
    return true;
}
