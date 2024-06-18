import Header from "../components/Header";
import UserInput from "../components/UserInput";
import { useState } from "react";
import Result from "../components/Result";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 50,
    duration: 10,
  });

  const inputIsValid = input.duration >= 1;

  function handleInputChange(inputPropety, value) {
    setInput((prevInput) => {
      return { ...prevInput, [inputPropety]: +value };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={input} />
      {!inputIsValid && <p className="center">Enter valid duration</p>}      {inputIsValid && <Result resultInput={input} />}
    </>
  );
}

export default App;
