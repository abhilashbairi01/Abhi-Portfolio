var rows=document.getElementsByTagName("tr");
var display =document.getElementById("display");
 var row=1;
var enter=document.getElementById("submit");
enter.addEventListener("click",displaydetails);


function displaydetails()
{
    
    var user =document.getElementById("username").value;
    var fname=document.getElementById("name").value;
    var Last=document.getElementById("lname").value;
    var mail=document.getElementById("Email").value;
    var phone=document.getElementById("tel").value;
      cnt=1;
        if(!fname || !Last || !mail || !phone ||!user)
           {
             alert("Please Fill The Details!");
             return;
           }  
           for (let i = 0 ; i <display.rows.length ; i++){
            var col= display.rows.item(i).cells;
            if(user == col[0].innerHTML) {
             alert("User Name already exists!!");
             cnt=0;
             return;
           } 
           if(mail==col[3].innerHTML){
            alert("E-mail ID already exists!!");
            cnt=0;
            return;
           }
           if(phone==col[4].innerHTML){
            alert("Phone Number already exists!!");
            cnt=0;
            return;
           }
            }
           if(cnt){
           
            var newRow=display.insertRow(row);
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
            var cell5 =newRow.insertCell(4);
            
            cell1.innerHTML=user;
            cell2.innerHTML=fname;
            cell3.innerHTML=Last;
            cell4.innerHTML=mail;
            cell5.innerHTML=phone;

            row++;
            document.getElementById("username").value='';
           document.getElementById("name").value='';
           document.getElementById("lname").value='';
           document.getElementById("Email").value='';
           document.getElementById("tel").value='';
         }
        
         
        

}
var Reset=document.getElementById("reset");
Reset.addEventListener("click",()=>{
  document.getElementById("username").value='';
  document.getElementById("name").value='';
  document.getElementById("lname").value='';
  document.getElementById("Email").value='';
  document.getElementById("tel").value='';
});
 


