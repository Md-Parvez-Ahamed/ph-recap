console.log('app.js connect');

const allBtn = document.getElementsByClassName('add-to-cart')
// console.log(allBtn);

for(const btn of allBtn){
    // console.log(btn);
    const className = 'green'
    btn.addEventListener('click',function(e){
        //   console.log(e.target.childNodes[4].innerText);
        // set price,class, name
        const price = e.target.childNodes[2].innerText;
        const ticketClass = className
        const name = e.target.childNodes[0].innerText

        console.log(price);
        
        const ticketContainer = document.getElementById('ticketContainer')

        const div = document.createElement('div')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = name
        p2.innerText = ticketClass
         p3.innerText = price

        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        ticketContainer.appendChild(div)

    })

}

