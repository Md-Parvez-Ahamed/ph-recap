/*****
 * 
 * array has some duplicate elements
 * []
 * 
 * 
 * */ 

function noDuplicate (array){
    // console.log(array);
    const unique = []
    for(const item of array){
        // console.log(item);
        if(unique.includes(item) === false){
            unique.push(item)
        }
    }
    return unique
}

const biryaniKor = ['abul','babul','cabul','abul','babul','dabul','kabul','cabul']

const uniqueArray = noDuplicate(biryaniKor)
console.log(uniqueArray);



const numbers = [1,5,61,5,87,5,81,61];

