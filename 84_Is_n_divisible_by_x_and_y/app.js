

// Create a funcation that checks it a numbers N is 
// divisible by two numbers X and Y All infounds are possitive Non-ziro digits.
function division() {
    var num1 = +(document.getElementById('num1field').value);
    var num2 = +(document.getElementById('num2field').value);
    var num3 = +(document.getElementById('num3field').value);
    // var num1 =Number.parseInt(num1);

    if (num1 % num2 == 0) {
        if (num1 % num3 == 0) {
            document.getElementById('result').innerHTML = true

        }else{
            document.getElementById('result').innerHTML = false
        }
    }
     else {
        document.getElementById('result').innerHTML = false

    }


}

    // console.log(DivisionN(54,2,3));//output true
