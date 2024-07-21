document.querySelector("#myform").addEventListener("submit", function (event) {
  event.preventDefault(); 
  const principle = document.querySelector("#Amount").value;
  const termYears = document.getElementById("Term").value;
  const interestRate = document.getElementById("Rate").value / 100;
  const numPayments = termYears * 12;
  if (principle == "" || termYears == "" || interestRate == "") {
    if (principle == "") {
      document.getElementById("Amount").classList.add("empty1");
      document.getElementById("inner").classList.add("empty");
      document.getElementById("error1").style.display="block";

    }
    if (termYears == "") {
      document.getElementById("Term").classList.add("empty1");
      document.getElementById("inner1").classList.add("empty");
      document.getElementById("error2").style.display="block";

    }
    if (interestRate == "") {
      document.getElementById("Rate").classList.add("empty1");
      document.getElementById("inner2").classList.add("empty");
      document.getElementById("error3").style.display="block";

    }
  if(! document.getElementById("Repayment").checked && ! document.getElementById("Interest_Only").checked){
    document.getElementById("error4").style.display="block";
  }
}
   else {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("hidden1").style.display = "block";
    const monthlyPayment =
      (principle * interestRate * Math.pow(1 + interestRate, numPayments)) /
      (Math.pow(1 + interestRate, numPayments) - 1);
    if(document.getElementById("Interest_Only").checked){
const interest_monthly=(principle*interestRate);
document.getElementById("firstout").innerHTML =
"£" + (interest_monthly/numPayments).toFixed(2);
document.getElementById("secondout").innerHTML = "£" + interest_monthly.toFixed(2);

    }
    else{
    document.getElementById("firstout").innerHTML =
      "£" + monthlyPayment.toFixed(2);
    const totalpay = monthlyPayment * numPayments;
    document.getElementById("secondout").innerHTML = "£" + totalpay.toFixed(2);
    }
  }
});
const Amt = document.getElementById("Amount"); 
Amt.addEventListener("focus", function () {
  Amt.classList.remove("empty1");
  document.getElementById("inner").classList.remove("empty");
  document.getElementById("error1").style.display="none";
});
const Ter = document.getElementById("Term"); 
Ter.addEventListener("focus", function () {
  Ter.classList.remove("empty1");
  document.getElementById("inner1").classList.remove("empty");
  document.getElementById("error2").style.display="none";


});
const Rat = document.getElementById("Rate"); 
Rat.addEventListener("focus", function () {
  Rat.classList.remove("empty1");
  document.getElementById("inner2").classList.remove("empty");
  document.getElementById("error3").style.display="none";

});
const clearButton = document.getElementById("Clear");
clearButton.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("Amount").value = "";
  document.getElementById("Rate").value = "";
  document.getElementById("Term").value = "";
  document.getElementById("hidden").style.display = "block";
  document.getElementById("hidden1").style.display = "none";
  document.getElementById("Repayment").checked=false;
  document.getElementById("Interest_Only").checked=false;
  document.getElementById("radio12").classList.remove("bg");
  document.getElementById("radio11").classList.remove("bg");

});
document.getElementById("Repayment").addEventListener("change",function(){
  document.getElementById("radio11").classList.add("bg");
  document.getElementById("radio12").classList.remove("bg");
  document.getElementById("error4").style.display="none";



})
document.getElementById("Interest_Only").addEventListener("change",function(){
  document.getElementById("radio12").classList.add("bg");
  document.getElementById("radio11").classList.remove("bg");
  document.getElementById("error4").style.display="none";
})