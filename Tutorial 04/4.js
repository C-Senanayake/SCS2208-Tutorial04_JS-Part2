function Area(){
    let x=document.getElementById("height").value;
    let y=document.getElementById("width").value;
    let z=x*y;
    let s="2";
    document.getElementById("area").innerHTML="Area of the shape is "+z+"cm"+s.sup();
    // alert("Area of the shape is "+z+"cm"+s.sup());

}