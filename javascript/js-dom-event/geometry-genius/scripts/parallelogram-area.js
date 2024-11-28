// console.log('parallelogram-area connected');
// function calculateParallelogramArea(){
//     console.log('parallelogram area inside');
//     const base = getParallelogramBase()
//     console.log(base);

// }

// function getParallelogramBase(){
//     const parallelogramBaseInput = document.getElementById('parallelogram-base');
//     console.log(parallelogramBaseInput);
//     const parallelogramText = parallelogramBaseInput.value;
//     console.log(parallelogramText);
//     const base = parseFloat(parallelogramText)
//     return base
// }

function calculateParallelogramArea(){

    const base = getInputValueByID('parallelogram-base');
    console.log('base value',base);
    
    const hight = getInputValueByID('parallelogram-hight');
    console.log('hight value',hight);

    const area = base * hight
    console.log(area);
    setInnerTextById('parallelogram-area',area)
}

function getInputValueByID(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText)
    // console.log(inputValue);
    return inputValue ;
}

function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText = area
}