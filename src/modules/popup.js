const popup = document.querySelector('.popup');
const popOptions = [...document.querySelectorAll('.popup__item')];
let flag = false;
let active = -1;

const createPopup = () => {
  if (flag) return;
  popup.classList.remove('hidden');
  flag = true;
  active = -1;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.classList.add('hidden');
    flag = false;
  }
};

document.addEventListener('keydown', (e) => {
  if (!flag) return;
  if (e.key === 'ArrowDown' && active < popOptions.length - 1) {
    active += 1;
    popOptions[active].focus();
  }
  if (e.key === 'ArrowUp' && active > 0) {
    active -= 1;
    popOptions[active].focus();
  }
  if (e.key === 'Escape') removePopup();
});

// remove popup when clicking outside
document.addEventListener('click', (e) => {
  if (e.target.closest('.popup')) return;
  removePopup();
});

export { createPopup, removePopup };
