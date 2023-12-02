const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  let formData = {};

  for (let i = 0; i < form.elements.length; i++) {
    const input = form.elements[i];
    if (input.tagName === 'INPUT' && input.type !== 'submit') {
      const key = input.name;
      const value = input.value.trim();

      formData[key] = value;
    }
  }

  let isFieldsFilled = true;
  for (let key in formData) {
    if (formData[key] === '') {
      isFieldsFilled = false;
      break;
    }
  }

  if (isFieldsFilled) {
    console.log(formData);
    form.reset();
  } else {
    alert('All form fields must be filled in');
  }
});