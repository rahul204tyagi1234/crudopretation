///...Calculate the sum of numbers with in an array?.............................ar..........
function sum() {
    var ar = document.getElementById('arfeild').value;
    var splited = ar.split(",")

    let sum = 0;

    for (var i = 0; i < splited.length; i++) {//0<6
        var num = parseInt(splited[i]);//
        sum += num
        document.getElementById('result').innerHTML = sum;
    }
}





