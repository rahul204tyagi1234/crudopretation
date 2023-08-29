
function sumOddFibonacciNumbers(Num) {//Num is the variable 
  var Num=document.getElementById('numfeild').value;
  let sum = 0;
  let fnum = 0;
  let SecNum = 1;

  while (SecNum <= Num) {
    if (SecNum % 2 !== 0) {//if check SecNum is not divided by 2
      sum += SecNum;// than sum
    }

    const next = fnum + SecNum;
    fnum = SecNum;
    SecNum = next;
  }

  var x= sum;
  document.getElementById('result').innerHTML =x;
}

// Example usage
// const Num = 50;
// const result = sumOddFibonacciNumbers(Num);
// document.write(`<h1> Sum odd fibonacci number  ${result}</h1>`); // Output: 44




