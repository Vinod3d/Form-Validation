

function validation() {
  var name = document.getElementById("name");
  var father_name = document.getElementById("father_name");
  var address = document.getElementById("address");
  var gender = document.form.gender;
  var state = document.form.state;
  var city = document.getElementById('city');
  var DOB = document.getElementById('DOB');
  var phone = document.form.phone;
  var course = document.form.course;
  var pincode = document.getElementById('pincode');
  var email = document.getElementById('email');


  // 1. Name

  if (name.value == "") {
    name.nextElementSibling.innerHTML =  "*Please Fill The Username Field";
    return false;
  }
  else if (name.value.length < 3 || name.value.length > 20) {
    name.nextElementSibling.innerHTML = " ** Name Lenght must be between 3 and 20";
    return false;
  } 
  else if (!isNaN(name.value)) {
    name.nextElementSibling.innerHTML =  "only charactor are allowed ";
    return false;
  }
  else {
    name.nextElementSibling.innerHTML = "";
  }



  // 2. Father Name

  if (father_name.value == "") {
    father_name.nextElementSibling.innerHTML = "*Please Enter Your Father Name";
    return false;
  }
  else if (father_name.value.length < 3 || father_name.value.length > 20) {
    father_name.nextElementSibling.innerHTML = " ** Name Lenght must be between 3 and 20";
    return false;
  }
  else if(!isNaN(father_name.value)) {
    father_name.nextElementSibling.innerHTML ="only charactor are allowed ";
    return false;
  }
   else {
    father_name.nextElementSibling.innerHTML = "";
  }



  // 3. Address

  if (address.value == "") {
    address.nextElementSibling.innerHTML ="*Please Enter Your Address";
    return false;
  }
  else {
    address.nextElementSibling.innerHTML = "";
  }

  // 4. Gender

  if(form.gender.value == ""){
    document.getElementById("gender_message").innerHTML = 'Please Select Your Gender';
    return false;
  }
  else{
    document.getElementById("gender_message").innerHTML = '';
  }


  // 5. State
  
  if (form.state.value == "") {
    state.nextElementSibling.innerHTML = "Please Select Your State";
    return false;
  }
  else{
    state.nextElementSibling.innerHTML = "";
  }


  // 6. City
  
  if (city.value == "") {
    city.nextElementSibling.innerHTML = "Please Select Your City";
    return false;
  }
  else{
    city.nextElementSibling.innerHTML = "";
  }


  //7. Date of Birth
 
  if (DOB.value == "") {
    DOB.nextElementSibling.innerHTML ="*Please Enter Your Date Of Birth";
    return false;
  } else {
    DOB.nextElementSibling.innerHTML = "";
  }

  //7. Phone Number
 
  if (!phone.value.match( /^\(?([5-9]{1})\)?([0-9]{9})$/) || phone.value == "") {
    phone.nextElementSibling.innerHTML ="*Please Enter Your Phone Number";
    return false;
  }
  else {
    phone.nextElementSibling.innerHTML = "";
  }



  //8. Pincode
  
  if (pincode.value == "") {
    pincode.nextElementSibling.innerHTML ="*Please Enter Your Pincode";
    return false;
  } 
  else {
    pincode.nextElementSibling.innerHTML = "";
  }

  // 9. Course

  if (course.value == "") {
    course.nextElementSibling.innerHTML = "Please Select Your Course";
    return false;
  }
  else{
    course.nextElementSibling.innerHTML = "";
  }
  

  //10.  Email

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.value.match(mailformat)) {
      email.nextElementSibling.innerHTML =  "";
  }
  else {
    email.nextElementSibling.innerHTML = "Please Enter Your Email";
    return false;
  }

}

