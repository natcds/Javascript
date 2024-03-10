/*
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
*/

const points = (twoPointers, threePointers) => {
    return (2 * twoPointers) + (3 * threePointers)
}

console.log(points(1, 1))
console.log(points(7, 5))
console.log(points(38, 8))