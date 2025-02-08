console.log('app.js connected');

const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn);

for(const btn of allBtn){
    btn.addEventListener('click',function(e){
        console.log('btn clicked');
        // console.log(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText);
        const playerName = e.target.parentNode.parentNode.childNodes[1].innerText
        const playerCategory = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText
        const playerPrice = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        console.log(playerCategory);
        const selectedPlayerContainer = document.getElementById('selected-player-container');
        
        e.target.setAttribute('disabled',false)
        //Validation
        const firstCart = getConvertedValue('cart')
        if(firstCart+1 > 6){
            alert('Your limit is over');
            return
            
        }



        // update Budget

        const budget = getConvertedValue('budget')
        const updateBudget = budget - playerPrice
        document.getElementById('budget').innerText = updateBudget

        const cart = getConvertedValue('cart')
        const updateCart = cart + 1
        document.getElementById('cart').innerText = updateCart

        const left = getConvertedValue('left');
        const updateLeft = left - 1
        document.getElementById('left').innerText = updateLeft
        

        // Create Html Element
        const div = document.createElement('div')
        div.classList.add('flex')
        // div.classList.add('bg-red-100')
        //  div.classList.add('justify-around')
        // div.classList.add('items-center')
    
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p3.classList.add('text-center')

        // set innerText
        p1.innerText = playerName;
        p2.innerText = playerPrice;
        p3.innerText = playerCategory;

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedPlayerContainer.appendChild(div)

        updateCost(playerPrice)
        updateGrandTotal()
        
    })
}

function updateCost(value){
    console.log(typeof value);
    const totalCost = getConvertedValue('totalCost')
    const sum = totalCost + parseInt(value)
    
    document.getElementById('totalCost').innerText = sum ;
     
}

function updateGrandTotal (status){

    const totalCost = getConvertedValue('totalCost')
    if(status == undefined){
        console.log('status ok');
        const totalCost = getConvertedValue('totalCost')
        document.getElementById('grandTotal').innerText = totalCost
    }else{
        console.log('status ar maje nai');
        const cuponFiled= document.getElementById('cuponFiled').value

        if(cuponFiled == 'love42'){
            console.log('discount paici mama');
            const discount = totalCost * .2
            console.log(discount);
            document.getElementById('grandTotal').innerText = totalCost -discount
        }else{
            console.log('delona');
        }
    }
    // console.log(status);
    
}




function getConvertedValue (id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseInt(element)
    console.log(convertedElement);
    return convertedElement;
}

// const result = getConvertedValue('budget')