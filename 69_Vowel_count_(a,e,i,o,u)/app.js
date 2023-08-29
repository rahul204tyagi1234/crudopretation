// Vowel count (a,e,i,o,u) :- Return the number (count) of vowels in the 
// given string .The input string will only conrist of lower case latter and /or space.

function vowelCount(str) {
    str = document.getElementById('enter name').value;
    let newstr = 'aAeEiIoOuU';
    let count = 0;
    for (var i = 0; i < str.length; i++) {
        if (newstr.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    // return count;
    var countVawel = count
    document.getElementById('countVow').value = countVawel;
}
// console.log(vowelCount("Rahul"));