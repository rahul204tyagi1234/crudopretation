// //..Sort an array from lowest to highest......................
// var Arr = [11, 45, 50, 390, 20, 80]
// //...loop will be start from 1 and i is less than Arr.length.................
// for (var i = 1; i < Arr.length; i++) {
//     //.....loop will be start from 0 and check j is less than i.......... 
//     for (var j = 0; j < i; j++) {  //0<1
//         //...if check the condition Arr[i] is less than Arr[j]........   
//         if (Arr[i] < Arr[j]) {  //45<11

//             //...new variable is a x equal Arr[i].........
//             var x = Arr[i];//45
//             // ..if Arr[1] equal will be Arr[j].........   
//             Arr[i] = Arr[j]; //11
//             //...than Arr[j] equal wiil be x..............
//             Arr[j] = x;   //45
//         }
//     }
// }
// console.log(Arr);

function lowestTOhigest() {
    // var lowestarray=[];
    var array = document.getElementById('arrayfield').value;
    var splited = array.split(",")
      var lowestarray=[];
     
    // var Arr = [11, 45, 50, 390, 20, 80]

    for (var i = 1; i < splited.length; i++) {

        for (var j = 0; j < i; j++) {

            if (splited[i] < splited[j]) {//390<50

                var x = splited[i];

                splited[i] = splited[j];

                splited[j] = x;
                // lowestarray.push(splited[j]);
                //document.getElementById('result').innerHTML =  lowestarray;
                // document.getElementById('result').innerHTML = lowestarray;
            }
            
        }
        // document.getElementById('result').innerHTML = lowestarray;
        // document.getElementById('result').innerHTML = revers;
    }
    document.getElementById('result').innerHTML = splited;


}

// var Arr = [11, 45, 50, 390, 20, 80]

// for (var i = 1; i < Arr.length; i++) {

//     for (var j = 0; j < i; j++) {

//         if (Arr[i] < Arr[j]) {//390<50

//             var x = Arr[i];

//             Arr[i] = Arr[j];

//             Arr[j] = x;
//         }
//     }
// }
// console.log(Arr)




