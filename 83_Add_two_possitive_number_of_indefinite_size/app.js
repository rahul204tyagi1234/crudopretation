
var n1 = "2909034221912398942349";
var n2 = "1290923909029309499";
var sum = add(n1, n2);

// println(n1, "\n", n2, "\n", sum);

function add(sNumber1, sNumber2) {
    var s = "";
    var carry = 0;

    var maxSize = Math.max(sNumber1.length, sNumber2.length);

    for (var i = 0; i < maxSize; i++) {
        var digit1 = digitFromRight(sNumber1, i);
        var digit2 = digitFromRight(sNumber2, i);

        var sum = digit1 + digit2 + carry;
        var digitSum = sum % 10;
        carry = sum >= 10 ? 1 : 0;

        s = digitSum.toString() + s;
    }

    if (carry > 0)
        s = carry + s;

    return s;
}

function digitFromRight(s, digitNo) {
    if (digitNo >= s.length)
        return 0;

    var char = s[s.length - 1 - digitNo];
    return parseInt(char);
}
console.log(n1, "\n", n2, "\n", sum);


// let num1 = "789456589585857525458754585758547585575897595185245748445";
// let num2 = "789512587984587955955585958855985885587898857898558988898";

function addTwoNum(num1, num2) {
    var num1 = document.getElementById('num1feild').value;
    var num2 = document.getElementById('num2feild').value;

    let add = BigInt(num1) + BigInt(num2)
    let convert = add.toString();
    // return convert;
    // 
    document.getElementById('result').innerHTML=convert;
}

// addTwoNum(num1, num2);

