
window.addEventListener('load', () => {
  fetch('superheroes.php')
  .then(response => response.text())
  .then(data => {
  // Here's some data!
  alert(data)
  })
  .catch(error => {
  console.log(error);
});
     
});
 