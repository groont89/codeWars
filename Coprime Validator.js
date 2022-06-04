//Coprime Validator
function isCoprime(x, y) {
    let countOne = [];
    let countTwo = [];
    for (let i = 0; i <= x; i++) {
        if (x % i == 0) {
            countOne.push(i);
        }
    }
    for (let j = 0; j <= y; j++) {
        if (y % j == 0) {
            countTwo.push(j);
        }
    }
    return ((countOne.filter(k => countTwo.indexOf(k) > 0)).length > 0) ? 
    false : 
    true;

}
console.log(isCoprime(27, 20));