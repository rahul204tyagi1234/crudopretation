//..Create a function that will capitalize the first latter of each word in text.................
function capitalizefirstLatter(){
  var arr =document.getElementById('arrfeild').value;
  // const arr ="rahul tyagi is a good boy";
const words =arr.split(" ");
// console.log(words,typeof words)
  for(let i=0; i < words.length; i++){
      words[i]=words[i][0].toUpperCase() + words[i].slice(1);

  }
  document.getElementById('result').value=words;


}



