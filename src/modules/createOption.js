import textIcon from '../images/text.svg';

const createOption = (option) => {
  const { title, description } = option;
  return `
    <button class="popup__item" data-type="${option.type}">
    <img src="${textIcon}" alt="heading icon" width="30">
    <div>
      <h4>${title}</h4>
      <p>${description}</p>
    </div>
    </button>`;
};

export default createOption;
