
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
const closeConfirmationBtn = document.getElementById('close-confirmation');

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

closeConfirmationBtn.addEventListener('click', () => {
  modalBg.style.display = 'none'; // Cacher le modal
  confirmationMessage.classList.add('hidden'); // Cacher le message de confirmation
});

// submit form
form.addEventListener('submit', event => validForm(event))


//CHAMPS FORMULAIRE
const validForm = event => {
  event.preventDefault()

  // Vérifier si le formulaire est valide avant d'afficher le message de confirmation
  if (isFormValid()) {
    // Cacher le formulaire en modifiant la propriété "display"
    form.style.display = 'none';

    // Afficher le message de confirmation en modifiant la propriété "display"
    confirmationMessage.style.display = 'block';
  }
}

// Fonction pour vérifier si le formulaire est valide
const isFormValid = () => {
  //PRENOM
  // Vérification de la validité du prénom (lettres uniquement)
  const isValidFirstName = /^([a-zA-Z]){2,}$/.test(inputFirstName.value)
  inputFirstName.parentNode.setAttribute("data-error-visible", !isValidFirstName)

  //NOM
  // Vérification de la validité du nom (lettres uniquement)
  const isValidLastName = /^([a-zA-Z]){2,}$/.test(inputLastName.value)
  inputLastName.parentNode.setAttribute("data-error-visible", !isValidLastName)

  // EMAIL
  // Validation du champ email
  const isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(inputEmail.value)
  inputEmail.parentNode.setAttribute("data-error-visible", !isValidEmail)

  //DATE DE NAISSANCE
  // Initialisation de l'attribut "data-error-visible"
  inputBirthdate.parentNode.setAttribute("data-error-visible", false);

  // Vérification si la date de naissance est vide ou supérieure à la date actuelle
  const enteredDate = new Date(inputBirthdate.value)
  const isDateEmptyOrFuture = !inputBirthdate.value || enteredDate > new Date()

  // Vérifier si la date est valide (et que la chaîne n'était pas invalide) 
  //  return !isNaN(date.getTime())
  inputBirthdate.parentNode.setAttribute("data-error-visible", isDateEmptyOrFuture);

  // PARTICIPATION
  const isNumber = /^([0-9]){1,}$/.test(inputQuantity.value)
  // Mise à jour de l'attribut "data-error-visible" en fonction de la validité du champ
  inputQuantity.parentNode.setAttribute("data-error-visible", !isNumber)

  // RADIOS
  // Validation des boutons radio
  const isRadioChecked = Array.from(inputsRadio).some(element => element.checked)
  formDataRadio.setAttribute("data-error-visible", !isRadioChecked)

  // CHECKBOX
  inputCheckbox1.parentNode.setAttribute("data-error-visible", !inputCheckbox1.checked);

  return (
    isValidFirstName &&
    isValidLastName &&
    isValidEmail &&
    !isDateEmptyOrFuture &&
    isNumber &&
    isRadioChecked &&
    inputCheckbox1.checked
  )

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