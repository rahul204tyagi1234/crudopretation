//print first 10 fibonacci number........................
function fibonacciNumber() {
  var numRang = document.getElementById('numRangfield').value;
  var num1 = 0;//num1 is the vairiable
  var num2 = 1;//num2 is the vairiable
  var fNum = 0;//fNum is the vairiable
var collectedData=[]
  for (i = 1; i < numRang; i++) {
    if (i <= 1) {
      fNum = i;
    }
    else {
      fNum = num1 + num2;
      num1 = num2;
      num2 = fNum;
    }
     
    collectedData += (`${num1} + ${num2} =${num1 + num2} <br>`);
     
    document.getElementById('result').innerHTML =collectedData;

    
  }

}
// var num1 = 0;//num1 is the vairiable
// var num2 = 1;//num2 is the vairiable
// var fNum =0;//fNum is the vairiable

// for (i = 1;i<10;i++){
//     if(i<=1){
//         fNum=i;
//     }
//   else{
//     fNum=num1+num2;
//     num1=num2;
//     num2=fNum;
//   }
//   // console.log(fNum);
// var sum= (`${num1} + ${num2} =${num1+num2}`);
// console.log(sum);
// }