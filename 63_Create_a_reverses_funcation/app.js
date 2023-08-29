//....Create a function that reverses an array....................
function reversFun() {
    // let ar = [40, 60, 80, 50, 20, 30];
    var array = document.getElementById('arrayfield').value;
    let revers = []
    for (var index = array.length; index >= 0; index--) {
        revers.push(array[index])
        document.getElementById('result').innerHTML = revers;
    }

}
// let ar = [40, 60, 80, 50, 20, 30];
// let revers = []//new value store in the array.....................
// //....loop start from ar.length and 0 is grater than index value ......
// for (var index = ar.length; index >= 0; index--) {
//     revers.push(ar[index])
// }
// console.log(revers);//find the result...........
// //revers mathod...............
// // for (let reverses of revers){
// //     console.log(reverses);
// // }