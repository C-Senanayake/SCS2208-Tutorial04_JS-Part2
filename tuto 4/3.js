function Age(){
    let x=document.getElementById("birthday").value;
    var dob = new Date(x); 
    var month_diff = Date.now() - dob.getTime(); //calculate month difference from current date in time   
    var age_dt = new Date(month_diff);  //convert the calculated difference in date format  
    var year = age_dt.getUTCFullYear();  //extract year from date 
    var age = Math.abs(year - 1970);//now calculate the age of the user 
    alert("Age is: "+age+" years");
    
}


