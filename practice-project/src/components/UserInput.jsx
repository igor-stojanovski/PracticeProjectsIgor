import React from "react";

export default function UserInput({
  onChangeInvestmentDetails,
  investmentDetails,
}) {
  return (
    <div id="user-input">
      <div className="input-group first-group">
        <div className="wrapper">
          <label htmlFor="initial-investment">Initial investment</label>
          <input
            type="number"
            name="initial-investment"
            value={investmentDetails.initialInvestment}
            onChange={(event) =>
              onChangeInvestmentDetails("initialInvestment", event.target.value)
            }
          />
        </div>
        <div className="wrapper">
          <label htmlFor="annual-investment">annual investment</label>
          <input
            type="number"
            name="annual-investment"
            value={investmentDetails.annualInvestment}
            onChange={(event) =>
              onChangeInvestmentDetails("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group ">
        <div className="wrapper">
          <label htmlFor="expected-return">Expected return</label>
          <input
            type="number"
            value={investmentDetails.expectedReturn}
            name="expected-return"
            onChange={(event) =>
              onChangeInvestmentDetails("expectedReturn", event.target.value)
            }
          />
        </div>
        <div className="wrapper">
          <label htmlFor="duration">duration</label>
          <input
            type="number"
            name="duration"
            value={investmentDetails.duration}
            onChange={(event) =>
              onChangeInvestmentDetails("duration", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
