
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

// Modifier la fonction de gestion de la soumission du formulaire
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // ... Votre code de validation existant ...

  // Vérifier si le formulaire est valide avant d'afficher le message de confirmation
  if (isFormValid()) {
    // Cacher le formulaire en modifiant la propriété "display"
    form.style.display = 'none';

    // Afficher le message de confirmation en modifiant la propriété "display"
    confirmationMessage.style.display = 'block';
  }
});

const closeConfirmationBtn = document.getElementById('close-confirmation');

closeConfirmationBtn.addEventListener('click', () => {
  modalBg.style.display = 'none'; // Cacher le modal
  confirmationMessage.classList.add('hidden'); // Cacher le message de confirmation
});



// Fonction pour vérifier si le formulaire est valide
function isFormValid() {
  // Ajoutez ici des conditions supplémentaires si nécessaire
  return (
    inputFirstName.checkValidity() &&
    inputLastName.checkValidity() &&
    inputEmail.checkValidity() &&
    inputBirthdate.checkValidity() &&
    inputQuantity.checkValidity() &&
    Array.from(inputsRadio).some(element => element.checked) &&
    inputCheckbox1.checked
  );
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

// Initialisation de l'attribut "data-error-visible"
inputDateOfBirth.parentNode.setAttribute("data-error-visible", false);

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Validation du champ date de naissance
  const isDateOfBirthValid = inputDateOfBirth.checkValidity();

  // Vérification si la date de naissance est vide ou supérieure à la date actuelle
  const enteredDate = new Date(inputDateOfBirth.value);
  const isDateEmptyOrFuture = !inputDateOfBirth.value || enteredDate > new Date();

  // Mise à jour de l'attribut "data-error-visible"
  inputDateOfBirth.parentNode.setAttribute("data-error-visible", !isDateOfBirthValid || isDateEmptyOrFuture);
});


// PARTICIPATION

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isQuantityNotEmpty = inputQuantity.value.trim() !== '';

  // Mise à jour de l'attribut "data-error-visible" en fonction de la validité du champ
  inputQuantity.parentNode.setAttribute("data-error-visible", !isQuantityNotEmpty);
});


// RADIOS

// Écoute de l'événement "submit" du formulaire
form.addEventListener('submit', (event) => {
  // Validation des boutons radio
  const isRadioChecked = Array.from(inputsRadio).some(element => element.checked);
  formDataRadio.setAttribute("data-error-visible", !isRadioChecked);

  // Empêcher la soumission du formulaire si les boutons radio ne sont pas valides
  if (!isRadioChecked) {
    event.preventDefault();
  }
});

// CHECKBOX

// Écoute de l'événement "submit" du formulaire
form.addEventListener("submit", (event) => {
  // Vérification que la case à cocher est sélectionnée
  const checkedCheckbox = inputCheckbox1.checked;

  // Affichage du message d'erreur si la case à cocher n'est pas sélectionnée
  if (!checkedCheckbox) {
    inputCheckbox1.parentNode.setAttribute("data-error-visible", true);
  } else {
    inputCheckbox1.parentNode.removeAttribute("data-error-visible");
  }
});
