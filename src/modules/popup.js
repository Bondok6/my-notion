import optionsList from './optionsList.js';
import createOption from './createOption.js';

let flag = false;
let active = -1;

const createPopup = (currentInput) => {
  if (flag) return;
  const popupHtml = `
  <div class="popup">
    <div class="popup__header">
      <h4>Basic Blocks</h4>
    </div>
    <div class="popup__list" role="listitem">
      ${optionsList.map((option) => createOption(option)).join('')}
    </div>
  </div>`;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    flag = false;
  }
};

document.addEventListener('keydown', (e) => {
  const popOptions = [...document.querySelectorAll('.popup__item')];
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
