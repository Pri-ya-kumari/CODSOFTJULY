function getnumber(i){
    var a=i;
    if(a==='=')
    {
        document.getElementById('display').value = eval(document.getElementById('display').value); 
    }
    else if(a==='c'){
        document.getElementById('display').value='';
    }
    else {
        document.getElementById('display').value+=i;
    }
}