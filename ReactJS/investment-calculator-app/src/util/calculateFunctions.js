export function calculateInvestment(userInput) {
  let annualData = [];
  let investmentVal = userInput.initialInvestment;

  for (let i = 0; i < userInput.duration; i++) {
    const interestInYear = investmentVal * (userInput.expectedReturn / 100);
    investmentVal += interestInYear + userInput.annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestInYear,
      valueEndOfYear: investmentVal,
      annualInvestment: userInput.annualInvestment,
    });
  }
  return annualData;
}
