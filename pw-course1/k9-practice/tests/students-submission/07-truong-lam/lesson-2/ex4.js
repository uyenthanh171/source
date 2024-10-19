let height = 177;

let oddOfHeight = height % 100;

let healthyWeight = (oddOfHeight * 9) / 10;
let maxWeight = oddOfHeight;
let minWeight = (oddOfHeight * 8) / 10;

console.log(healthyWeight + "\t" + maxWeight + "\t" + minWeight);