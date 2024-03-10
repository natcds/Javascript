/*
Create a function that takes an array containing only numbers and return the first element.
*/

const getFirstValue = (array = []) => {
    return array[0]
}

console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))