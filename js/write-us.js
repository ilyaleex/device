

const modalLink = document.querySelector('.write-us');
const modal = document.querySelector('.modal-feedback');
const modalClose = modal.querySelector('.close');
const username = modal.querySelector('.username');
const userEmail = modal.querySelector('.user-email');
const letter = modal.querySelector('.text-letter');
const modalForm = modal.querySelector('.modal-form');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


modalLink.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  username.focus();


  if (storage) {
    username.value = storage;
    userEmail.value = storage;
    letter.focus();
  } else {
    username.focus();
  }
});


modalClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});


modalForm.addEventListener('submit', function(evt) {
  if (!username.value || !userEmail.value || !letter.value) {
    evt.preventDefault();
    modal.classList.remove('modal-error');
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', username.value);
      localStorage.setItem('email', userEmail.value);
    }
  }
});


window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});
