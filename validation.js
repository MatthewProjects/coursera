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
  
  if (document.myForm.phoneNumber.value == "" ||isNaN(document.myForm.phoneNumber.value) || document.myForm.phoneNumber.value.length!=10) {
    alert("Please enter correct phone number");
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
  

  














