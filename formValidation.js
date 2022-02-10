function Validation() {

    var res=document.getElementById("fname").value

    if(res.length==0)
    {
        document.getElementById("msg").innerHTML="*This field is required"

        return false;
    }
    else if(res.length<5)
    {
        document.getElementById("msg").innerHTML="*First name field should have minimum 5 character"

        return false;
    }

    else if(res.length>=10)

    {
         document.getElementById("msg").innerHTML="*First name field should have maximum 10 character"

         return false;
    }

       var res= document.getElementById("password").value;
       if(res.length==0)
         {
             document.getElementById("pa").innerHTML="*password field is empty"
             return false
         }
         else if(res.length<8)
         {
           document.getElementById("pa").innerHTML="*Password length should be greater than 8"
            return false
         }
         

}
