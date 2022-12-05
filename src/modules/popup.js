const popup = document.querySelector('.popup');
let flag = false;

const createPopup = () => {
  if (flag) return;
  popup.classList.remove('hidden');
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.classList.add('hidden');
    flag = false;
  }
};

export { createPopup, removePopup };
