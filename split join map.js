 //методы split join map  (стрелочная функция)

 function splitAndMerge(str, sp) {
     let words = str;
     return words.split(" ").map(index => index.split("").join(sp)).join(" "); //разделили строку на массив элементов рзделенных пробелом. 
 }
 console.log(splitAndMerge("my name is jhon", "-"));
 // раскрытие стрелочной функцию в обычную
 // function splitAndMerge(str,sp){
 //   let word = str;
 //   let wordSplit = str.split(" ");
 //   let wordJoinWith = wordSplit.map ( (index) => {
 //     return index.split("").join(sp);
 //   });
 //   let theEnd = wordJoinWith.join(" ");
 // }
 // console.log(splitAndMerge("my name is jhon", " -"));