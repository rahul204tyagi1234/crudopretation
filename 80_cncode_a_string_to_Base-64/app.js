//javaScript program to cncode a string to base -- 64.......
// Define the string
function cncodestring(){
    var encode64 =document.getElementById('encodefeild').value;
    // var encode64 = 'Hello World!';

// Encode the String
var encode64 = btoa(encode64);
document.getElementById('result').innerHTML=encode64;



}
// var encode64 = 'Hello World!';

// // Encode the String
// var encode64 = btoa(encode64);

// console.log(encode64);


function decode (){
    var encode64 =document.getElementById('encodefield').value;

    // var encode64 = 'SGVsbG8gV29ybGQh';
    
    // Decode the String
    var encode64 = atob(encode64);
    document.getElementById('result1').innerHTML=encode64;
    
    // console.log(encode64);
}
// Define the string