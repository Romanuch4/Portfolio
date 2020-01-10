(function() {
  const elements = document.querySelectorAll('.third__item');

  const changeLocation = () => { 
    this.addEventListener('keydown', function(evt) {
      if(evt.key === 'Enter') {
        window.location.href = `${evt.target.children[0].children[2].href}`;
      }
    });
  }

  elements.forEach(element => {
    element.addEventListener('focus',changeLocation);
  });
})();