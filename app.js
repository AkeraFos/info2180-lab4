window.addEventListener('load', function() {
  let btn = document.querySelector('btn');

  btn.addEventListener('click', function(element) {
      element.preventDefault();


  fetch('superheroes.php')
  .then(response => response.text())
  .then(data => {
  alert(data)
})
.catch(error => {
  console.log(error);
})
