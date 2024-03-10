/*

Create a function that takes voltage and current and returns the calculated power.

*/

const circuitPower = (voltage, current) => {
    return voltage * current
}

console.log(circuitPower(230, 10))
console.log(circuitPower(110, 3))
console.log(circuitPower(480, 20))