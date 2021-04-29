window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 300000, years: 30, rate: 5}
  const amountInput = document.querySelector('#loan-amount');
  const yearsInput = document.querySelector('#loan-years');
  const rateInput = document.querySelector('#loan-rate');
  
  amountInput.value = values.amount;
  yearsInput.value = values.years;
  rateInput.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if(values.rate>0){
  const n = Math.floor(values.years * 12);
  const i = (values.rate / 100) / 12;

  return ((values.amount * i)/(1 - Math.pow((1 + i), -n))).toFixed(2);
  } else if(values.rate === 0){
      return (values.amount / (values.years * 12)).toFixed(2);
  }
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPaymentOutput) {
  const monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = `$${monthlyPaymentOutput}`;
}