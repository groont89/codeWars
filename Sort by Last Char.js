//Sort by Last Char
function last(x) {
    let arr = x.split(" ");
    return arr.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)));
}


console.log(last('mane i need a taxi up to ubud'));