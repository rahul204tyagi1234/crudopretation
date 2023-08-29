//.7_Calculate the average of the numbers in an array  of numbers............
function averageNum() {
    var array = document.getElementById('arrayfield').value;
    var swap = array.split(",");
    let sum = 0;
    for (var i = 0; i < swap.length; i++) {

        sum += parseInt(swap[i]);
    
    }

    var x = (sum / swap.length)
    document.getElementById('result').innerHTML=x;
}

