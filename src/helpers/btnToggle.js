export function btnToggle(formEl) {
  let btnDisabled = false;

  if (
    formEl.nameInput.value.trim() === "" ||
    formEl.emailInput.value.trim() === ""
  ) {
    btnDisabled = true;
  }

  formEl.submitBtn.disabled = btnDisabled;
}
