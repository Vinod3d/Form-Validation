

function validation() {
  var name = document.getElementById("name").value;
  var father_name = document.getElementById("father_name").value;
  var address = document.getElementById("address").value;

  
  // var confirmpass = document.getElementById("confirmpass").value;
  // var mobileNumber = document.getElementById("mobile").value;
  // var email = document.getElementById("email").value;
 
  // 1. Name

  if (name == "") {
    // document.getElementById('name_message').appendChild ( "**please fill the username field") ;
    document.getElementById("name").nextElementSibling.innerHTML =
      "*Please Fill The Username Field";
  }
  if (name.length < 3 || name.length > 20) {
    document.getElementById("name").nextElementSibling.innerHTML =
      " ** Name Lenght must be between 2 and 20";
  } else {
    document.getElementById("name").nextElementSibling.innerHTML = " ";
  }

  if (!isNaN(name)) {
    document.getElementById("name").nextElementSibling.innerHTML =
      "only charactor are allowed ";
  }


  // 2. Father Name

  if (father_name == "") {
    // document.getElementById('name_message').appendChild ( "**please fill the username field") ;
    document.getElementById("father_name").nextElementSibling.innerHTML =
      "*Please Fill The Username Field";
  }
  if (father_name.length < 3 || father_name.length > 20) {
    document.getElementById("father_name").nextElementSibling.innerHTML =
      " ** Name Lenght must be between 2 and 20";
  } else {
    document.getElementById("father_name").nextElementSibling.innerHTML = " ";
  }

  if (!isNaN(father_name)) {
    document.getElementById("father_name").nextElementSibling.innerHTML =
      "only charactor are allowed ";
  }


  // 3. Address

  if (address == "") {
    document.getElementById("address").nextElementSibling.innerHTML =
      "*Please Fill The Address Field";
  }else{
    document.getElementById("address").nextElementSibling.innerHTML = "";
  }



  // 4. Gender

  var gender = document.getElementsByName("gender");
  // console.log(gender);

  for(var g of gender){
    if(g.checked == true){
      // console.log(g.value);
      document.getElementById("gender_message").innerHTML = '';
    }else if(g.checked == false){
      document.getElementById("gender_message").innerHTML = '*Please Select Your Gender';
    }
  }

// 5. State
var state = document.getElementById('state').value;
  if(state==""){
    document.getElementById("state").nextElementSibling.innerHTML = "Please Select State";
  }
  // console.log(state);


// 6. City
var city = document.getElementById('city').value;
  if(city==""){
    document.getElementById("city").nextElementSibling.innerHTML = "Please Select State";
  }
  // console.log(city);



//7. Date of Birth
var DOB = document.getElementById('DOB').value;
  if (DOB == "") {
    document.getElementById("DOB").nextElementSibling.innerHTML =
      "*Please Fill The Address Field";
  }else{
    document.getElementById("DOB").nextElementSibling.innerHTML = "";
  }



//8. Pincode
var pincode = document.getElementById('pincode').value;
if (pincode == "") {
  document.getElementById("pincode").nextElementSibling.innerHTML =
    "*Please Fill The Address Field";
}else{
  document.getElementById("pincode").nextElementSibling.innerHTML = "";
}

// 9. Course
var course = document.getElementById('course').value;
  if(course==""){
    document.getElementById("course").nextElementSibling.innerHTML = "Please Select State";
  }
  console.log(course);

//10.  Email

var email = document.getElementById('email').value;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.match(mailformat))
{
  document.getElementById("email").nextElementSibling.innerHTML = "";
}else{
  document.getElementById("email").nextElementSibling.innerHTML = "You have entered an invalid email address!";
}


  // //2. password

  // if (pass == "") {
  //   document.getElementById("password_message").innerHTML =
  //     "**please fill the password field";
  //   return false;
  // }

  // if (pass.length != 8) {
  //   document.getElementById("password_message").innerHTML =
  //     " ** password lenght must be between 2 and 8";
  //   return false;
  // } else {
  //   document.getElementById("password_message").innerHTML = " ";
  // }

  // //3. confirm password
  // if (confirmpass == "") {
  //   document.getElementById("conpass_message").innerHTML =
  //     "**please fill the confirm password field";
  //   return false;
  // }
  // if (pass == confirmpass) {
  //   // document.getElementById('conpass_message').innerHTML =" password are not matching";
  //   document.getElementById("conpass_message").innerHTML = " ";
  // } else {
  //   // document.getElementById('conpass_message').innerHTML =" ";
  //   document.getElementById("conpass_message").innerHTML =
  //     " **password are not matching";
  // }

  // //4.mobile number

  // if (mobileNumber == "") {
  //   document.getElementById("mobile_message").innerHTML =
  //     "**please fill the mobile number";
  //   return false;
  // } else {
  //   document.getElementById("mobile_message").innerHTML = " ";
  // }

  // if (mobileNumber.length < 10 || mobileNumber.length > 10) {
  //   document.getElementById("mobile_message").innerHTML =
  //     "**mobile number must be 10 digit only ";
  // }

  // if (isNaN(mobileNumber)) {
  //   document.getElementById("mobile_message").innerHTML =
  //     "**user must write digits only not charactors ";
  //   return false;
  // }

  // //5. email

  // if (email == "") {
  //   document.getElementById("email_message").innerHTML =
  //     "**please fill the email id";
  //   return false;
  // }
  // if (email.indexOf("@") <= 0) {
  //   document.getElementById("email_message").innerHTML =
  //     "**please enter valid email @ position";
  //   return false;
  // } else {
  //   document.getElementById("email_message").innerHTML = "";
  // }

  // if (
  //   email.charAt(email.length - 4) != "." &&
  //   email.charAt(email.length - 3) != "."
  // ) {
  //   document.getElementById("email_message").innerHTML =
  //     "**please enter valid email id . position";
  // } else {
  //   document.getElementById("email_message").innerHTML = " ";
  // }
}

// function submit(){
//   if(name!="" && emailId!="" && phoneNo!="" && eQualification!="" && eWorkplace!="" && eRegistration !="" && state!=""){
// 		var url = "https://wa.me/+919575711907?text=" 
// 		+ "Seat Reservation For The Event" + "%0a" + "%0a"
// 		+ "Name: " + fullName + "%0a"
// 		+ "E-mail: " + emailId + "%0a"
// 		+ "Phone No: " + phoneNo + "%0a"
// 		+ "Qualification: " + eQualification + "%0a"
// 		+ "Current place of work: " + eWorkplace + "%0a"
// 		+ "MCI/SMC registration number: " + eRegistration + "%0a"
// 		+ "Are You From Cg: " + state + "%0a";
		
// 		window.open(url).focus();
// 	}
// 	else{
// 		eventWarning.innerHTML="*Please fill all the fields*";
// 	}
// }