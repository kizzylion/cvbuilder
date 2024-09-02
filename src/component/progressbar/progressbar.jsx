/* eslint-disable react/prop-types */
import { useState } from "react";

import "./progressbar.scss";

export function ProgressBar({ array, currentStep }) {
  const steps = array;
  // const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);
  console.log(currentStep);

  return (
    <div className="progress-bar bg-indigo-800 md:bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-4 md:py-3">
        <div className="grid grid-flow-col w-full justify-center  gap-2 md:gap-0">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i && "active"} ${
                (i < currentStep || complete) && "complete"
              }`}
            >
              <div className="step">
                {i < currentStep || complete ? (
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
            {steps[currentStep] || steps[currentStep] === 0
              ? steps[currentStep]
              : "Finalize"}
          </p>
        </div>
      </div>

      <button
        className="btn"
        disabled={currentStep === 0}
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
    </div>
  );
}
