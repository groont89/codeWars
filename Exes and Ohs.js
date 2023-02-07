function XO(str) {
  let sum = {};
  let arr = str.toLowerCase().split("");
  arr.map(function (e) {
    sum[e] = !sum[e] ? 1 : sum[e] + 1;
  });
  return sum.x == sum.o;
}
console.log(XO("XoxOasax"));
