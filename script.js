function calculateMaturityAmount(){

    // Get input value form the elements

    const principle = parseFloat(document.getElementById('principle').value);
    const intersetRate = parseFloat(document.getElementById('intersetRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // perfrom the calculation

    const maturityAmount = principle + (principle * intersetRate * tenure)/100;


    // Display the Result

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;

}

// Attach the event lisiner to the calculate Button

document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);
