// 



// Task 2

const tourist = ['Dhaka','Rajshahi','Barisal'];
console.log(tourist);
tourist.push('sylhet');
console.log(tourist);
tourist.push('chittagong','cumilla');
console.log(tourist);
tourist.pop()
console.log(tourist);

console.log(tourist.includes('Dhaka')); 

if(tourist.includes('Dhaka')){
    console.log('Dhaka is found in this array');
}else{
    console.log('Dhaka is not found in this array');
}

