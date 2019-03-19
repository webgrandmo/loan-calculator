document.getElementById('loan-form').addEventListener('submit', calculateResult);

function calculateResult(e) {

    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('monthly-interest');
    console.log('Submitted');

    e.preventDefault();
}