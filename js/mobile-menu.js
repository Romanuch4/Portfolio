(function() {
  const mobileMenuIcon = document.querySelector('.header__mobile-menu'),
        mobileMenu = document.querySelector('.header__nav');
  let count = 0;

  function showMenu() {
    if(count === 1) {
      mobileMenu.style = `top: -1000px`;
      count = 0;
    }
    else {
      mobileMenu.style = `top: 0px`;
      count++;
    }
    mobileMenuIcon.classList.toggle('header-mobile-menu-2');
  };

  function showMenu2(evt) {
    if(evt.key === 'Enter') {
      showMenu();
    }
  }

  mobileMenuIcon.addEventListener('click', showMenu);
  mobileMenuIcon.addEventListener('keydown', showMenu2);

})();