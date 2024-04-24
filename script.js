const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operator');
const screenArea = document.querySelector('.screen-area');

let screenAns = '';
let firstVar = 0;
let secondVar = 0;
let currAns = 0;
let operation;
let isFirstSet = false;
let isOperator = false;


const setScreenAns = (sceenAns) => {
    // if(isNaN(sceenAns)){
    //     sceenAns = 0;
    // }
    screenArea.innerHTML = sceenAns;
    console.log(sceenAns);
}


const findSecondVar = () => {
    // return second var
    const index = screenAns.indexOf(operation);
    return Number(screenAns.slice(index+1,)); 
     
}

const findFirstVar = () => {
    // return first var
    isFirstSet = true;
    return Number(screenAns);
}

const calculateAns = () => {
    if(operation == '+'){
        return firstVar + secondVar;
    }
    else if(operation == '-'){
        return firstVar - secondVar;
    }
    else if(operation == '*'){
        return firstVar * secondVar;
    }
    else if(operation == '/' && secondVar == '0'){
        console.log("Denominator can't be zero")
        return 0;
    }
    else if(operation == '/'){
        return firstVar/secondVar;
    }

}


const setDefault = () => {
    firstVar = 0;
    secondVar = 0;
    isFirstSet = false;
}


keys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.innerHTML == 'CLS'){
            screenAns = '0';
            screenArea.innerHTML = '0'
        }

        else if(key.innerHTML == '=' && isFirstSet == true){
            secondVar = findSecondVar();
            screenAns = calculateAns();
            setDefault();
        }

        else{
            screenAns += key.innerHTML;
        }

        // if(screenAns != 0)
        setScreenAns(screenAns);
        isOperator = false;

        
    })
})


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        
        // const index = screenAns.indexOf(operation);
        // console.log(index);


        if(isFirstSet == true && isOperator == false){
            secondVar = findSecondVar();
            screenAns = calculateAns();
            
        }

        if(isOperator == false){
            firstVar = findFirstVar();
        }
        
        operation = operator.innerHTML;

        if(isOperator == true){
            screenAns = screenAns.substring(0, screenAns.length - 1);
        }

        screenAns += operation;
        setScreenAns(screenAns);

        isOperator = true;
    })
})