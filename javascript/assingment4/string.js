


function checkName(name) {
    // Check if the input is a string
    if (typeof name !== 'string') {
        return "invalid";
    }
    
    // Convert name to lowercase to make the check case-insensitive
    const lastChar = name.toLowerCase().slice(-1);
    
    // Check if the last character is one of the specified characters
    if ('ayieouw'.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

// উদাহরণ পরীক্ষা
console.log(checkName("Tonoy"));      // Output: Good Name
console.log(checkName("Salman"));     // Output: Bad Name
console.log(checkName("utsho"));      // Output: Good Name
console.log(checkName("Rohan"));      // Output: Bad Name
console.log(checkName(12345));        // Output: invalid
