//Power of two
function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}
console.log(isPowerOfTwo(6));