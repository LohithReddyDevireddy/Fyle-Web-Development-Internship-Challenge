// Add your previous script here

// New script for error handling and modal
document.getElementById('taxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate inputs and calculate tax
    var income = document.getElementById('income').value;
    var deductions = document.getElementById('deductions').value;
    var ageGroup = document.getElementById('ageGroup').value;
    var error = false;

    // Reset error icons
    document.querySelectorAll('.error-icon').forEach(function(icon) {
        icon.style.display = 'none';
    });

    // Check for errors
    if (isNaN(income) || income === '') {
        document.querySelector('#income + .error-icon').style.display = 'inline';
        error = true;
    }
    if (isNaN(deductions) || deductions === '') {
        document.querySelector('#deductions + .error-icon').style.display = 'inline';
        error = true;
    }
    if (ageGroup === '') {
        document.querySelector('#ageGroup + .error-icon').style.display = 'inline';
        error = true;
    }

    if (!error) {
        // Calculate tax based on the provided formula and age group
        var tax = 0;
        var netIncome = parseFloat(income) - parseFloat(deductions);
        if (netIncome > 800000) {
            switch (ageGroup) {
                case '<40':
                    tax = 0.3 * (netIncome - 800000);
                    break;
                case '40-59':
                    tax = 0.4 * (netIncome - 800000);
                    break;
                case '>=60':
                    tax = 0.1 * (netIncome - 800000);
                    break;
            }
        }

        // Show modal with result
        var resultText = 'Your tax is: ₹' + tax.toFixed(2);
        document.getElementById('result').innerText = resultText;
        document.getElementById('modal').style.display = 'block';
    }
});

// Close modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});
