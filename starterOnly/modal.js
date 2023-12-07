function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBg = document.querySelector(".close");
const form = document.querySelector("form")
let inputFirstName = document.getElementById("first");
let inputLastName = document.getElementById("last");
let inputemail = document.getElementById("email");
let inputBirthdate = document.getElementById("birthdate");
let inputquantity = document.getElementById("quantity");
let inputlocation1 = document.getElementById("location1");
let inputlocation2 = document.getElementById("location2");
let inputlocation3 = document.getElementById("location3");
let inputlocation4 = document.getElementById("location4");
let inputlocation5 = document.getElementById("location5");
let inputlocation6 = document.getElementById("location6");
let inputcheckbox1 = document.getElementById("checkbox1");
let inputcheckbox2 = document.getElementById("checkbox2");

closeModalBg.addEventListener("click",() => {
  modalBg.style.display = "none" })// launch modal event


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}







