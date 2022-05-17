//How much water do I need?
function howMuchWater(water, load, clothes) {
    if (clothes > load * 2) {
        return 'Too much clothes';
    } else {
        if (clothes < load) {
            return 'Not enough clothes';
        } else {
            return +(water * Math.pow(1.1, clothes - load)).toFixed(2);
        }
    }
}
console.log(howMuchWater(10, 11, 20));