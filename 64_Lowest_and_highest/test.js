function lowestTOhigest() {
    let Array = (document.getElementById('arrayfield').value)
    let Arr=Array.split(',');
    Arr=  Arr.map((d)=> Number(d))
    //...loop will be start from 1 and i is less than Arr.length.................
    for (let i = 1; i < Arr.length; i++) {
        //.....loop will be start from 0 and check j is less than i.......... 
        for (let j = 0; j < i; j++) {  //0<1
            //...if check the condition Arr[i] is less than Arr[j]........   
            if (Arr[i] < Arr[j]) {  //45<11

                //...new variable is a x equal Arr[i].........
                let x = Arr[i];//45
                // ..if Arr[1] equal will be Arr[j].........   
                Arr[i] = Arr[j]; //11
                //...than Arr[j] equal wiil be x..............
                Arr[j] = x;   //45
            }
        }
    }
    document.getElementById('result').innerHTML = Arr
}