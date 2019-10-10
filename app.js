// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show loader gif
  document.getElementById('loading').style.display = 'block';

  // show for 2 sec
  setTimeout(calculateResults, 2000)


  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  console.log('Calculating...');

  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


  // calculations
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;


  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  // Check if monthly is a finite number
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);

    // total payment value
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);

    // total interest
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide loader/spinner after 2 sec
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please check your numbers');
  }
}


// Show Error
function showError(error) {
  // Hide results if any
  document.getElementById('results').style.display = 'none';

  // Hide loader/spinner after 2 sec
  document.getElementById('loading').style.display = 'none';

  // create a div
  const errorDiv = document.createElement('div');

  // Insert to DOM after creating div and textNode/append
  // Get Element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  // Add class to div
  errorDiv.className = 'alert alert-danger'

  // Create textNode and append to div
  errorDiv.appendChild(document.createTextNode(error))

  // Insert error above heading
  //pass in element u wanna put it, then put what insertB4
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 sec with setTimeout
  setTimeout(clearError, 3000);
}

// Create clearError
function clearError() {
  document.querySelector('.alert').remove();
}










































