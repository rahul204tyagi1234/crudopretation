// funcation to create the area of trangle..........
function createarea() {

    var area = document.getElementById('areafield').value;

    var PI = document.getElementById('PIfield').value=3.142;
    var l = document.getElementById('lfield').value;
    var b = document.getElementById('bfield').value;
    var r = document.getElementById('rfield').value;
    switch (area) {
        case 'circle':
            document.getElementById('result').innerHTML=("The area of  the circle is :" + PI * r ** 2);
            break;
        case 'triangle':
            document.getElementById('result').innerHTML=("The area of the triangle is:" + (l * b) / 2);
            break;
        case 'rectangle':
            document.getElementById('result').innerHTML=("The area of the rectangle is:" + (l * b));
            break;
        default:
            document.getElementById('result').innerHTML=("Please enter valid data");
            break;
    }

}
// var area ="circle";
// var PI = 3.142,l = 5,b = 4,r = 3;
// switch(area){
//     case 'circle':
//         console.log("The area of  the circle is :"+PI*r**2);
//         break;
//     case 'triangle':
//         console.log("The area of the triangle is:"+(l*b)/2);
//         break;
//     case 'rectangle':
//         console.log("The area of the rectangle is"+(l*b));
//         break;
//     default:
//         console.log("Please enter valid data");
//          break;
// }