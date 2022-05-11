//Chain me
function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}

function chain(input, fs) {
    return fs.reduce(function (input, fn) {
        return fn(input)
    }, input);
}
console.log(chain(3, [add, mult]));