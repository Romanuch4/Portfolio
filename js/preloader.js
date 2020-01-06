(function () {
  window.addEventListener('load', function () {
    let preloader = document.querySelector('.preloader');
    const stopShowPreloader = () => {
      preloader.style.display = 'none';
    };
    this.setTimeout(stopShowPreloader, 3000);
  });
})();
