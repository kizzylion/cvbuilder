import { useState } from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { ContactInfo } from "./ContactInfo";
import { Education } from "./Education";
import { WorkHistory } from "./Work";
import { Skill } from "./skill";
import { Summary } from "./summary";
import { generateUUID } from "../utilities/uuid";

export function MultiForm({ closeMultiform }) {
  const [contactInfo, setContactInfo] = useState("");
  const [workHistory, setWorkHistory] = useState(new Array());
  const [educationData, setEducationData] = useState(new Array());
  const [skillData, setSkillData] = useState(new Array());
  const [summaryInfo, setSummaryInfo] = useState("");

  if (!skillData.length) {
    let i = 0;
    while (i < 1) {
      setSkillData([...skillData, skillObject()]);
      i++;
    }
  }

  function skillObject() {
    return {
      id: generateUUID(),
      name: "",
    };
  }

  const newResumeData = {
    contactInfo: contactInfo,
    workHistory: workHistory,
    educationData: educationData,
    skillData: skillData,
    summary: summaryInfo,
  };

  const summaryIsValid = () => {
    console.log(summaryInfo);
    return summaryInfo.length !== 0;
  };

  let contact = newResumeData.contactInfo;
  let jobs = newResumeData.workHistory;
  let degrees = newResumeData.educationData;
  let skills = newResumeData.skillData;
  let summary = newResumeData.summary;

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
  const addNewDegree = (degree) => {
    degrees.push(degree);
  };

  const addNewSkill = () => {
    setSkillData([...skillData, skillObject()]);
  };

  const addNewSummary = (string) => {
    setSummaryInfo(string);
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

  function displayActiveForm(
    currentStep,
    data,
    tempContact,
    tempJobs,
    tempDegrees,
    tempSkills,
    tempSummary
  ) {
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
            resumeData={data}
            degrees={tempDegrees}
            handleNewDegree={(data) => {
              addNewDegree(data);
            }}
            setEducationData={(data) => setEducationData(data)}
            handleNext={() => {
              setEducationData(degrees);
              handleNext();
            }}
          />
        );
      case 3:
        return (
          <Skill
            handleBack={handleBack}
            resumeData={data}
            skills={tempSkills}
            handleNewSkill={() => {
              addNewSkill();
            }}
            setSkillData={(data) => setSkillData(data)}
            handleNext={() => {
              // setSkillData(skills);
              handleNext();
            }}
          />
        );
      case 4:
        return (
          <Summary
            handleBack={handleBack}
            resumeData={data}
            summary={tempSummary}
            handleNewSummary={(data) => {
              addNewSummary(data);
            }}
            setSummaryInfo={(data) => setSummaryInfo(data)}
            handleNext={() => {
              if (summaryIsValid()) {
                handleNext();
              } else {
                alert("Summary cannot be empty");
              }
            }}
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
        {displayActiveForm(
          currentStep,
          newResumeData,
          contact,
          jobs,
          degrees,
          skills,
          summary
        )}
      </div>
    </section>
  );
}
