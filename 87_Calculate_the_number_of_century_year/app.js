function centuryFromYear1() {
    var year = document.getElementById('yearfield').value;
    if (year < 100) {
        document.getElementById('result').innerHTML = `your data is unvailed`;
    }
    else if (year >= 100) {
        var y = year / 100;
        var x = Math.floor(y) 
        document.getElementById('result').innerHTML = x;
    }
}

