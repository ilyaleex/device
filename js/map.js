

const openMap = document.querySelector('.open-map');
const map = document.querySelector('.modal-map');
const closeMap = map.querySelector('.close');
const addressLink = document.querySelector('.address-link');


openMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.add('modal-show');
});


closeMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});


window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains('modal-show')) {
      evt.preventDefault();
      map.classList.remove('modal-show');
    }
  }
});


addressLink.addEventListener('click', function (evt) {
  evt.preventDefault();
});
