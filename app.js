//Define vars for result block and loader
const results = document.querySelector('#results');
const loader = document.querySelector('#loading');

document.getElementById('loan-form').addEventListener('submit', function (e) {


    //Hide results
    results.style.display = 'none';

    //Show loader
    loader.style.display = 'block';

    setTimeout(calculateResult, 2000);

    e.preventDefault();
});

function calculateResult(e) {
    //UI varscons
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    console.log('Submitted');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;


    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest / (x - 1));

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        loader.style.display = 'none';
        results.style.display = 'block';
    } else {
        document.querySelector('#loading').style.display = 'none';
        showError('Please check your numbers');
    }
}

//Show error function
function showError(error) {
    //Hide results
    results.style.display = 'none';

    //Show loader
    loader.style.display = 'none';
    //create error block
    const errorDiv = document.createElement('div');
    errorDiv.innerText = error;
    errorDiv.className = 'alert alert-danger';

    //Get elements from calculator
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Insert error into DOM
    card.insertBefore(errorDiv, heading);

    //Clear error after some time

    setTimeout(clearError, 3000);

    function clearError() {
        document.querySelector('.alert').remove();
    }
}