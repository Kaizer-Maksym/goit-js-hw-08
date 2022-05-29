import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector(' input'),
  textarea: document.querySelector(' textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(changeInputValue, 500));
refs.form.addEventListener('submit', onFormSubmit);

function changeInputValue(e) {
  const dataForm = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function completionForm() {
  const formValue = JSON.parse(localStorage.getItem(STORAGE_KEY)) || '';
  if (formValue) {
    refs.input.value = formValue.email;
    refs.textarea.value = formValue.message;
  }
}
completionForm();

function onFormSubmit(e) {
  e.preventDefault();

  console.log(localStorage.getItem(STORAGE_KEY));

  localStorage.removeItem(STORAGE_KEY);

  e.currentTarget.reset();
}
