// Get the middle charactor :- if words length is odd,
// return the middle charactor.It the words length is even ,return the middle 2 charater.

function getMiddleCharactor(s) {
  s = document.getElementById('name').value;
  const i = Math.floor(s.length / 2);
  let result = s[i];
  if (s.length % 2 === 0 && i > 0) {
    result = s[i - 1] + result;
  }
  // return result;
  var middleCharactor = result
  document.getElementById('middlecharactor').value = middleCharactor;
}

// console.log (getMiddleCharactor("Rahul"));
// console.log(action);