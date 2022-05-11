const arr = [1, 5, 6, 8, 9, 3];

                              // 0   1
                              // 1   5
                              // 6   6
                              // 12  8
                              // 20  9
                              // 29  3
                              // 32
const rez = arr.reduce((sum,current) => sum +current);
console.log(rez);

const arr2 = [ 'apple', 'pear', 'plum'];

const rez2= arr2.reduce((sum, current) => `${sum}, ${current}`);
console.log(rez2);