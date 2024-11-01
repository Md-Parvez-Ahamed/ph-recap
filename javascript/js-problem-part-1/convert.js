// 12 inch 1 feet

function inchToFeet (inch){
    const feet = inch /12
    return feet;

}

// const result = inchToFeet(75)
// console.log(result);

function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12
    const result = feetNumber + " Fit " + inchRemaining + " inch"
    return result
}

// const result = inchToFeet2(75)
// console.log(result);

function mileToKilometer (mile){
    const kilo = mile * 1.609344;
    return kilo
}

const result = mileToKilometer(12)
console.log(result);