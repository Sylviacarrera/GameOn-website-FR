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
const inputQuantity = document.getElementById("quantity");
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

// EMAIL

// Validation du champ email
const isEmailNotEmpty = inputEmail.value.trim() !== '';
const isValidEmail = isEmailNotEmpty && /^[A-Za-z0-9.!\#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*$/.test(inputEmail.value);
inputEmail.parentNode.setAttribute("data-error-visible", !isValidEmail);
};
//DATE DE NAISSANCE

const inputDateOfBirth = inputBirthdate;

// Validation du champ date de naissance
const isDateOfBirthValid = inputDateOfBirth.checkValidity();

// Vérification du format de la date (YYYY-MM-DD)
const isValidDateFormat = /^\d{4}-\d{2}-\d{2}$/.test(inputDateOfBirth.value);

// Vérification que l'année n'est pas supérieure à 2010
const enteredDate = new Date(inputDateOfBirth.value);
const isYearBefore2010 = enteredDate.getFullYear() < 2010;

// Initialisation de l'attribut "data-error-visible"
inputDateOfBirth.parentNode.setAttribute("data-error-visible", false);


// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Vérification de la validité de la date de naissance
  if (!isDateOfBirthValid || !isValidDateFormat || isYearBefore2010) {

    // Affichage du message d'erreur
    inputDateOfBirth.parentNode.setAttribute("data-error-visible", true);
  }
});

// PARTICIPATION

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isQuantityNotEmpty = inputQuantity.value.trim() !== '';

  // Mise à jour de l'attribut "data-error-visible" en fonction de la validité du champ
  inputQuantity.parentNode.setAttribute("data-error-visible", !isQuantityNotEmpty);
});








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




