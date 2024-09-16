let wight =50;
let hight = 32;

let bmi = wight / (hight * hight)
 let result =
console.log(result);

if(result < 18.5){
    console.log('you are underweight');
}else if (result >= 18.5 && bmi <= 24.9){
    console.log('you are normal');
}else if (result >= 25 && bmi <=29.9 ){
    console.log('you are overweight');
}else{
    console.log(' you are obese');
}