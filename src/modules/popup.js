import textIcon from '../images/text.svg';

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
      <button class="popup__item">
        <img src="${textIcon}" alt="heading icon" width="30">
        <div>
          <h4>Heading 1</h4>
          <p>Big Section heading</p>
        </div>
      </button>
      <button class="popup__item">
        <img src="${textIcon}" alt="heading icon" width="30">
        <div>
          <h4>Heading 2</h4>
          <p>Medium Section heading</p>
        </div>
      </button>
      <button class="popup__item">
        <img src="${textIcon}" alt="heading icon" width="30">
        <div>
          <h4>Paragraph</h4>
          <p>Normal text</p>
        </div>
      </button>
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
