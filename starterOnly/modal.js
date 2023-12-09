// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBg = document.querySelector(".close");
const myTopNav = document.getElementById("myTopnav");
const menu = document.getElementById('menu')
const form = document.querySelector("form")
const inputFirstName = document.getElementById("first");
const inputLastName = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputBirthdate = document.getElementById("birthdate");
const inputquantity = document.getElementById("quantity");
const inputcheckbox1 = document.getElementById("checkbox1");
const inputcheckbox2 = document.getElementById("checkbox2");
const inputsRadio = document.querySelectorAll('input[type="radio"]')
const formDataRadio = document.getElementById('formData-radio')

// querySelector('input[name="pwd"]')
/** Events **/
menu.addEventListener('click', () => editNav())
closeModalBg.addEventListener("click", () => closeModal()) // launch modal event
modalBtn.forEach(btn => btn.addEventListener("click", () => launchModal()));
// submit form
form.addEventListener('submit', event => validForm(event))

// launch modal form
const launchModal = () => modalBg.style.display = "block"
const closeModal = () => modalBg.style.display = "none"
const editNav = () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}

const validForm = event => {
  event.preventDefault()
  console.log('soumission du formulaire')

  // if (inputFirstName.value.length < 2) {
  //   inputFirstName.parentNode.setAttribute("data-error-visible", true)
  // } else {
  //   inputFirstName.parentNode.setAttribute("data-error-visible", false)
  // }

 //PRENOM
  inputFirstName.parentNode.setAttribute("data-error-visible", inputFirstName.value.length < 2)

   // Vérification de la validité du prénom (lettres uniquement)
  const isValidFirstName = /^[a-zA-Z]+$/.test(inputFirstName.value);
  inputFirstName.parentNode.setAttribute("data-error-visible", !isValidFirstName);

// Vérification que le champ n'est pas vide
  const isFirstNameNotEmpty = inputFirstName.value.trim() !== '';

  //NOM

  inputLastName.parentNode.setAttribute("data-error-visible", inputLastName.value.length < 2)

 // Vérification de la validité du nom (lettres uniquement)
  const isValidLastName = /^[a-zA-Z]+$/.test(inputLastName.value);
  inputLastName.parentNode.setAttribute("data-error-visible", !isValidFirstName);

// Vérification que le champ n'est pas vide
  const isLastNameNotEmpty = inputLastName.value.trim() !== '';

  //EMAIL

  // Validation du champ email
  const isEmailNotEmpty = inputEmail.value.trim() !== '';
  const isValidEmail = isEmailNotEmpty && isValidEmailAddress(inputEmail.value);
  inputEmail.parentNode.setAttribute("data-error-visible", !isValidEmail);
};

// Fonction pour valider une adresse email
const inputDateOfBirth = document.querySelector('#birthdate');

// Ajouter un gestionnaire d'événements pour intercepter les frappes clavier




const checkInputRadio = () => {
  let inputRadioChecked = false
  // For each input type radio we display log of id element
  inputsRadio.forEach(element => {
    if (element.checked) {
      inputRadioChecked = true
    }
  })
  return inputRadioChecked
}




