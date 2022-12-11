const filterOptions = (searchInput) => {
  searchInput = searchInput.slice(1);
  const options = [...document.querySelectorAll('.popup__item')];
  options.forEach((option) => {
    const title = option.querySelector('h4').textContent;
    option.style.display = title
      .toLowerCase()
      .includes(searchInput.toLowerCase())
      ? 'flex'
      : 'none';
  });
};

export default filterOptions;
