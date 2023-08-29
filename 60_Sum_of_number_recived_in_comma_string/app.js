//..Calculate the sum of Number recived in comma  delimited string................
//....
function recivedDelimited() {

   var str = document.getElementById('strfeild').value;

   let cstr = str.split(",");
   let Changestr = str.split(",");

   let sum = 0;
   let i;
   for (i = 0; i < Changestr.length; i++) {
      let numberstr = parseFloat(Changestr[i]);


      sum += numberstr;
   }
   document.getElementById('result').value = sum;


}