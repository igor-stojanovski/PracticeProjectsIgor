import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ investmentDetails }) {
  const results = calculateInvestmentResults(investmentDetails);

  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result" className=" center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((investment) => {
          const totalInterest =
            investment.valueEndOfYear -
            investment.annualInvestment * investment.year -
            initialInvestment;

          const totalAmountInvested = investment.valueEndOfYear - totalInterest;

          return (
            <tr key={investment.year}>
              <td>{investment.year}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
