function sumRang(num1,num2){//num1 and num2 is vairable
   var num1=document.getElementById('num1field').value;
   var num2=document.getElementById('num2field').value;
   var num1=Number(num1)
    var num2=Number(num2)
   
    // document.getElementById('num1field').value =num1;
    
    var sum=0; 
    if(num1>num2){//if check num1 is grater than num2
        var bigNumber=num2;
        num2=num1;
        num1=bigNumber;
    }
    // var num1=Number(num1)
    // var num2=Number(num2)
    for(var i=num1;i<=num2;i++){//i=5;5<=6
        
        sum =sum+i;//

    }
    // return sum;
    var rangSum= sum;
    document.getElementById('result').value =rangSum;
}





// function SumRang(num1,num2){//num1 and num2 is vairable
//     // num1=document.getElementById('num1field').value;
//     // num2=document.getElementById('num2field').value;
//     sum=0; 
//     if(num1>num2){//if check num1 is grater than num2
//         var bigNumber=num2;
//         num2=num1;
//         num1=bigNumber;
//     }

//     for(var i=num1;i<=num2;i++){//i=5;5<=6
        
//         sum += i;//

//     }
//     return sum;
//     // var rangSum= sum;
//     // document.getElementById('result').value =rangSum;
// }
// document.write(SumRang(6,5));