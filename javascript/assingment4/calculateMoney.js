
function calculateMoney( quantity ){
    if(quantity < 0){
        console.log('pleas provide a positive number');
    }
    // console.log(quantity);
    let perTicketPrice = 120
    let totalTicketPrice = perTicketPrice * quantity
    console.log(totalTicketPrice);
    let securityGardSalary = 500;
    let staffQuantity = 8
    let staffSalary =50
    let totalStaffSalary = staffQuantity * staffSalary
    let staffSalaryTotal = totalStaffSalary + securityGardSalary
    let profit = totalTicketPrice - staffSalaryTotal
    return profit
}

let result = calculateMoney(-93);
console.log(result);