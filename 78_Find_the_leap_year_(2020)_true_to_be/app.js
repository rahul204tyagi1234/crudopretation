function Leepyear(year) {
    var year = document.getElementById('yearfeild').value;
    if (year % 4 === 0) {//if year divided by 4......
        if (year % 100 === 0) {// if year divided by 100......
            if (year % 400 === 0) {//if year divided by 400 ......
                document.getElementById('result').innerHTML=("The year is leap year");//if return divided by 400 than return leap year
            }
            else {
                document.getElementById('result').innerHTML=("The year is not a leap year");
            }
        }
        else {
            document.getElementById('result').innerHTML=("The year  is a leap year");
        }

    }
    else {
        document.getElementById('result').innerHTML=("The year is not a leap year");
    }
    // return year;


}
// console.log(Leepyear(2200));