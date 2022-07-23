function Marks(){
    var x=document.getElementById("marks").value;
    var y=document.getElementById("subject").value;
    if(x>=50){
        document.getElementById("a").innerHTML="PASS! Well Done! Your marks are good for "+y+" subject";
        
    }
    else{
        document.getElementById("a").innerHTML="FAIL! Sorry! You have to work hard for "+y+" subject";
    }
    // alert("Done");
}