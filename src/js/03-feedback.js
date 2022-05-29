import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('label input'),
  textarea: document.querySelector('label textarea'),
};
const EMAIL_KEY = 'feedback-email';
const TEXTAREA_KEY = 'feedback-massage';

completionOfEmail();
completionOfTextarea();

refs.form.addEventListener('submit', onFormSubmit);
refs.inputEmail.addEventListener('input', throttle(changeInputValue, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  const data = {
    email: localStorage.getItem(EMAIL_KEY),
    message: localStorage.getItem(TEXTAREA_KEY),
  };

  console.log(data);

  localStorage.removeItem(EMAIL_KEY);
  localStorage.removeItem(TEXTAREA_KEY);

  e.currentTarget.reset();
}

function changeInputValue(e) {
  const email = e.target.value;
  localStorage.setItem(EMAIL_KEY, email);
}

function onTextareaInput(e) {
  const message = e.target.value;
  localStorage.setItem(TEXTAREA_KEY, message);
}

function completionOfEmail() {
  const saveEmail = localStorage.getItem(EMAIL_KEY);

  if (saveEmail) {
    refs.inputEmail.value = saveEmail;
  }
}

function completionOfTextarea() {
  const saveTextareaValue = localStorage.getItem(TEXTAREA_KEY);

  if (saveTextareaValue) {
    refs.textarea.value = saveTextareaValue;
  }
}
