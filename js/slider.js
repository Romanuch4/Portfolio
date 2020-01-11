(function() {
  const buttons = document.querySelectorAll('.fourth__slider__button'),
        content = document.querySelector('.fourth__slider__content');

  const moveContent = (evt) => {
    content.style.left = `${evt.target.dataset.left}%`;
  };

  const moveContent2 = (evt) => {
    if(evt.key === 'Enter') {
      moveContent(evt);
    }
  };

  buttons.forEach(elem => {
    elem.addEventListener('click', evt => moveContent(evt));
    elem.addEventListener('keydown', evt => moveContent2(evt));
  });
})();