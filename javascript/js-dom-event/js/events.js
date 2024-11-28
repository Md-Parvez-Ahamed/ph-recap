console.log('Event JS');

function makeRed(){
    document.body.style.backgroundColor = 'red'
}

// 
const makeBlueButton = document.getElementById('make-blue')

makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';    
}


const makePink = document.getElementById('make-pink')
console.log(makePink);

makePink.addEventListener('click', callPink)

function callPink (){
    document.body.style.backgroundColor = 'pink'
}

const makeGreen = document.getElementById('make-green');

makeGreen.addEventListener('click', function callGreen() {
    document.body.style.backgroundColor = 'green'
})
