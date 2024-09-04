import { useState } from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { ContactInfo } from "./ContactInfo";
import { Education } from "./Education";
import { WorkHistory } from "./Work";
import { Skill } from "./skill";
import { Summary } from "./summary";

export function MultiForm({ isOpen, closeMultiform }) {
  //   const [form1, setForm1] = useState({
  //     name: "",
  //     email: "",
  //     phone: "",
  //   });
  //   const [form2, setForm2] = useState({
  //     address: "",
  //     city: "",
  //     state: "",
  //   });
  //   const [form3, setForm3] = useState({
  //     country: "",
  //     pincode: "",
  //   });
  //   const [form4, setForm4] = useState({
  //     gender: "",
  //     age: "",
  //   });
  //   const [progress, setProgress] = useState(0);
  //   const [activeStep, setActiveStep] = useState(0);
  //   const [error, setError] = useState(null);
  //   const [success, setSuccess] = useState(null);
  //   const [loading, setLoading] = useState(false);

  let formSteps = [
    "Contact Infos",
    "Work History",
    "Education",
    "Skill",
    "Summary",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  function handleNext() {
    currentStep === formSteps.length
      ? console.log("completed")
      : setCurrentStep((prev) => prev + 1);
  }

  function handleBack() {
    // setComplete(false);

    setCurrentStep((prev) => prev - 1);
  }

  function displayActiveForm(currentStep) {
    switch (currentStep) {
      case 0:
        return (
          <ContactInfo
            isOpen={isOpen}
            closeMultiform={closeMultiform}
            handleNext={handleNext}
          />
        );
      case 1:
        return <WorkHistory handleBack={handleBack} handleNext={handleNext} />;
      case 2:
        return <Education />;
      case 3:
        return <Skill />;
      case 4:
        return <Summary />;
      default:
        return <div className="text-red text-7xl font-bold">Invalid Step</div>;
    }
  }

  return (
    <section>
      <ProgressBar array={formSteps} currentStep={currentStep} />
      <div
        id="Forms"
        className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-5"
      >
        {displayActiveForm(currentStep)}
      </div>
    </section>
  );
}
