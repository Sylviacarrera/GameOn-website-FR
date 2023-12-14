
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
const inputCheckbox1 = document.getElementById("checkbox1");
const inputCheckbox2 = document.getElementById("checkbox2");
const inputsRadio = document.querySelectorAll('input[type="radio"]')
const formDataRadio = document.getElementById('formData-radio')
const confirmationMessage = document.getElementById('confirmation-message');

// querySelector('input[name="pwd"]')

/** Evenements **/
menu.addEventListener('click', () => editNav())
//la fonction n'a pas de paramètres,j'utilise des parenthèses vides
closeModalBg.addEventListener("click", () => closeModal()) 
modalBtn.forEach(btn => btn.addEventListener("click", () => launchModal()));


// launch modal form
const editNav = () => {
  if (myTopNav.className === "topnav") {
    myTopNav.className += " responsive";
  } else {
    myTopNav.className = "topnav";
  }
}
const closeModal = () => modalBg.style.display = "none"
const launchModal = () => modalBg.style.display = "block"

const closeConfirmationBtn = document.getElementById('close-confirmation');

closeConfirmationBtn.addEventListener('click', () => {
  modalBg.style.display = 'none'; // Cacher le modal
  confirmationMessage.classList.add('hidden'); // Cacher le message de confirmation
});

// submit form
form.addEventListener('submit', event => validForm(event))


//CHAMPS FORMULAIRE

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
  const isValidFirstName = /^[a-zA-Z]+$/.test(inputFirstName.value)
  inputFirstName.parentNode.setAttribute("data-error-visible", !isValidFirstName)

// Vérification que le champ n'est pas vide
  const isFirstNameNotEmpty = inputFirstName.value.trim() !== ''

  //NOM

  inputLastName.parentNode.setAttribute("data-error-visible", inputLastName.value.length < 2)

 // Vérification de la validité du nom (lettres uniquement)
  const isValidLastName = /^[a-zA-Z]+$/.test(inputLastName.value)
  inputLastName.parentNode.setAttribute("data-error-visible", !isValidFirstName)

// Vérification que le champ n'est pas vide
  const isLastNameNotEmpty = inputLastName.value.trim() !== ''

// EMAIL

// Validation du champ email

const isEmailNotEmpty = inputEmail.value.trim() !== ''
const isValidEmail = isEmailNotEmpty && new RexExp("^[A-Za-z0-9.-_]+@[A-Za-z0-9.-_]+\\.+[A-Za-z0-9-]").test(inputEmail.value)
inputEmail.parentNode.setAttribute("data-error-visible", !isValidEmail)
}

//DATE DE NAISSANCE

const inputDateOfBirth = inputBirthdate;

// Initialisation de l'attribut "data-error-visible"
inputDateOfBirth.parentNode.setAttribute("data-error-visible", false);

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Validation du champ date de naissance
  const isDateOfBirthValid = inputDateOfBirth.checkValidity();
 

  // Vérification si la date de naissance est vide ou supérieure à la date actuelle
  const enteredDate = new Date(inputDateOfBirth.value)
  const isDateEmptyOrFuture = !inputDateOfBirth.value || enteredDate > new Date()

   // Vérifier si la date est valide (et que la chaîne n'était pas invalide) 
  //  return !isNaN(date.getTime())

  inputDateOfBirth.parentNode.setAttribute("data-error-visible", !isDateOfBirthValid || isDateEmptyOrFuture);
});


// PARTICIPATION

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const isQuantityNotEmpty = inputQuantity.value.trim() !== ''

  // Mise à jour de l'attribut "data-error-visible" en fonction de la validité du champ

  inputQuantity.parentNode.setAttribute("data-error-visible", !isQuantityNotEmpty)
});


// RADIOS

// Écoute de l'événement "submit" du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault()

  // Validation des boutons radio
  const isRadioChecked = Array.from(inputsRadio).some(element => element.checked)
  formDataRadio.setAttribute("data-error-visible", !isRadioChecked)

    
  })

// CHECKBOX

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  // Vérification que la case à cocher est sélectionnée
  const checkedCheckbox = inputCheckbox1.checked;

  // Affichage du message d'erreur si la case à cocher n'est pas sélectionnée
  if (!checkedCheckbox) {
    inputCheckbox1.parentNode.setAttribute("data-error-visible",true);
  } else {
    inputCheckbox1.parentNode.removeAttribute("data-error-visible");
  }
});

// Modifier la fonction de gestion de la soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault()


  // Vérifier si le formulaire est valide avant d'afficher le message de confirmation
  if (isFormValid()) {
    // Cacher le formulaire en modifiant la propriété "display"
    form.style.display = 'none';

    // Afficher le message de confirmation en modifiant la propriété "display"
    confirmationMessage.style.display = 'block';
  }
});
// Fonction pour vérifier si le formulaire est valide
function isFormValid() {
  const isFirstNameValid = inputFirstName.checkValidity();
  const isLastNameValid = inputLastName.checkValidity();
  const isEmailValid = inputEmail.checkValidity();
  const isDateOfBirthValid = inputDateOfBirth.checkValidity();
  const isQuantityValid = inputQuantity.checkValidity();
  const isRadioChecked = Array.from(inputsRadio).some(element => element.checked);
  const isCheckboxChecked = inputCheckbox1.checked;

  return (
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isDateOfBirthValid &&
    isQuantityValid &&
    isRadioChecked &&
    isCheckboxChecked
  );
}
closeConfirmationBtn.addEventListener('click', () => {
  // Afficher à nouveau le formulaire en modifiant la propriété "display"
  form.style.display = 'block';

  // Cacher le message de confirmation en modifiant la propriété "display"
  confirmationMessage.style.display = 'none';

  // Réinitialiser l'attribut "data-error-visible" pour chaque champ
  Array.from(form.elements).forEach((field) => {
    if (field.type !== 'submit' && field.type !== 'reset') {
      field.parentNode.setAttribute('data-error-visible', false);
    }
  });

  // Réinitialiser le formulaire 
  form.reset();
});