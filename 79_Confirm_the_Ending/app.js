function confirmEnding(start, ending) {
    var start=document.getElementById('startfeild').value;
    var ending=document.getElementById('endingfeild').value;

    const startlenght = start.length;//lenght of start
    const endlenght = ending.length;// lenght of ending
    if(endlenght<=0){//if check  endlenght is less than or equal 0
        document.getElementById('result').innerHTML= false;
        
    }
    for (var i = 0; i < endlenght; i++) {//
        if (start[startlenght - endlenght + i] !== ending[i]) {//start lenght - endlenght and +i
            // and check startlenght !== ending [i].......
            document.getElementById('result').innerHTML= false;
            break;
        }
        document.getElementById('result').innerHTML= true;// return true
    }
}

// console.log(confirmEnding("Rahul is a good boy", "good bo")); //true


