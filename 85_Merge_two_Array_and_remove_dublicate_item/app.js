//  JavaScript program to merge two Array and remove dublicate item.....
// let arr1 = [1, 2, 3, 4, 5, 6]; 
// document.getElementById('ar1').innerText += arr1
// let arr2 = [3, 4, 5, 7];
// document.getElementById('ar2').innerHTML += arr2
// let arr = [...arr1, ...arr2];
// let mergedArr = [...new Set(arr)]
// document.getElementById('result').innerHTML += mergedArr;
// console.log(mergedArr);


function margeTwoArray(){
    var arr1 =document.getElementById('arr1field').value;
    var arr2 =document.getElementById('arr2field').value;
    let arr=[...arr1,...arr2];
    let marge =[...new Set(arr)]
    document.getElementById('result').value=marge;
    document.getElementById('result1').innerHTML=marge;

}