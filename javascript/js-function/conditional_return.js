function isOdd(number){
    if(number % 2 == 1){
        return true
    }
    return false
}

console.log(isOdd(5));
console.log(isOdd(110));

function evenSizedString(str){
    const size = str.length
    if(size % 2 === 0){
        console.log(even);
        return true;
    }else{
        console.log(odd);
        return false;
    }
    console.log(size);
    console.log(str);

}
// evenSizedString('Dhaka')

function doubleOrTriple (number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
}

function numberOfElements(number){
    const len = number.length;
    return len;
}

numberOfElements([12,45,78,45,1214,4,6])