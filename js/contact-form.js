(function() {
  const button = document.querySelector('.fifth__button');

  const ajaxGet = () => {
    const request = XMLHttpRequest();
    request.open('GET', 'contact.php');
    request.send();
    request.onreadystatechange = function() {
      if(request.readyState == 4 && request.status == 200) {
        console.log(request.responceText);
      }
    }
  }

  button.addEventListener('click', ajaxGet);
})();