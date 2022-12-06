const createTag = (input, headingType) => {
  input.className = 'input';
  input.classList.add(headingType);
  input.textContent = input.textContent.slice(2).trim();
  headingType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${headingType}`);
  input.focus();
};

export default createTag;
