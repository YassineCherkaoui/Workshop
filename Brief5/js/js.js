//validation java script
function formValidation() {
  var uid = document.registration.userid;
  var passid = document.registration.passid;
  var uname = document.registration.username;
  var uadd = document.registration.address;
  var ucountry = document.registration.country;
  var uzip = document.registration.zip;
  var uemail = document.registration.email;
  var umsex = document.registration.msex;
  var ufsex = document.registration.fsex;
  var regex = /^[a-zA-Z0-9.-]+@[a-z0-9.-]{2,6}\.[a-z]{2,4}$/;
  var regexpasswd = /^[a-zA-Z*'-_^"@$#]{8,30}$/;
  var regexname = /^[a-zA-Z]{3,16}$/;
  var cpt = 0;
  if (uid == "" || passid == "" || uname == "" || uadd == "" || uemail == "") {
    window.alert(" Tous les champs doivent être remplis");
    cpt++;
  }

  else {
    if (!regex.test(uemail) || !regexpasswd.test(passid) || !regexname.test(uname) || !regexname.test(ucountry)) {
      window.alert(" Respectez les formats des elements entrés ");
      cpt++;
    }
  }

  if (cpt == 0) {
    alert("validé !");
  }

}






// function formValidation() {
//   var uid = document.registration.userid;
//   var passid = document.registration.passid;
//   var uname = document.registration.username;
//   var uadd = document.registration.address;
//   var ucountry = document.registration.country;
//   var uzip = document.registration.zip;
//   var uemail = document.registration.email;
//   var umsex = document.registration.msex;
//   var ufsex = document.registration.fsex;
  
//     if (userid_validation(uid, 5, 12)) {
//       if (passid_validation(passid, 7, 12)) {
//         if (allLetter(uname)) {
//           if (alphanumeric(uadd)) {
//             if (countryselect(ucountry)) {
//               if (allnumeric(uzip)) {
//                 if (ValidateEmail(uemail)) {
//                   if (validsex(umsex, ufsex)) { }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     return false;

//   }
// //   if (userid_validation(uid, 5, 12) || passid_validation(passid, 7, 12) || passid_validation(passid, 7, 12) || passid_validation(passid, 7, 12) 
// //     || allLetter(uname) || alphanumeric(uadd) || countryselect(ucountry) || allnumeric(uzip) || ValidateEmail(uemail) || validsex(umsex, ufsex)){
 
// // return false;
// // }
// // };

// function userid_validation(uid, min, mx) {
//   var uid_len = uid.value.length;
//   if (uid_len == 0 || uid_len < min && uid_len > mx) {
//     alert("User Id should not be empty / length be between " + min + " to " + mx);
//     uid.focus();
//     return false;
//   }
//   return true;
// }

// function passid_validation(passid, min, mx) {
//   var passid_len = passid.value.length;
//   if (passid_len == 0 || passid_len < min && passid_len > mx) {
//     alert("Password should not be empty / length be between " + min + " to " + mx);
//     passid.focus();
//     return false;
//   }
//   return true;
// }

// function allLetter(uname) {
//   var letters = /^[A-Za-z]+$/;
//   if (uname.value.match(letters)) {
//     return true;
//   } else {
//     alert('Username must have alphabet characters only');
//     uname.focus();
//     return false;
//   }
// }

// function alphanumeric(uadd) {
//   var letters = /^[0-9a-zA-Z]+$/;
//   if (uadd.value.match(letters)) {
//     return true;
//   } else {
//     alert('User address must have alphanumeric characters only');
//     uadd.focus();
//     return false;
//   }
// }

// function countryselect(ucountry) {
//   if (ucountry.value == "Default") {
//     alert('Select your country from the list');
//     ucountry.focus();
//     return false;
//   } else {
//     return true;
//   }
// }

// function allnumeric(uzip) {
//   var numbers = /^[0-9]+$/;
//   if (uzip.value.match(numbers)) {
//     return true;
//   } else {
//     alert('ZIP code must have numeric characters only');
//     uzip.focus();
//     return false;
//   }
// }

// function ValidateEmail(uemail) {
//   var mailformat = /^[A-Za-z-0-9-_.]+@[A-Za-z].[A-Za-z]{2,3}$/;
//   if (uemail.value.match(mailformat)) {
//     return true;
//   } else {
//     alert("You have entered an invalid email address!");
//     return false;
//   }
// }

//slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {

  showSlides(slideIndex += x);
}
 

function showSlides(x) {
  var i;
  var slides = document.getElementsByClassName("ImageSlide");//T
if (x > slides.length) { slideIndex = 1 }   
  if (x < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
// display
  slides[slideIndex-1].style.display = "block";  
  


//slide image car reservation
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slid");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}




//Validation javascript
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}

function login() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

}

