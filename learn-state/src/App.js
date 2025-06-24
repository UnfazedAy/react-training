import "./index.css";
import React from "react";

const messages = [
  "Hello React",
  "React is a Framework",
  "This is a test message",
];

const App = () => {
  const [step, setStep] = React.useState(1);
  const handlePrev = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  }
  const handleNext = () => {
    setStep((prev) => (prev < messages.length ? prev + 1 : prev));
  }

  return (
    <div className="wrapper">
      <div className="numberWrapper">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p>
        {step}: {messages[step - 1]}
      </p>
      <div className="btnGroup">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};


export default App;
