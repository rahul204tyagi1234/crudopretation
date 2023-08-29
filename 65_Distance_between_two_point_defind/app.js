//.....Create a funcation to calculate the distance between two point 
//.....difined by their x,y cords.................
function numDistance(x1, y1, x2, y2) {
    x1 = document.getElementById('x1Field').value;

    y1 = document.getElementById('y1Field').value;

    x2 = document.getElementById('x2Field').value;

    y2 = document.getElementById('y2Field').value;
    a1 = x2 - x1;
    a2 = y2 - y1;
    var num1 = a1 * a1;
    var num2 = a2 * a2;
    var rasult = num1 + num2


    var sq = Math.sqrt(rasult);
    document.getElementById('result').value = sq;

}