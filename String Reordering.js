//#15__String Reordering
//#1
// function sentence(List) {
//     List.sort((a,b)=> Object.keys(a) - Object.keys(b));
//     let result = [];
//     for(let item of List){
//         result.push(Object.values(item));
//     }
//    return (result.join(" "));
// }

// let List = [
//     {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
//     {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
// ];
// sentence(List);//'Vatsan took his dog for a spin'

//#2
function sentence(List) {
    let result = (List.sort((a,b)=> Object.keys(a) - Object.keys(b)))
    .map( obj => Object.values(obj)[0])
    .join(" ");
    return (result);
  }
  
  let List = [
    {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
    {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
  ];
  console.log(sentence(List));//'Vatsan took his dog for a spin'