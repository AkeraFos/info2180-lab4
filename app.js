   window.onload = function()  {
    var sButton = document.getElementById("btn");
    var httpRequest;

    sButton.onclick = createRequest;

function createRequest(){
  event.preventDefault();
  httpRequest = new XMLHttpRequest();
  var uInput = document.getElementById("inputField").value;
  var url = "superheroes.php" + "?query=" + uInput;

  httpRequest.onreadystatechange = recResults;
  httpRequest.open('GET', url);
  httpRequest.send();
}

function recResults() {
  if(httpRequest.readyState === XMLHttpRequest.DONE) {
    if(httpRequest.status === 200) {
      let response = httpRequest.responseText;
      var resultDiv = document.getElementById("result");
      resultDiv.innerHTML = response;
    } else {
      alert('There was a problem with the request.');
    }
  }
}
};