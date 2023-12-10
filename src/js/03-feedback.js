import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const feedback = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.addEventListener(
  'input',
  throttle(() => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({ email, message })
    );
  }, 500)
);
const { email, message } = feedback;
document.addEventListener('DOMContentLoaded', event => {
  form.elements.email.value = email || '';
  form.elements.message.value = message || '';
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (form.elements.email.value != '' && form.elements.message.value != '') {
    console.log(email, message);
    form.elements.email.value = '';
    form.elements.message.value = '';
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Всі поля повинні бути заповнені');
  }
});
