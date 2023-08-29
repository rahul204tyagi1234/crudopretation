// //...Create a function that will  return the number of words in a text............................
// //.....it is the funcation.........................................//.........ar................


function countWords(str) {
  var str=document.getElementById('strfeild').value;

  document.getElementById('result').innerHTML= str.trim().split(/\s+/).length;
}
