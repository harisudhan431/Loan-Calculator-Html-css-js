function calculatePayment() {
            const loanAmount = parseFloat(document.getElementById('loanAmount').value);
            const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
            const loanTerm = parseFloat(document.getElementById('loanTerm').value);

            const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);
            const totalPayment = monthlyPayment * loanTerm;
            const totalInterest = totalPayment - loanAmount;

            document.getElementById('monthlyPayment').textContent = 'Rs.' + monthlyPayment.toFixed(2);
            document.getElementById('totalPayment').textContent = 'Rs.' + totalPayment.toFixed(2);
            document.getElementById('totalInterest').textContent = 'Rs.' + totalInterest.toFixed(2);
        }
