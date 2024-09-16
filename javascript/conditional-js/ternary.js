/**
 * TERNARY --> Three parts
 * 
 * ?    :
 * condition ? do something when true : do something when false
 * 
 * 
 * 
 * */ 

let age = 18

// agee >= 18 ? console.log("Your ar voter"): console.log("voter list not found");

let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0
}else{
    price = price+100
}
console.log(price);

price = isLeader === true ? 0 : price + 100;


