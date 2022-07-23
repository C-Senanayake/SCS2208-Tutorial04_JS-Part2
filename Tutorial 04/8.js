// function percentage(){
//     var x=document.getElementById("insert").value;
//     document.getElementById("a").innerHTML="20% of value: "+x*0.2+"<br>"+"Total: "+x+"+"+x*0.2+"="+x*1.2;
//     // alert("Done");
// }
document.getElementById("insert").onmouseout=function(){
    var x=document.getElementById("insert").value;
    document.getElementById("a").innerHTML="20% of value: "+x*0.2+"<br>"+"Total: "+x+"+"+x*0.2+"="+x*1.2;
    
}