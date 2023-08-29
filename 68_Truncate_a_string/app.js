function trunkString(st1 ,st2)  {//st1 and st2 is the variable
    st1=document.getElementById('st1field').value;
    st2=document.getElementById('st2field').value;
    if(st1.length <= st2){//if check st1.lenght is less than or equal st2
        return st1//than return st1.......
    }
    var trunkstr= st1.slice(0, st2) + '...'//return start 0 and last st2 and + three dot 
    document.getElementById('trunkvalue').value=trunkstr;
    

}
// console.log(TrunkString("Rahul is a good boy and his behave is very cool", 5));//return ( Rahul... )