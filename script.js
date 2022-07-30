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

//Stops multiple operations from being writen
let opKeyClicked = false;

//clears display after equal sign is press followed by a number
let readyForReset = false;

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


//controls for number keys
keys.forEach(key=>{
    key.addEventListener('click', () =>{

        if(readyForReset){
            clearDisplay();
            readyForReset = false;
        }

        writeToDisplay(key.textContent);
        opKeyClicked =false;
    });
});

//Controls for operation keys
opKeys.forEach(key=>{
    key.addEventListener('click', () =>{
       
        let op = key.textContent;
        let expression = display.textContent;
         
        if(opKeyClicked) return;
        
        if(!expression.match(/[0-9]+(\+|-|\/|\*)[0-9]+/)){
            writeToDisplay(op);
            displayStr+=op;
            opKeyClicked = true;
            return;
        }
        operator = expression.match(/(\+|-|\*|\/)/)[0];
        let nums = expression.split(operator);

        let ans = calculate(operator, nums[0],nums[1]) + key.textContent;
        clearDisplay()
        writeToDisplay(ans);
    
        displayStr= ans;
        opKeyClicked = true;
    });
});

//controls for equal key
let eqKey = document.querySelector("#equal");
eqKey.addEventListener('click', () =>{
    let expression = display.textContent;
    if(!expression.match(/[0-9]+(\+|-|\/|\*)[0-9]+/)){
        return;
    }
    operator = expression.match(/(\+|-|\*|\/)/)[0];
    let nums = expression.split(operator);

    if(nums[1] == 0 && operator == "/"){
        alert('You cannot divide by 0');
        clearDisplay();
        writeToDisplay(nums[0])
        return;
    }

    let ans = calculate(operator, nums[0],nums[1]);
    clearDisplay()
    writeToDisplay(ans);

    readyForReset = true;
});