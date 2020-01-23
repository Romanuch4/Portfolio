(function() {
  const button = document.querySelector('.fifth__button');

  const ajaxGet = function() {
    const request = new XMLHttpRequest();
    request.open('GET', 'contact.php');
    request.send();
    request.onreadystatechange = function() {
      if(request.readyState == 4 && request.status == 200) {
        console.log(request.responceText);
      }
      else {
        window.location.href = 'https://romanuch4.github.io/Portfolio/';
      }
    }
  }

  button.addEventListener('click', ajaxGet);
})();