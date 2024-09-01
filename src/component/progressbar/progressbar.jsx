import { useState } from "react";

import "./progressbar.scss";

export function ProgressBar() {
  const steps = [
    "Contact Info",
    "Work History",
    "Education",
    "Skill",
    "Summary",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);

  return (
    <>
      <div className="progress-bar bg-indigo-800 py-4 md:py-3">
        <div className="grid grid-flow-col justify-center  gap-2 md:gap-0">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              }`}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <i className="bi bi-check text-lg text-amber-950"></i>
                ) : (
                  i + 1
                )}
              </div>
              <p className="text-gray-500 hidden md:flex">{step}</p>
            </div>
          ))}
        </div>
        <div className="mobileDisplay md:hidden mt-4">
          <p className="text-center text-white font-semibold">
            {" "}
            {steps[currentStep] ? steps[currentStep] : "Finalize"}
          </p>
        </div>
      </div>

      <button
        className="btn"
        disabled={currentStep === 1}
        onClick={() => {
          setComplete(false);
          setCurrentStep((prev) => prev - 1);
        }}
      >
        Go back
      </button>
      <button
        className="btn"
        onClick={() => {
          currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
        }}
      >
        {currentStep === steps.length ? "Finalize" : "Next"}
      </button>
    </>
  );
}
