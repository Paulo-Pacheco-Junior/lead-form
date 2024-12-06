import { btnToggle } from "./helpers/btnToggle.js";
import { phoneFormat } from "./helpers/phoneFormat.js";
import { registerSuccess } from "./helpers/registerSuccess.js";

const formEl = {
  nameInput: document.getElementById("name"),
  emailInput: document.getElementById("email"),
  phoneInput: document.getElementById("phone"),
  messageInput: document.getElementById("message"),
  submitBtn: document.getElementById("submitBtn"),
};

const messagesEl = {
  nameError: document.getElementById("nameError"),
  emailError: document.getElementById("emailError"),
  phoneError: document.getElementById("phoneError"),
  submitSuccess: document.getElementById("successMessage"),
};

formEl.nameInput.addEventListener("input", () => btnToggle(formEl));
formEl.emailInput.addEventListener("input", () => btnToggle(formEl));

formEl.phoneInput.addEventListener("input", () => phoneFormat(formEl));

function nameValidate() {
  if (formEl.nameInput.value.trim().length < 2) {
    messagesEl.nameError.textContent = "campo nome inválido";
    return false;
  } else {
    messagesEl.nameError.textContent = "";
    return true;
  }
}

function emailValidate() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(formEl.emailInput.value)) {
    messagesEl.emailError.textContent = "campo email inválido";
    return false;
  } else {
    messagesEl.emailError.textContent = "";
    return true;
  }
}

function phoneValidate() {
  const phoneValue = formEl.phoneInput.value.replace(/\D/g, "");

  if (phoneValue && phoneValue.length !== 11) {
    messagesEl.phoneError.textContent = "campo telefone inválido";
    return false;
  } else {
    messagesEl.phoneError.textContent = "";
    return true;
  }
}

document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = nameValidate();
  const isEmailValid = emailValidate();
  const isPhoneValid = phoneValidate();

  if (isNameValid && isEmailValid && isPhoneValid) {
    const successMsg = "cadastro realizado com sucesso";

    registerSuccess(formEl, messagesEl, successMsg);

    const leadData = {
      name: formEl.nameInput.value,
      email: formEl.emailInput.value,
      phone: formEl.phoneInput.value.replace(/\D/g, ""),
      message: formEl.messageInput.value,
    };

    localStorage.setItem("leadData", JSON.stringify(leadData));
  } else {
    messagesEl.submitSuccess.textContent = "";
  }
});
