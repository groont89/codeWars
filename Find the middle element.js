function gimme(triplet) {
  let arr = [].concat(triplet).sort((a, b) => a - b);
  return triplet.indexOf(arr[1]);
}

console.log(gimme([3, 14, 5]));
