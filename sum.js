// Modules protects their variable and function from leaking

var x = "Anup Kumar";
function calculate(a, b) {
    const sum = a + b;
    console.log(sum);
    
}

module.exports = {
    x: x,
    calculate: calculate,
};