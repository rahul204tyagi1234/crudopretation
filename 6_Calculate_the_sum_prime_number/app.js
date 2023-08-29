// ...Calculate the sum of first 100 prime Numbers......................

let number = 1;

let CalPrinumber = [];//stor new value...............

do {
    if (isPrime(number)) {
        CalPrinumber.push(number);
    }
    number++;
} while (CalPrinumber.length < 100)
console.log(CalPrinumber);

function isPrime(num) {
    var sqretnum = Math.floor(Math.sqrt(num));

    var prime = num != 1;//1 will be not print.......
    for (var i = 2; i < sqretnum + 1; i++) {
        if (num % i == 0) {//check if num divide by i equal 0....
            prime = false;//so return false value..........
            break;//break statement...................
        }
    }
    return prime;//return the prime number first 100..........
}

let SumPrimeNum = 0;// store new value........
for (var x = 0; x < CalPrinumber.length; x++) {
    SumPrimeNum += CalPrinumber[x]

}
console.log('all sum of prime number is' + ' ' + SumPrimeNum);