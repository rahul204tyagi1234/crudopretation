//...Print all even number from 0--10;..................ar............
//.. loop will be start from 0and last 10.......
function printeven(num){
   var num=document.getElementById('numfield').value;
   var even= [];
   for(var i =0;i<=num;i++){//11<=10
      //...if i divided by 2 fully........
      if (i%2==0){//10%2==0
         //then print the value of i......
      //  document.write(`<h1>${i}</h1>`);//2,4,6,8,10
      //  document.write("<br>");
       even.push(i)
      }
   }
   // var evenNumber = even;
   document.getElementById('result').innerHTML  = even;

}


