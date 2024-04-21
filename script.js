const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operator');
const screenArea = document.querySelector('.screen-area');

let screenAns = '';
let firstVar = 0;
let secondVar = 0;
let currAns = 0;
let operation;


const setScreenAns = (sceenAns) => {
    screenArea.innerHTML = sceenAns;
}


const findSecondVar = () => {
    // return second var
    const index = screenAns.indexOf(operation);
    return Number(screenAns.slice(index+1,)); 
     
}

const findFirstVar = () => {
    // return first var
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
    else if(operation == '/' && secondVar === '0'){
        console.log("Denominator can't be zero")
    }
    else if(operation == '/'){
        return firstVar/secondVar;
    }
}


keys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.innerHTML == 'CLS'){
            screenAns = '';
            screenArea.innerHTML = '0'
        }

        else if(key.innerHTML == '='){
            secondVar = findSecondVar();
            screenAns = calculateAns();
        }

        else{
            screenAns += key.innerHTML;
        }

        if(screenAns != 0)
            setScreenAns(screenAns);

        
    })
})


operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        
        firstVar = findFirstVar();
        operation = operator.innerHTML;

        screenAns += operation;
        setScreenAns(screenAns);
    })
})