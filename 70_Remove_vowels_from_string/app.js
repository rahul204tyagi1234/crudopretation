// Remove vowel from string :- write a funcation that take string with
// all value .
function vowelremove(str) {
    var str =document.getElementById('strfield').value;
    let newstr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
             newstr += str[i];
        }
    }
    var vremove = newstr
    document.getElementById('result').value = vremove;
}
// console.log(Vowelremove("Rahul"));


