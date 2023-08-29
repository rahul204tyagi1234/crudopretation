// JavaScript program to find HCF or GCD-- Using loop
function hcfNumber2(num1,num2) {
    num1=document.getElementById('num1Field').value;
    num2=document.getElementById('num2Field').value;
    let hcfNumber;
for (let i = 1; i <= num1 && i <= num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        hcfNumber = i;

    }
}
var hcfnum= hcfNumber;
document.getElementById('result').value=hcfnum;
    
}
