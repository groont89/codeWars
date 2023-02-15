function trim(str, size) {
    return str.length <= size ? str :
        str.length > size && size > 3 ? str.slice(0, size - 3) + "..." :
        str.length > size && size <= 3 ? str.slice(0, size) + "..." :
        false;
}

console.log(trim("Hey", 2));