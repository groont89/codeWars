// Find the position!
function position(letter) {
    let result = "abcdefghijklmnopqrstuvwxyz".indexOf(letter) + 1;
    return `Position of alphabet: ${result}`;
}

console.log(position("a"));