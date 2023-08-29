// // A common morder use is the ROT 13 chipher where the value of the 
// //latters are shifted by 13 place.
// function ceaserCipher(str) {
//   //Deciphered reference letters
//   let allcode = {
//     a: 'n', b: 'o', c: 'p',
//     d: 'q', e: 'r', f: 's',
//     g: 't', h: 'u', i: 'v',
//     j: 'w', k: 'x', l: 'y',
//     m: 'z', n: 'a', o: 'b',
//     p: 'c', q: 'd', r: 'e',
//     s: 'f', t: 'g', u: 'h',
//     v: 'i', w: 'j', x: 'k',
//     y: 'l', z: 'm', " ": " "
//   }
  
//   //convert the string to lowercase
//   //   str = str.toLowerCase();

//   //decipher the code
//   let caserstr = '';
//   for (let i = 0; i < str.length; i++) {
//     caserstr += allcode[str[i]];
//   }
//   //return the output
//   return caserstr;
// }
// //Input:
// console.log(ceaserCipher('abc'));//rahul
// console.log(ceaserCipher('nop'));//free code camp

function rot13(str){
  var word = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var newWord ="NOPQRSTUVWXYZABCDEFGHIJKLM";
  for(var i=0;i<=str.length-1;i++){
    for( j=i;j<i;j++)
    var reverse=word[i];
    word[i]=newWord[j];
    reverse=newWord[j];

  }
  return reverse;
}
console.log(rot13("B"));





// const rot13 = (message) => {
//   const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
//   return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
// }
// console.log(rot13('abcd'));


// function rot1(str) {
//   let unicode = [];
//   for (let letter of str) {
//     if (letter.match(/[A-M]/)) {
//       unicode.push(letter.charCodeAt() - 1 + 2);
//     } else if (letter.match(/[N-Z]/)) {
//       unicode.push(letter.charCodeAt() - 1);
//     } else if (letter.match(/[^A-Z]/)) {
//       unicode.push(letter.charCodeAt());
//     }
//   }
//   return String.fromCharCode(...unicode)
// }

// // rot1("SERR PBQR PNZC");
// console.log(rot1("AB"))

