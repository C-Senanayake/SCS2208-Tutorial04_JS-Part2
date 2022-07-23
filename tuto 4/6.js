function root(){
    
    var x=document.getElementById("number").value;
    if(x<0){
        alert("Enter a positive number");
    }
    else{
        var y=1/2;
        document.getElementById("answer").innerHTML="Root of "+x+" is :"+Math.sqrt(x);
        alert("Root of "+x+" is :"+Math.sqrt(x));
    }
}