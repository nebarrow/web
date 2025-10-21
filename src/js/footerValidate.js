document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#footer__form');
  const emailInput = document.querySelector('#footer__email');
  const consentCheckbox = document.querySelector('#footer__consent');

  if (!form || !emailInput || !consentCheckbox) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    emailInput.classList.remove('footer__input--error');
    consentCheckbox.classList.remove('footer__checkbox--error');

    let hasError = false;

    if (emailInput.value.trim() === '') {
      emailInput.classList.add('footer__input--error');
      hasError = true;
    }

    if (!consentCheckbox.checked) {
      consentCheckbox.classList.add('footer__checkbox--error');
      hasError = true;
    }

    if (hasError) return;

    console.log('Форма отправлена:', emailInput.value);
    form.reset();
  });
});