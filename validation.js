function validate() {
  if (document.myForm.firstName.value == "") {
    
    alert("Please enter your name");
    document.myForm.firstName.focus();
    return false;
  }
  if (document.myForm.email.value == "") {
    alert("Please enter your email");
    document.myForm.email.focus();
    return false;
  }
  if (document.myForm.password.value == "") {
    alert("Please enter your password");
    document.myForm.password.focus();
    return false;
  }
  
  if (document.myForm.phoneNumber.value == "") {
    alert("Please enter your phone number");
    document.myForm.phoneNumber.focus();
    return false;
  }
  if (document.myForm.country.value == "0") {
    alert("Please choose your country");
    return false;
    
  }


  return true;

}
  
  return true;
  
}
  














