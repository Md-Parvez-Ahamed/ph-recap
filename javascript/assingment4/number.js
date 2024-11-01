function deleteInvalids(numbers){
    let result = []
    for (let item of numbers){
            if( typeof item === 'number'){
                result.push(item)
            }
    }return result
    

   
}
const mark = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]
const result = deleteInvalids(mark)
console.log(result);