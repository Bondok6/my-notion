import createTag from './createTag.js';

const selectOption = (input) => {
  const options = document.querySelectorAll('.popup__item');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const tagType = option.getAttribute('data-type');
      createTag(input, tagType);
    });
  });
};

export default selectOption;
