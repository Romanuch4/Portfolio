(function() {
  const button = document.querySelector('.fifth__button');

  const ajaxGet = function (evt) {
    evt.preventDefault();
    const request = new XMLHttpRequest();
    request.open('GET', '../contact.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-url');
    request.onreadystatechange = function() {
      if(request.readyState == 4 && request.status == 200) {
        console.log('1234567890');
      }
      else {
        console.log('Что-то пошло не так');
       /*  window.location.href = 'https://romanuch4.github.io/Portfolio/'; */
      }
    }

    request.send();
  }

  button.addEventListener('click', evt => ajaxGet(evt));
})();