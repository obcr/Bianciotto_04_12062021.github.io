function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector("form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");
const btnSubmit = document.querySelectorAll(".btn-submit");
const firstMessage = document.getElementById("firstMessage");
const lastMessage = document.getElementById("lastMessage");
const emailMessage = document.getElementById("emailMessage");
const birthMessage = document.getElementById("birthMessage");
const quantityMessage = document.getElementById("quantityMessage");
const modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// valid event
btnSubmit.forEach((btn) => btn.addEventListener("click", valid));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// formulaire display no
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


// Valid form
function validate() {
  console.log('test');
  let firstValid = checkFirst();
  let lastValid = checkLast();
  let emailValid = checkEmail();
  let birthdateValid = checkbirthdate();
  let quantityValid = checkquantity();
  let locationValid = checklocation();
  let checkbox1Valid = checkcheckbox1();

  if (firstValid && lastValid && emailValid && birthdateValid && quantityValid && locationValid && checkbox1Valid) {
    const data = {
      firstValid: firstValid,
      lastValid: lastValid,
      emailValid: emailValid,
      birthdateValid: birthdateValid,
      quantityValid: quantityValid,
      locationValid: locationValid,
    };
    console.log(data);
    modalBody.innerHTML = "Merci ! Votre réservation a été reçue.";
    modalBody.style.height = "250px";
    modalBody.style.paddingTop = "50px";
    modalBody.style.paddingLeft = "100px";
    modalBody.style.paddingRight = "100px";
    modalBody.style.textAlign = "center";
    console.log("okValid");
    return true;
}
}

function checkFirst() {
  const first = document.getElementById("first");
  if (first.value.length > 2) {
    first.closest(".formData").setAttribute("data-error-visible", false);
    console.log("firsttrue");
    return true;
  } else {
    first.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    first.closest(".formData").setAttribute("data-error-visible", true);
    console.log("firstfalse");
    return false;
  }
}

function checkLast() {
  const last = document.getElementById("last");
  if (last.value.length > 2) {
    last.closest(".formData").setAttribute("data-error-visible", false);
    console.log("lasttrue");
    return true;
  } else {
    last.closest(".formData").setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    last.closest(".formData").setAttribute("data-error-visible", true);
    console.log("lastfalse");
    return false;
  }
}

function checkEmail() {
  const email = document.getElementById("email");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ((regexEmail).test(email.value)) {
    email.closest(".formData").setAttribute("data-error-visible", false);
    console.log("mailtrue");
    return true;
  } else {
    email.closest(".formData").setAttribute("data-error", "Veuillez indiquer votre email.");
    email.closest(".formData").setAttribute("data-error-visible", true);
    console.log("mailfalse");
    return false;
  }
}

function checkbirthdate() {
  const birthDate = document.getElementById("birthdate");
  let regexBirth = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if ((regexBirth).test(birthDate.value)) {
    birthDate.closest(".formData").setAttribute("data-error-visible", false);
    console.log("birthtrue");
    return true;
  } else {
    birthDate.closest(".formData").setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    birthDate.closest(".formData").setAttribute("data-error-visible", true);
    console.log("birthfalse");
    return false;
  }
}

function checkquantity() {
  const quantity = document.getElementById("quantity");
  let regexQuantity = /^[0-9]$|^[1-9][0-9]$|^(99)$/;
  if ((regexQuantity).test(quantity.value)) {
    quantity.closest(".formData").setAttribute("data-error-visible", false);
    console.log("quantitytrue");
    return true;
  } else {
    quantity.closest(".formData").setAttribute("data-error", "Veuillez indiquer un nombre");
    quantity.closest(".formData").setAttribute("data-error-visible", true);
    console.log("quantityfalse");
    return false;
  }
}

function checklocation() {
  const location = document.querySelectorAll("input[type=radio]:checked");
  const parent = document.getElementById("location1");
  if (location.length === 1) {
    parent.closest(".formData").setAttribute("data-error-visible", false);
    console.log("locationtrue");
    return true;
  } else {
    parent.closest(".formData").setAttribute("data-error", "Vous devez choisir une option.");
    parent.closest(".formData").setAttribute("data-error-visible", true);
    console.log("locationfalse");
    return false;
  }
}

function checkcheckbox1() {
  const checkBox1 = document.getElementById("checkbox1");
  if (checkBox1.checked == true) {
    checkBox1.closest(".formData").setAttribute("data-error-visible", false);
    console.log("checkBox1true");
    return true;
  } else {
    checkBox1.closest(".formData").setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    checkBox1.closest(".formData").setAttribute("data-error-visible", true);
    console.log("checkBox1false");
    return false;
  }
}

// close modal form
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});