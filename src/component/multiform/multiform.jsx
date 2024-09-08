import { useState, useEffect } from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { ContactInfo } from "./ContactInfo";
import { Education } from "./Education";
import { WorkHistory } from "./Work";
import { Skill } from "./skill";
import { Summary } from "./summary";

export function MultiForm({ closeMultiform, isOpen }) {
  const [contactInfo, setContactInfo] = useState("");
  const [workHistory, setWorkHistory] = useState(new Array());

  const newResumeData = { contactInfo: contactInfo, workHistory: workHistory };

  let contact = newResumeData.contactInfo;
  let jobs = newResumeData.workHistory;

  let formSteps = [
    "Contact Info",
    "Work History",
    "Education",
    "Skill",
    "Summary",
  ];
  const addNewJob = (job) => {
    jobs.push(job);
  };

  const [currentStep, setCurrentStep] = useState(0);

  function handleNext() {
    currentStep === formSteps.length
      ? console.log("completed")
      : setCurrentStep((prev) => prev + 1);
  }

  function handleContactChanges(data) {
    setContactInfo(data);
  }
  function handleBack() {
    // setComplete(false);

    setCurrentStep((prev) => prev - 1);
  }

  function displayActiveForm(currentStep, data, tempContact, tempJobs) {
    switch (currentStep) {
      case 0:
        return (
          <ContactInfo
            isOpen={true}
            resumeData={data}
            contact={tempContact}
            closeMultiform={closeMultiform}
            handleContactChanges={handleContactChanges}
            handleNext={(data) => {
              contact = data;
              setContactInfo(contact);
              handleNext();
            }}
          />
        );
      case 1:
        return (
          <WorkHistory
            handleBack={handleBack}
            resumeData={data}
            jobs={tempJobs}
            handleNewJob={(data) => {
              addNewJob(data);
            }}
            setWorkHistory={(data) => setWorkHistory(data)}
            handleNext={() => {
              setWorkHistory(jobs);
              handleNext();
            }}
          />
        );
      case 2:
        return (
          <Education
            handleBack={handleBack}
            handleNext={handleNext}
            resumeData={data}
          />
        );
      case 3:
        return (
          <Skill
            handleBack={handleBack}
            handleNext={handleNext}
            resumeData={data}
          />
        );
      case 4:
        return (
          <Summary
            handleBack={handleBack}
            handleNext={handleNext}
            resumeData={data}
          />
        );
      default:
        return <div className="text-red text-7xl font-bold">Invalid Step</div>;
    }
  }

  return (
    <section>
      <div className={`sticky z-40 top-0 md:top-14 border-b border-gray-400  `}>
        <ProgressBar array={formSteps} currentStep={currentStep} />
      </div>
      <div
        id="Forms"
        className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 py-5"
      >
        {displayActiveForm(currentStep, newResumeData, contact, jobs)}
      </div>
    </section>
  );
}
