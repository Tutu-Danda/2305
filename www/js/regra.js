
var calculate    = document.getElementById("calculate");
var result       = document.getElementById("result");

function calculatePercentage() {
  var primeiro   = parseFloat(document.getElementById("first").value);
  var segundo = parseFloat(document.getElementById("second").value);
  var terceiro = parseFloat(document.getElementById("three").value);

  var partialPercentage =  (segundo * terceiro) / primeiro;
  
  result.innerHTML = "X é igual a " + partialPercentage + ".";
}

calculate.addEventListener('click', calculatePercentage);