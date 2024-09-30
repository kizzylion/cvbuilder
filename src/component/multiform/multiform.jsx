import { useEffect, useState } from "react";
import { ProgressBar } from "../progressbar/progressbar";
import { ContactInfo } from "./ContactInfo";
import { Education } from "./Education";
import { WorkHistory } from "./Work";
import { Skill } from "./skill";
import { Summary } from "./summary";
import AdditionalSection from "./additionalnfo";
import { generateUUID } from "../utilities/uuid";
import { track } from "@vercel/analytics";
import { Accomplishment } from "./accomplishment";

import { Software } from "./software";
import { WebLink } from "./weblink";

export function checkIfValueHasBeenInputted(arr, compareArr) {
  // Ensure addedForms is defined and is an array
  if (!Array.isArray(compareArr)) {
    console.error("addedForms is not an array or is undefined");
    return false;
  }

  // Check if every object in 'arr' has a corresponding object in 'addedForms' with the same name
  let result = arr.length == compareArr.length;

  console.log(result);
  return result;
}

export function MultiForm({ closeMultiform, handleAddResume }) {
  const [contactInfo, setContactInfo] = useState("");
  const [workHistory, setWorkHistory] = useState(new Array());
  const [educationData, setEducationData] = useState(new Array());
  const [skillData, setSkillData] = useState(new Array());
  const [summaryInfo, setSummaryInfo] = useState("");
  const [accomplishmentInfo, setAccomplishmentInfo] = useState("");
  const [softwareData, setSoftwareData] = useState(new Array());
  const [webLinkData, setWebLinkData] = useState(new Array());

  if (!skillData.length) {
    let i = 0;
    while (i < 1) {
      setSkillData([...skillData, skillObject()]);
      setSoftwareData([...softwareData, softwareObject()]);
      setWebLinkData([...webLinkData, webLinkObject()]);
      i++;
    }
  }

  function skillObject() {
    return {
      id: generateUUID(),
      name: "",
    };
  }
  function softwareObject() {
    return {
      id: generateUUID(),
      name: "",
    };
  }
  function webLinkObject() {
    return {
      id: generateUUID(),
      link: "",
    };
  }

  const [displayContact, setDisplayContact] = useState(true);
  const [displayWork, setDisplayWork] = useState(true);
  const [displayEducation, setDisplayEducation] = useState(true);
  const [displaySkill, setDisplaySkill] = useState(true);
  const [displaySummary, setDisplaySummary] = useState(true);
  const [displayAccomplishment, setDisplayAccomplishment] = useState(false);
  const [displaySoftware, setDisplaySoftware] = useState(false);
  const [displayWebLink, setDisplayWebLink] = useState(false);

  const newResumeData = {
    contactInfo: contactInfo,
    workHistory: workHistory,
    educationData: educationData,
    skillData: skillData,
    summary: summaryInfo,
    accomplishment: accomplishmentInfo,
    softwareData: softwareData,
    webLinkData: webLinkData,
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
  let accomplishment = newResumeData.accomplishment;
  let softwares = newResumeData.softwareData;
  let webLinks = newResumeData.webLinkData;

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
  const addNewSoftware = () => {
    setSoftwareData([...softwareData, softwareObject()]);
  };

  const addNewWebLink = () => {
    setWebLinkData([...webLinkData, webLinkObject()]);
  };

  const addNewSummary = (string) => {
    setSummaryInfo(string);
  };
  const addNewAccomplishment = (string) => {
    setAccomplishmentInfo(string);
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

  let [formInfo, setFormInfo] = useState({
    Accomplishment: "",
    Software: "",
    WebLink: "",
  });

  const getAddedForms = () => {
    return Object.entries(formInfo)
      .filter(([, value]) => value)
      .map(([name]) => ({ name }));
  };
  const addedForms = getAddedForms();

  let [currentFormIndex, SetCurrentFormIndex] = useState("");
  let [selectedTemplate, setSelectedTemplate] = useState("finalize");

  function addedFormBack() {
    if (addedForms[0].name === selectedTemplate) {
      setSelectedTemplate(() => "finalize");
      setCurrentStep(() => 4);
    } else {
      SetCurrentFormIndex(() => currentFormIndex - 1);
      setSelectedTemplate(() => getAddedFormName(currentFormIndex));
    }
  }

  function getAddedFormName(index) {
    const addedForms = getAddedForms(); // Compute addedForms dynamically
    if (index < 0 || index >= addedForms.length) {
      return "finalize"; // Handle out-of-bound index cases
    }
    return addedForms[index].name; // Return the name of the form at the specified index
  }

  function handleSettingsNext() {
    if (addedForms.length > 0) {
      SetCurrentFormIndex(() => 0);
      setSelectedTemplate(() => addedForms[currentFormIndex].name);
    }
  }
  async function handleNextForm() {
    if (addedForms.length > 0 && currentFormIndex < addedForms.length) {
      SetCurrentFormIndex(() => currentFormIndex + 1);
      setSelectedTemplate(() => getAddedFormName(currentFormIndex));
    } else {
      setSelectedTemplate(() => "finalize");
    }
  }

  // function checkIfValueHasBeenInputted(arr, compareArr) {
  //   // Ensure addedForms is defined and is an array
  //   if (!Array.isArray(compareArr)) {
  //     console.error("addedForms is not an array or is undefined");
  //     return false;
  //   }

  //   // Check if every object in 'arr' has a corresponding object in 'addedForms' with the same name
  //   let result = arr.length == compareArr.length;

  //   console.log(result);
  //   return result;
  // }
  useEffect(() => {
    console.log("addedForms: ", addedForms);
  }, [addedForms]);

  useEffect(() => {
    console.log("currentFormIndex: ", currentFormIndex);
  }, [currentFormIndex]);
  useEffect(() => {
    console.log("selectedTemplate: ", selectedTemplate);
  }, [selectedTemplate]);

  function displayActiveForm(
    currentStep,
    data,
    tempContact,
    tempJobs,
    tempDegrees,
    tempSkills,
    tempSummary
  ) {
    let formSettings = [
      {
        name: "Contact info",
        id: "contactInfo",
        optional: false,
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
        optional: false,
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
        optional: false,
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
        optional: false,
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
        optional: false,
        display: displaySummary,
        toggleDisplay: function () {
          setDisplaySummary((prev) => prev);
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
        optional: true,
        display: displayAccomplishment,
        toggleDisplay: function () {
          setDisplayAccomplishment((prev) => !prev);
        },
        form: (
          <Accomplishment
            handleBack={() => addedFormBack()}
            handleNext={handleNextForm}
            resumeData={data}
            accomplishment={accomplishment}
            setAccomplishmentInfo={setAccomplishmentInfo}
            setDisplayAccomplishment={(value) =>
              setDisplayAccomplishment(value)
            }
            addedForms={addedForms}
          />
        ),
      },
      {
        name: "Software",
        id: "software",
        optional: true,
        display: displaySoftware,
        toggleDisplay: function () {
          setDisplaySoftware((prev) => !prev);
        },
        form: (
          <Software
            handleBack={() => addedFormBack()}
            handleNext={handleNextForm}
            resumeData={data}
            handleNewSoftware={addNewSoftware}
            softwares={softwares}
            setSoftwareData={setSoftwareData}
            setDisplaySoftware={(value) => setDisplaySoftware(value)}
            addedForms={addedForms}
          />
        ),
      },
      {
        name: "Weblink",
        id: "webLinks",
        optional: true,
        display: displayWebLink,
        toggleDisplay: function () {
          setDisplayWebLink((prev) => !prev);
        },
        form: (
          <WebLink
            handleBack={() => addedFormBack()}
            handleNext={handleNextForm}
            resumeData={data}
            handleNewWebLink={addNewWebLink}
            webLinks={webLinks}
            setWebLinkData={setWebLinkData}
            setDisplayWebLink={(value) => setDisplayWebLink(value)}
            addedForms={addedForms}
          />
        ),
      },
    ];

    let filterFalseDisplaySettings = formSettings.filter(
      (item) => item.display === false
    );
    let filterTrueDisplaySettings = formSettings.filter(
      (item) => item.display === true
    );
    // console.log(filterFalseDisplaySettings);

    switch (currentStep) {
      case 0:
        return formSettings[0].form;
      case 1:
        return formSettings[1].form;
      case 2:
        return formSettings[2].form;
      case 3:
        return formSettings[3].form;
      case 4:
        return formSettings[4].form;
      default:
        return (
          <div>
            <AdditionalSection
              setCurrentFormIndex={SetCurrentFormIndex}
              handleBack={handleBack}
              // handleNext={handleSettingsNext}
              handleSettingsNext={handleSettingsNext}
              resumeData={data}
              formSettings={formSettings}
              filterFalseDisplaySettings={filterFalseDisplaySettings}
              filterTrueDisplaySettings={filterTrueDisplaySettings}
              setFormInfo={setFormInfo}
              setCurrentStep={setCurrentStep}
              addedForms={addedForms}
              selectedTemplate={selectedTemplate}
              setSelectedTemplate={setSelectedTemplate}
              accomplishment={accomplishment}
              softwares={softwares}
              webLinks={webLinks}
              setAccomplishmentInfo={(data) => addNewAccomplishment(data)}
              setSoftwareData={(data) => setSoftwareData(data)}
              setWebLinkData={(data) => setWebLinkData(data)}
              handleFinalize={(arr, resume) => {
                if (
                  !arr.length ||
                  checkIfValueHasBeenInputted(
                    filterTrueDisplaySettings.filter((item) => item.optional),
                    addedForms
                  )
                ) {
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
