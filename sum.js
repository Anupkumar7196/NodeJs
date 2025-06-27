// Modules protects their variable and function from leaking


function calculate(a, b) {
    const sum = a + b;
    console.log(sum);
    
}

module.exports = calculate;