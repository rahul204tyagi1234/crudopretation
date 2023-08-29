//..Reverse a string............
function reversString() {

    var value = document.getElementById('valuefield').value;
    console.log(value.length);
    var revers = "";//
    //.....loop start from value of string sbtract(-) 1 in the length and i is grator than or equal 0 .........
    for (var i = value.length - 1; i >= 0; i--) {
        // console.log(value[i])
        //....will add string value in revers variable.............
        revers += value[i];

    }
    // console.log(revers);
    document.getElementById('result').innerHTML=revers;

}
// var value = "Rahul";
// console.log(value.length);
// var revers = "";//
// //.....loop start from value of string sbtract(-) 1 in the length and i is grator than or equal 0 .........
// for (var i = value.length - 1; i >= 0; i--) {
//     console.log(value[i])
//     //....will add string value in revers variable.............
//     revers += value[i];

// }
// console.log(revers);//find the final result .............