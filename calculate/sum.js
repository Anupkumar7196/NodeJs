// Modules protects their variable and function from leaking

var x = "Anup Kumar";
function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
    
}
// Exporting a function
module.exports = {calculateSum};