// JavaScript program to find LCM...........
function lcmNumber(num1, num2) {
    num1 = document.getElementById('num1Feild').value;
    num2 = document.getElementById('num2Feild').value;
    let lcmNum = (num1 > num2) ? num1 : num2;

    // while loop
    while (true) {
        if (lcmNum % num1 == 0 && lcmNum % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${lcmNum}`);
            break;
        }
        lcmNum++;
    }
    var lcmNum1 = lcmNum++
    document.getElementById('result').value = lcmNum1;

}