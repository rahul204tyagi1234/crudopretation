// Generate Random number 4 character + 4 number = 8 digit......

function randomNumers(){
  var num= document.getElementById('numfield').value;

  var numbers = '1234567890';
  var characters = 'abcdefghijklmnopqrstuvwxyz';
  var characters=characters.toUpperCase()
  
  var collectData = ''
  var collectStr ='';
  for (var i = 0; i < num; i++) {
      var randomIndex=Math.floor(Math.random()*numbers.length)
      var randomNumber=numbers.charAt(randomIndex)
    collectData+=randomNumber
    var randomI =Math.floor(Math.random()*characters.length)
    var randomNum = characters.charAt(randomI)
    collectStr +=randomNum
      var add=collectStr+collectData
  }
  document.getElementById('result').innerHTML=add;
}
// console.log(collectStr);