//write a funcation Telephone number validater......................


let ar = [
  {"counCode" : "+86", "Num" : 12},
  {"counCode" : "+91", "Num" : 10},
  {"counCode" : "+92", "Num" : 8},
  {"counCode" : "+1",  "Num" : 6},
  {"counCode" : "+01", "Num" : 5},
  {"counCode" : "+51", "Num" : 4}
];

function TelephoneNumber(counCode, Num) {
  var counCode =document.getElementById('countcodefeild').value;
  var Num =document.getElementById('numfeild').value;

  for (var i = 0; i < ar.length; i++){
      
    if (ar[i].counCode == counCode) {
    
      var res = Num.toString();
    
      if (ar[i].Num == res.length) {
    
      document.getElementById('result').innerHTML= true;
      break;
    
      }
    }
    document.getElementById('result').innerHTML= false;
  }


}
// console.log(TelephoneNumber("+91", 1254465452));

