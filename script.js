const email = document.getElementById('email');
const password = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const commentCounter = document.getElementById('counter');
const evaluationForm = document.querySelector('#evaluation-form');
const main = document.getElementsByTagName('main')[0];

function loginValidation() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  }
  alert('Email ou senha inválidos.');
}

loginBtn.addEventListener('click', loginValidation);

function submitValidation() {
  if (agreement.value === 'on') {
    submitBtn.disabled = false;
  }
}

agreement.addEventListener('change', submitValidation);

function characterCounter() {
  commentCounter.innerText = 500 - (comment.value.length);
}

comment.addEventListener('input', characterCounter);

// =============== Requisito 21 ============================

function nameData() {
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  return `Nome: ${name} ${lastName}`;
}

function emailData() {
  const emailValue = document.getElementById('input-email');
  return `Email: ${emailValue.value}`;
}

function casaData() {
  return `Casa: ${document.getElementById('house').value}`;
}

function familyData() {
  const radioFamily = document.querySelectorAll('.evaluation-form-input-radio');
  let family;
  for (let i = 0; i < radioFamily.length; i += 1) {
    if (radioFamily[i].checked === true) {
      family = `Família: ${radioFamily[i].value}`;
      break;
    } else {
      family = 'Família:';
    }
  }
  return family;
}

function materiasData() {
  const materias = document.querySelectorAll('.evaluation-form-input-checkbox');
  const materiasChecked = [];
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked === true) {
      materiasChecked.push(materias[i]);
    }
  }
  let materiasText = 'Matérias:';
  for (let i = 0; i < materiasChecked.length; i += 1) {
    materiasText += ` ${materiasChecked[i].value},`;
  }
  return materiasText.slice(0, -1);
}

function ratingData() {
  const radioRate = document.querySelectorAll('#container-radio input');
  for (let i = 0; i < radioRate.length; i += 1) {
    if (radioRate[i].checked === true) {
      return `Avaliação: ${radioRate[i].value}`;
    }
  }
  return 'Avaliação:';
}

function obsData() {
  return `Observações: ${document.querySelector('textarea').value}`;
}

function formDataInnerHTML() {
  let innerHTML = `${nameData()}<br>`;
  innerHTML += `${emailData()}<br>`;
  innerHTML += `${casaData()}<br>`;
  innerHTML += `${familyData()}<br>`;
  innerHTML += `${materiasData()}<br>`;
  innerHTML += `${ratingData()}<br>`;
  innerHTML += `${obsData()}<br>`;
  return innerHTML;
}

function formSubmit(event) {
  event.preventDefault();
  evaluationForm.className = 'display-none';
  const formData = document.createElement('div');
  formData.id = 'form-data';
  main.appendChild(formData);
  formData.innerHTML = `${formDataInnerHTML()}`;
}

submitBtn.addEventListener('click', formSubmit);
