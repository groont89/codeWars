//Whose bicycle?
function whoseBicycle(diary1, diary2, diary3) {
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
for( let marks of Object.values(diary1)) {
    sum1 += marks;
}
for( let marks of Object.values(diary2)) {
    sum2 += marks;  
  
}
for( let marks of Object.values(diary3)) {
    sum3 += marks;  
}
let result = [sum1,sum2,sum3];
let index= result.lastIndexOf(Math.max(...result));
return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`;

}
console.log(whoseBicycle(
    {
        'algebra': 6,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 8,
        'history': 7,
        'physics': 8,
        'geography': 9,
        'chemistry': 10
      },
      {
        'algebra': 6,
        'history': 5,
        'physics': 5,
        'geography': 9,
        'chemistry': 10
      }
    ));

// function whoseBicycle(diary1, diary2, diary3) {
//     let arr = [Object.values(diary1),Object.values(diary2),Object.values(diary3)].map(v=>v.reduce((a,b)=>a+b,0))
//     let index= arr.lastIndexOf(Math.max(...arr))
//     return `I need to buy a bicycle for my ${index===0?'first':index===1?'second':'third'} son.`
//   }