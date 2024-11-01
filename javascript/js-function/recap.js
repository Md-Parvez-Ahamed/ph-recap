function add(price1,price2){
    const total = price1 + price2
    return total
}

const bill = add(5,80);
console.log(bill);

function add2 (price1,price2){
    return price1+price2
}

const bill2 = add2(5,5)
console.log(bill2);

function isEven(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;

    }
}

console.log(isEven(5));
console.log(isEven(110));