// function that check str is palindrome or not
function palindrome() {
  var str=document.getElementById('strfeild').value
  let ar = str.length - 1;
  for (let i = 0; i < ar / 2; i++) {
      let a = str[i];//forward character
      // Arr=  Arr.map((d)=> Number(d))
      let b = str[ar - i];//backward character
      if (a != b) {
          // return false if string not match
          document.getElementById('result').innerHTML=false;
          break;
          // return false;
      }
      document.getElementById('result').innerHTML=true;
  }
  /// return true if string is palindrome
  // return true;

}
// console.log(palindrome('amsa'));