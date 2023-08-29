//...Find the maximum number in an array of numbers...........ar............
function maximumNum() {
    let array = document.getElementById('arrfield').value;
    var max = array.split(",")

    let maximum = max[0];


    for (var i = 1; i < max.length; i++) {

        if (max[i] > maximum) {

            maximum = parseInt(max[i]);

        }
    }
    document.getElementById('result').innerHTML = maximum;



}




