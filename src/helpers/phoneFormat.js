export function phoneFormat(formEl) {
  let phoneValue = formEl.phoneInput.value.replace(/\D/g, "");

  if (phoneValue.length > 11) {
    phoneValue = phoneValue.slice(0, 11);
  }

  if (phoneValue.length > 2) {
    phoneValue = `(${phoneValue.slice(0, 2)}) ${phoneValue.slice(2)}`;
  }

  if (phoneValue.length > 10) {
    phoneValue = `${phoneValue.slice(0, 10)}-${phoneValue.slice(10)}`;
  }

  formEl.phoneInput.value = phoneValue;
}
