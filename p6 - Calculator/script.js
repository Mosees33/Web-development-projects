let display = document.querySelector("input[name='display']");

function append(val){
    
    let last = display.value.slice(-1);
    let operators = ['+', '-', '*', '/'];

    if(display.value === '' && ['+', '*', '/'].includes(val)) return;

    if(operators.includes(last) && operators.includes(val)) return;

    display.value += val;
}

function clearDisplay(){
    display.value = '';
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error'
    }
}