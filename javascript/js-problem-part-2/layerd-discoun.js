/***
 * 
 * Multi layer Discount
 * 
 * first 100 must 100 TK
 * 101 -200 must 90 TK
 * above 200
 * 
 * */

function layeredDiscountedTotal (quantity){
    const first100Price = 100;
    const scend200Price = 90;
    const above200Price = 70;
    if(quantity <= 100){
        const total = quantity * first100Price
        return total
    }
    else if (quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingQuantity = quantity - 100
        const remainingTotal =remainingQuantity *  scend200Price
        const total = first100Total + remainingTotal
        return total
    }
    else{
        const first100Total = 100 * first100Price;
        const scend200PTotal = 100 * scend200Price;
        const remainingQuantityTotal = quantity - 200
        const remainingTotal = first100Total + scend200PTotal + remainingQuantityTotal
        return 
    }

}