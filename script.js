let add = (a,b) => a+b;
let sub = (a,b) => a-b;
let mult = (a,b) => a*b;
let div = (a,b) => a/b;

function calculate(op,aStr,bStr){

    let a = parseInt(aStr);
    let b = parseInt(bStr);

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

let total = 0;

//Calculator display
let display = document.querySelector('.display');

//Calculator Key
let keys = document.querySelectorAll(".key");

//Calculator operation key
let opKeys = document.querySelectorAll(".op-key");

//Display helper funtions
let writeToDisplay = str => display.textContent+=str;
let clearDisplay = () => display.textContent = "";
let displayCleared = false;

let reset = () =>{
    if(displayCleared){
        operand,operator = null;
        displayCleared = false;
        return;
    }
        displayCleared = true;
        displayStr="";
        clearDisplay();   
};

let opKeyClicked = false;

keys.forEach(key=>{
    key.addEventListener('click', () =>{
        displayStr += key.textContent;
        writeToDisplay(key.textContent);
        opKeyClicked =false;
        
    });
});


opKeys.forEach(key=>{
    key.addEventListener('click', () =>{
       
        let op = key.textContent;
        let expression = display.textContent

       

        if(opKeyClicked) return;
        
        if(!expression.match(/[0-9]+(\+|-|\/|\*)[0-9]+/)){
            writeToDisplay(op);
            displayStr+=op;
            opKeyClicked = true;
            return;
        }


        operator = expression.match(/(\+|-|\*|\/)/)[0];
        let nums = expression.split(operator);
        console.log(operator)
        console.log(nums)

        let ans = calculate(operator, nums[0],nums[1]) + key.textContent;
        clearDisplay()
        writeToDisplay(ans);
    
        displayStr= ans;
        opKeyClicked = true;
    });
});


let eqKey = document.querySelector("#equal");
eqKey.addEventListener('click', () =>{
   

    let expression = display.textContent


     
    if(!expression.match(/[0-9]+(\+|-|\/|\*)[0-9]+/)){
        return;
    }


    operator = expression.match(/(\+|-|\*|\/)/)[0];
    let nums = expression.split(operator);

    if(nums[1] == 0 && operator == "/"){
        alert('You cannot divide by 0');
        clearDisplay();
        writeToDisplay(displayStr.substring(0, displayStr.length-1));
        displayStr = "";
        return;
    }

    let ans = calculate(operator, nums[0],nums[1]);
    clearDisplay()
    writeToDisplay(ans);
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

    let ans = calculate(operator,operand,operand2);
    displayStr = "";
    clearDisplay();
    writeToDisplay(ans);
    operand = ans;
    console.log(operand)
    
    return true;
}
