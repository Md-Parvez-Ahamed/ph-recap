/****
 * 
 * MULTI_LEVEL CONDITION
 * 
 * 
 */

const price = 4700;

if(price >=5000){
    const discount = price * 10 /100;
    const payAmount = price - discount
    console.log(payAmount);
}
else if(price > 4500){
    const discount = price * 5 /100;
    const payAmount = price - discount
    console.log(payAmount);
}
else{
    console.log(price);
}