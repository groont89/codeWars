//Find the missing element between two arrays
function find(arr1, arr2) {
    let index;
    for (let i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i]);
        if (index == -1) {
            return arr1[i];
        } else {
            arr2.splice(index, 1);
        }

    }
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 5, 1];
console.log(find(arr1, arr2));