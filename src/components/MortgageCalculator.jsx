import { useState } from "react";
const mortgageAmountId = "mortgageAmount";
const interestRateId = "interestRate";
const loanTermId = "loanTerm";
const repaymentRadioId = "repayment";
const interestOnlyRadioId = "interestOnly";
function MortgageCalculator() {
    const [userInput, setUserInput] = useState({
        [mortgageAmountId]: 0,
        [interestRateId]: 0,
        [loanTermId]: 0,
        [repaymentRadioId]: false,
        [interestOnlyRadioId]: false
    });

    function handleInputChange(fieldId, event) {
        setUserInput(previousUserInput => {
            return {
                ...previousUserInput,
                [fieldId] : event.target.value
            };    
        });
    }

    console.log(userInput);

    return (
        <>
            <div class="flex w-full">
                <h1 class="font-plusjakarta-bold">Mortgage Calculator</h1>
                <a>Clear All</a>
            </div>
            
            <label>Mortgage Amount</label>
            <input id={mortgageAmountId} type="number" value={userInput.mortgageAmount} 
                onChange={ event => handleInputChange(mortgageAmountId, event)}/>
            <label>Interest Rate (%)</label>
            <input id={interestRateId} type="number" value={userInput.interestRate} 
                onChange={event => handleInputChange(interestRateId, event)} />
            <label>Loan Term (years)</label>
            <input id={loanTermId} type="number" value={userInput.loanTerm} 
                onChange={event => handleInputChange(loanTermId, event)} />
            <label>Mortgage Type</label>
            <div>
                <input type="radio" id="repayment" value="Repayment"/>
                <label for="repayment">Repayment</label>
            </div>
            <div>
                <input type="radio" id="interestOnly" value="Interest Only"/>
                <label for="interestOnly">Interest Only</label>
            </div>
            <button>Calculate Repayments</button>
        </>
        );    

}

export default MortgageCalculator;