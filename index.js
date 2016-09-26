$(document).ready(function() {

    $("#calculateButton").click(function() {
        
    	var inputBalance = $("#inputBalance").val()
		var inputInterestRate =$("#inputInterestRate").val()
		var inputLoanTerm =$("#inputLoanTerm").val()
		var period =$("#period").val()

        // MONTHLY INTEREST RATE      
        var monthlyInterestRate = (inputInterestRate / 100) / period;

        // NUMBER OF PAYMENTS
        var numberOfPayments = inputLoanTerm * period;

        // COMPOUNDED INTEREST RATE
        var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments);

        // INTEREST QUOTIENT
        var interestQuotient = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

        // FINAL / MONTHLY PAYMENT CALCULATION
        var monthlyPayment = inputBalance * interestQuotient;

        // DISPLAY ANSWER WITH TEXT 
        $("#myOutput").text("Your monthly payment would be $ " + Math.round(monthlyPayment) +".00");


    });

});

