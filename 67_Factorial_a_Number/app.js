function factorial(num1){//num1 is the variable
    num1=document.getElementById('num1field').value;
    // var num1=Number(num1)
    var re = 1;
    if( num1 >1){//if check num1 is grater than 1......
        for (var i =num1;i >=1; i--){//i=5;5>=1
            re =re*i;//1 = 1*5=5
        }
    }
    var factorialNum= re;//return first time re= 5
    document.getElementById('factorialnumber').value=factorialNum;
}
// console.log(factorial(3));
// var num1 =5;//5 is the value
// document.write(`<h1>${num1}   Of Factorial Number is =  ${Factorial(num1)}</h1>`);
