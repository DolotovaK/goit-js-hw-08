import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const LOCAL_KEY = 'feedback-form-state';
form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onSubmitClear);

const formData = {};
fillFormData();

function saveFormData(evt) {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function fillFormData() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_KEY));

  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }
}

function onSubmitClear(evt) {
  evt.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    alert('Не заповнені всі поля');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LOCAL_KEY)));

  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
}

// function saveFormData(evt) {
//   console.log(evt.target.name);
//   console.log(evt.target.value);

//   //   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
// }

//   const {
//     elements: { email, message },
//   } = evt.currentTarget;

//   if (localStorage.getItem('feedback-form-state')) {
//     const savedValues = JSON.parse(localStorage.getItem('feedback-form-state'));
//     console.log(savedValues);
//     email.value = savedValues.email;
//     message.value = savedValues.message;
//   }

// function onSubmit() {
//   if (localStorage.getItem('feedback-form-state')) {
//     console.log(form.elements);
//     console.log(localStorage.getItem('feedback-form-state'));

//     form.elements = localStorage.getItem('feedback-form-state');
//   }
// }

// function setInputValues(evt) {
//   const {
//     elements: { email, message },
//   } = evt.currentTarget;
//   if (localStorage.getItem('feedback-form-state')) {
//     const savedValues = JSON.parse(localStorage.getItem('feedback-form-state'));
//     console.log(savedValues);
//     email.value = savedValues.email;
//     message.value = savedValues.message;
//   }
// }

// function onButtonClick(evt) {
//   localStorage.clear();
// }
