import { useState } from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { ContactInfo } from "./ContactInfo";
import { Education } from "./Education";
import { WorkHistory } from "./Work";
import { Skill } from "./skill";
import { Summary } from "./summary";
import AdditionalSection from "./additionalnfo";
import { generateUUID } from "../utilities/uuid";
import { track } from "@vercel/analytics";

export function MultiForm({ closeMultiform, handleAddResume }) {
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

  const [displayContact, setDisplayContact] = useState(true);
  const [displayWork, setDisplayWork] = useState(true);
  const [displayEducation, setDisplayEducation] = useState(true);
  const [displaySkill, setDisplaySkill] = useState(true);
  const [displaySummary, setDisplaySummary] = useState(true);
  const [displayAccomplishment, setDisplayAccomplishment] = useState(false);
  const [displaySoftware, setDisplaySoftware] = useState(false);

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

  const [currentStep, setCurrentStep] = useState(6);

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
    let formSetting = [
      {
        name: "Contact info",
        id: "contactInfo",
        display: displayContact,
        toggleDisplay: function () {
          setDisplayContact((prev) => prev);
        },
        form: (
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
        ),
      },
      {
        name: "Work History",
        id: "workHistory",
        display: displayWork,
        toggleDisplay: function () {
          setDisplayWork((prev) => prev);
        },
        form: (
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
              track("Work Info Submitted");
              handleNext();
            }}
          />
        ),
      },
      {
        name: "Education",
        id: "education",
        display: displayEducation,
        toggleDisplay: function () {
          setDisplayEducation((prev) => prev);
        },
        form: (
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
              track("Education info Submitted");
              handleNext();
            }}
          />
        ),
      },
      {
        name: "Skills",
        id: "skill",
        display: displaySkill,
        toggleDisplay: function () {
          setDisplaySkill((prev) => prev);
        },
        form: (
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
              track("Skill info Submitted");
              handleNext();
            }}
          />
        ),
      },
      {
        name: "Summary",
        id: "summary",
        display: displaySummary,
        toggleDisplay: function () {
          setDisplayContact((prev) => prev);
        },
        form: (
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
                track("Summary info Submitted");
              } else {
                alert("Summary cannot be empty");
              }
            }}
          />
        ),
      },
      {
        name: "Accomplishment",
        id: "accomplishment",
        display: displayAccomplishment,
        toggleDisplay: function () {
          setDisplayAccomplishment((prev) => !prev);
        },
        form: (
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
                track("Summary info Submitted");
              } else {
                alert("Summary cannot be empty");
              }
            }}
          />
        ),
      },
      {
        name: "Software",
        id: "software",
        display: displaySoftware,
        toggleDisplay: function () {
          setDisplaySkill((prev) => prev);
        },
        form: (
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
              track("Skill info Submitted");
              handleNext();
            }}
          />
        ),
      },
    ];

    let filterFalseDisplaySettings = formSetting.filter(
      (item) => item.display === false
    );
    console.log(filterFalseDisplaySettings);

    switch (currentStep) {
      case 0:
        return formSetting[0].form;
      case 1:
        return formSetting[1].form;
      case 2:
        return formSetting[2].form;
      case 3:
        return formSetting[3].form;
      case 4:
        return formSetting[4].form;
      default:
        return (
          <div>
            <AdditionalSection
              handleBack={handleBack}
              resumeData={data}
              formSettings={filterFalseDisplaySettings}
              handleFinalize={(arr, resume) => {
                if (!arr.length) {
                  console.log("saved");
                  handleAddResume(resume);
                }
              }}
            />
          </div>
        );
    }
  }

  return (
    <section>
      <div className={`sticky z-40 top-0 md:top-14 border-b border-gray-400`}>
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
