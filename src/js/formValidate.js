import "/src/sass/style.scss";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form__request-fields');
  if (!form) return;

  const inputs = form.querySelectorAll('input');
  const textarea = form.querySelector('#question');
  const consent = form.querySelector('#consent');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;

    inputs.forEach(i => i.classList.remove('form__input--error'));
    textarea?.classList.remove('form__input--error');
    consent?.classList.remove('form__checkbox--error');

    inputs.forEach(input => {
      if (input.type === 'checkbox') return;
      if (input.value.trim() === '') {
        input.classList.add('form__input--error');
        hasError = true;
      } else if (input.type === 'email' && !input.checkValidity()) {
        input.classList.add('form__input--error');
        hasError = true;
      }
    });

    if (textarea && textarea.value.trim() === '') {
      textarea.classList.add('form__input--error');
      hasError = true;
    }

    if (consent && !consent.checked) {
      consent.classList.add('form__checkbox--error');
      hasError = true;
    }

    if (hasError) return;

    const formData = new FormData(form);
    console.log('Форма отправлена:', Object.fromEntries(formData.entries()));
    form.reset();
  });

  inputs.forEach(input => {
    input.addEventListener('input', () => input.classList.remove('form__input--error'));
  });
  textarea?.addEventListener('input', () => textarea.classList.remove('form__input--error'));
  consent?.addEventListener('change', () => consent.classList.remove('form__checkbox--error'));
});