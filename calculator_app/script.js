const display = document.getElementById("display");
document.addEventListener('keydown',handleKeyboardInput)

function appendDisplay(input){

    display.value += input;
}

function clearDisplay(){
    display.value = '';
}

function deleteLastItem(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'Error';
    }
}

function handleKeyboardInput(event){
    const key= event.key
    if( key.length === 1 && /\d/.test(key)){
        appendDisplay(key);
    }else if(key==='+' || key==='-' || key==='/' || key==='%' || key==='*'){
        appendDisplay(key);
    }else if(key==='.'){
        appendDisplay(key)
    }else if(key==='Enter' || key=== '='){
        calculate();
    }else if(key==='Backspace'){
        deleteLastItem();
    }else if(key ==='Delete'){
        clearDisplay();
    }
}