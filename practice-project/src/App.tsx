import "./App.css";
import "./index.css";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeInvestmentDetails(newInputDetail, newValue) {
    setInvestmentDetails((prevInvestmentDetails) => {
      return {
        ...prevInvestmentDetails,
        [newInputDetail]: +newValue,
      };
    });
  }

  const inputIsValid = investmentDetails.duration > 0;

  return (
    <>
      <Header />
      <main>
        <UserInput
          onChangeInvestmentDetails={handleChangeInvestmentDetails}
          investmentDetails={investmentDetails}
        />
        {inputIsValid && <Results investmentDetails={investmentDetails} />}
      </main>
    </>
  );
}

export default App;
