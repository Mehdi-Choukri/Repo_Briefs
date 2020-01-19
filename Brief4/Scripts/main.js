 


 function validation_contact()
 {
   let name=document.getElementById("id_name") ;
   let mail=document.getElementById("id_mail") ;
   let txt=document.getElementById("id_txtarea") ;
   let sub=document.getElementById("id_sub") ;

   let reg_name=RegExp("^[a-zA-Z]{3,20}$");

   var reg_mail =RegExp("^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$") ;

   alert(mail.value)
    
 
   if(name.value==="" && mail.value===""&& txt.value==="" && sub.value==="")
   {
     
    alert("Tous les champs sont obligatoires ");
    for(let i=1;i<=4;i++)
    {
      document.getElementById("erreur_msg"+i).innerHTML="*";
      document.getElementById("erreur_msg"+i).style.color="red" ;
      
    }
  
   }
   else
   {
     if(name.value!="" && reg_name.test(name.value) )
     {
      document.getElementById("erreur_msg2").innerHTML="";
     
     }
     else
     {
      document.getElementById("erreur_msg2").innerHTML="Format incorrect";
     }
     if(reg_mail.test(mail.value))
     {
      document.getElementById("erreur_msg3").innerHTML="";
     
     }
     else
     {
      document.getElementById("erreur_msg3").innerHTML="Format incorrect";
     }

     if(txt.value.length>=5)
     {
      document.getElementById("erreur_msg1").innerHTML="";
     
     }
     else
     {
      document.getElementById("erreur_msg1").innerHTML="le text est trop court";
     }
     if(sub.value.length>=5)
     {
      document.getElementById("erreur_msg4").innerHTML="";
     
     }
     else
     {
      document.getElementById("erreur_msg4").innerHTML="le sujet est trop court";
     }
     
      
   }



   

 }