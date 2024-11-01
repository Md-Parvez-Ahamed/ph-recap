
function getCheapestObject (phones){
    // console.log(phones);
    let min = phones[0];
    for(const phone of phones){
        // console.log(phone);
        if(phone.price < min.price){
            min= phone
        }
    }
    return min
}

const mobiles = [
    { name :'Samsung', price : 20000, camera : '12mp', color : "Black"},
    { name :'xoami', price : 18000, camera : '12mp', color : "Black"},
    { name :'Oppo', price : 30000, camera : '12mp', color : "Black"},
    { name :'Iphone', price : 100000, camera : '12mp', color : "Black"},
    { name :'Walton', price : 31000, camera : '12mp', color : "Black"},
    { name :'HTC', price : 70000, camera : '12mp', color : "Black"},
    { name :'symphony', price : 20000, camera : '12mp', color : "Black"},
]

const cheapPhone = getCheapestObject(mobiles)
console.log(cheapPhone);