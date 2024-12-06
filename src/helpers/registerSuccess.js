export function registerSuccess(formEl, messagesEl, successMsg) {
  formEl.nameInput.disabled = true;
  formEl.emailInput.disabled = true;
  formEl.phoneInput.disabled = true;
  formEl.messageInput.disabled = true;

  formEl.submitBtn.disabled = true;

  messagesEl.submitSuccess.textContent = successMsg;

  setTimeout(function () {
    formEl.nameInput.value = "";
    formEl.emailInput.value = "";
    formEl.phoneInput.value = "";
    formEl.messageInput.value = "";

    messagesEl.submitSuccess.textContent = "";

    formEl.nameInput.disabled = false;
    formEl.emailInput.disabled = false;
    formEl.phoneInput.disabled = false;
    formEl.messageInput.disabled = false;
  }, 3500);
}
