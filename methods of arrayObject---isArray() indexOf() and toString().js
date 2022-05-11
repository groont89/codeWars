//Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
function blackAndWhite(arr) {
    let a;
    !Array.isArray(arr) ? a = "It's a fake array" :
        ((arr.indexOf(13) >= 0) && (arr.indexOf(5) >= 0)) ? 
        a = "It's a black array" :
        a = "It's a white array";
    return a;
}