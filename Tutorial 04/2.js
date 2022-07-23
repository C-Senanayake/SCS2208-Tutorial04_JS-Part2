let date=new Date();
let hh=date.getHours();
let mm=date.getMinutes();
function ampm(h,m){
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(h>12 ){
        return (h-12)+"."+m+" pm";
    }
    else if(h==12){
        return h+"."+m+" pm";
    }
    else{
        return h+"."+m+" am";
    }

}
function remain(h,m){
    if(m>0){
        return 24-(h+1);
    }
    return 24-h;
}

document.getElementById("ctime").innerHTML = "Now the time is " +ampm(hh,mm);
document.getElementById("remaining").innerHTML="Remains "+remain(hh,mm)+" more hours";