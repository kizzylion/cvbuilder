import { useState, useEffect } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";
import { ExperienceCard } from "../utilities/experience-card";

export function WorkHistory({
  handleBack,
  handleNext,
  resumeData,
  jobs,
  handleNewJob,
}) {
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openWorkArray, setOpenWorkArray] = useState(
    resumeData.workHistory.length > 0 ? true : false
  );

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };
  const handleWorkArray = () => {
    setOpenWorkArray(!openWorkArray);
  };

  const isValid = () => {
    return (
      jobTitle && employer && jobLocation
      // profession &&
      // location &&
      // zipCode &&
      // phone &&
      // email
    );
  };

  const handleSaveNewJob = () => {
    if (isValid()) {
      const uuid = crypto.randomUUID();
      workData.id = uuid;
      handleNewJob(workData);
      emptyWorkData();
      handleWorkArray();
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  const workData = {
    jobTitle: jobTitle,
    employer: employer,
    jobLocation: jobLocation,
    startDate: startDate,
    endDate: endDate,
    jobDescription: jobDescription,
  };

  function emptyWorkData() {
    setJobTitle("");
    setEmployer("");
    setJobLocation("");
    setStartDate("2022-01");
    setEndDate("2024-02");
    setJobDescription("");
  }

  console.log(resumeData);
  console.log(resumeData.workHistory);

  let data = {};
  data.workHistory = resumeData.workHistory;

  const handleJobtitle = (e) => {
    setJobTitle(e.target.value);
  };

  const handleEmployer = (e) => {
    setEmployer(e.target.value);
  };

  const handleJobLocation = (e) => {
    setJobLocation(e.target.value);
  };

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  useEffect(() => {
    console.log(setStartDate);
  }, [startDate]);

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handleJobDescription = (e) => {
    setJobDescription(e.target.value);
  };

  function jobList() {
    const listItems = jobs.map((job, index) => (
      <ExperienceCard
        key={job.key}
        cardTitle={`Work Experience ${index + 1}`}
        title={job.jobTitle}
        title2={job.employer}
        subtitle1={job.jobLocation}
        subtitle2={`${job.startDate} - ${job.endDate}`}
        description={job.jobDescription}
      />
    ));
    return listItems;
  }

  return (
    <div className="flex flex-col h-full justify-between relative">
      <div className={`work grid  grid-cols-1  gap-16 pb-20 md:pb-0 lg:pb-20`}>
        <div
          className={`content-with-array ${
            openTemplate ? "hidden" : " "
          } w-full h-fit`}
        >
          <div
            className={` ${
              openWorkArray ? "hidden" : "grid"
            } content w-full lg:w-[58%]`}
          >
            <FormHeading
              title={"Tell us about your job most recent job."}
              subtitle={"We’ll start there and work backward."}
              instruction={true}
              handleBack={handleBack}
            />
            <form action="#">
              <div className="grid grid-cols-2 gap-5 lg:gap-6 pb-20 md:pb-0 lg:pb-20">
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Job Title"}
                    type={"text"}
                    id={"jobTitle"}
                    placeholder={"eg. Web Developer"}
                    require={true}
                    value={jobTitle}
                    onChange={handleJobtitle}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Employer"}
                    type={"text"}
                    id={"employer"}
                    placeholder={"eg. Microsoft"}
                    require={true}
                    value={employer}
                    onChange={handleEmployer}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    label={"Job Location"}
                    type={"text"}
                    id={"jobLocation"}
                    placeholder={"eg. Lagos, Nigeria"}
                    require={true}
                    value={jobLocation}
                    onChange={handleJobLocation}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"Start Date"}
                    type={"month"}
                    id={"startDate"}
                    value={startDate}
                    onChange={handleStartDate}
                    require={true}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"End Date"}
                    type={"month"}
                    id={"endDate"}
                    value={endDate}
                    onChange={handleEndDate}
                    require={true}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Job Description"}
                    type={"textarea"}
                    id={"jobDescription"}
                    placeholder={"Add your job description here"}
                    value={jobDescription}
                    onChange={handleJobDescription}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className={` ${
              !openWorkArray ? "hidden" : "grid"
            } work-array w-full lg:w-[58%] pb-20 `}
          >
            <FormHeading
              title={"Work History Summary"}
              subtitle={""}
              instruction={false}
              handleBack={handleBack}
            />
            <div className="grid grid-col-1 gap-4 ">
              <ul className="work-list grid grid-col-1 gap-5 lg:gap-6">
                {jobList()}
                {/* <ExperienceCard
                  cardTitle={"Work Experience 1"}
                  title="Web Developer"
                  title2="Microsoft"
                  subtitle1="Lagos, Nigeria"
                  subtitle2="August 2023 - August 2024"
                  description="Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.
Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3."
                />
                <ExperienceCard
                  cardTitle={"Work Experience 2"}
                  title="Web Developer"
                  title2="Microsoft"
                  subtitle1="Lagos, Nigeria"
                  subtitle2="August 2023 - August 2024"
                  description="Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.
Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3."
                />
                <ExperienceCard
                  cardTitle={"Work Experience 3"}
                  title="Web Developer"
                  title2="Microsoft"
                  subtitle1="Lagos, Nigeria"
                  subtitle2="August 2023 - August 2024"
                  description="Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.
Wrote custom HTML and JavaScript for existing  websites. Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3."
                /> */}
              </ul>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add another position"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={handleWorkArray}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`preview_area ${
            openTemplate ? "flex" : "hidden"
          } flex-col items-center p-5 w-full`}
        >
          <div className="w-full lg:w-2/3 mb-3">
            <Button
              type={"tertiary"}
              label={"Close"}
              preIcon={<i className="bi bi-x-lg text-red-600"></i>}
              postIcon={false}
              onClick={handlePreview}
            />
          </div>
          <div className="preview aspect-[8.5/11] flex w-full lg:w-2/3 h-fit border border-gray-500 shadow-md shadow-gray-400 bg-gray-100 overflow-auto">
            <TemplatePaper isOpen={openTemplate} resumeData={resumeData} />
          </div>
        </div>
      </div>
      <div className="work-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
        <footer
          className={`work-form-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            openWorkArray ? "hidden" : "flex"
          } flex-col md:flex-row  justify-end gap-3 mt-auto py-4`}
        >
          <div className="order-1 md:order-0 ">
            <Button
              type={"secondary"}
              label={"Preview"}
              preIcon={false}
              postIcon={false}
              onClick={handlePreview}
            />
          </div>
          <div className="order-0 md:order-1">
            <Button
              type={"primary"}
              label={"Save & Next"}
              preIcon={false}
              postIcon={false}
              onClick={handleSaveNewJob}
            />
          </div>
        </footer>

        <footer
          className={`work-array-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            !openWorkArray ? "hidden" : "flex"
          } flex-col md:flex-row  justify-end gap-3 mt-auto py-4`}
        >
          <div className="order-1 md:order-0 ">
            <Button
              type={"secondary"}
              label={"Preview"}
              preIcon={false}
              postIcon={false}
              onClick={handlePreview}
            />
          </div>
          <div className="order-0 md:order-1">
            <Button
              type={"primary"}
              label={"Next: Education"}
              preIcon={false}
              postIcon={false}
              onClick={handleNext}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
