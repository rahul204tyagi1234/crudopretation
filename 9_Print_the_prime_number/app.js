// //.....Prime the first 100 prime numbers...............

// let number =1;

// let CalPrinumber =[];//store new value.......

// do{
//     if(isPrime(number)){
//         CalPrinumber.push(number);
//     }
//     number++;
//     var x=document.getElementById('xfield').value;
// }while(CalPrinumber.length<x)
// console.log(CalPrinumber);

// function isPrime(num){
//     var sqretnum = Math.floor(Math.sqrt(num));

//     var prime =num !=1;//num is not equal 1..............
//     for (var i=2;i<sqretnum+1;i++){
//         if(num%i==0){//check the condition if num i divided by iequal 0.............
//             prime=false;//than return false........
//             break;//break statement ..................................
//         }
//     }
//     document.getElementById('result').innerHTML= prime;//return value........
// }

function countprime(){
    var num=document.getElementById('numfeild').value;
    let count=0
    let i,j 
    for(j=2;j<=num;j++)
    {
    for( i=1;i<=j;i++)
    {
      if(j%i==0)
       count++
      
    }
    
    if(count==2)
    
    // console.log(j)
    // // count=0
    count=0;
    
    
    
    
    document.getElementById('result').innerHTML += i;
}
}





