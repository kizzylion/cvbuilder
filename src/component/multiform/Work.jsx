import { useState, useEffect } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";
import { ExperienceCard } from "../utilities/experience-card";
import { generateUUID } from "../utilities/uuid";

export function WorkHistory({
  handleBack,
  handleNext,
  resumeData,
  jobs,
  handleNewJob,
  setWorkHistory,
}) {
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openWorkArray, setOpenWorkArray] = useState(
    resumeData.workHistory.length > 0 ? true : false
  );
  const [workMode, setWorkMode] = useState("create");

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };
  const handleWorkArray = () => {
    setOpenWorkArray(() => !openWorkArray);
  };

  const [jobTitle, setJobTitle] = useState("");
  const [employer, setEmployer] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");

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
      const uuid = generateUUID();
      workData.id = uuid;
      handleNewJob(workData);
      emptyWorkData();
      handleWorkArray();
    } else {
      alert("Please fill in all the required fields.");
    }
  };

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
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
    return `${year}-${month}`;
  };

  useEffect(() => {
    // Set the initial value to the current month
    setStartDate(getCurrentMonth());
    setEndDate(getCurrentMonth());
  }, []);

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };
  const handleJobDescription = (e) => {
    // const htmlContent = textContent.replace(/\n/g, "<br>");

    setJobDescription(e.target.value);
  };
  const [editingItemId, setEditingItemId] = useState("");
  const handleEdit = (job) => {
    setWorkMode("edit");
    handleWorkArray();
    setEditingItemId(() => job.id);
    setJobTitle(() => job.jobTitle);
    setEmployer(() => job.employer);
    setJobLocation(() => job.jobLocation);
    setStartDate(() => job.startDate);
    setEndDate(() => job.endDate);
    setJobDescription(() => job.jobDescription);
    console.log(job);
  };

  const handleDeleteJob = (toDeleteJob) => {
    console.log("deleted");

    // Filter out the job that needs to be deleted
    const filteredJobs = jobs.filter((job) => job.id !== toDeleteJob.id);

    // Update the work history state with the filtered array
    setWorkHistory(filteredJobs);

    // Set the work mode to "create"
    setWorkMode("create");

    // Check if there are any jobs left in the work history
    if (filteredJobs.length === 0) {
      // If no jobs left, call handleWorkArray
      handleWorkArray();
    }
  };

  const handleUpdateJob = (id, data) => {
    console.log(workData);
    const updatedJobs = jobs.map((job) =>
      job.id === id ? { ...job, ...data } : job
    );
    setWorkHistory(updatedJobs);
    setWorkMode("create");
    handleWorkArray();
    emptyWorkData();
  };

  function jobList(jobArr) {
    const listItems = jobArr.map((job, index) => (
      <ExperienceCard
        key={job.id}
        cardTitle={`Work Experience ${index + 1}`}
        title={job.jobTitle}
        title2={job.employer}
        subtitle1={job.jobLocation}
        subtitle2={`${job.startDate} - ${job.endDate}`}
        description={job.jobDescription.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
        handleEdit={() => {
          handleEdit(job);
        }}
        handleDelete={() => {
          handleDeleteJob(job);
        }}
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
              handleBack={() => {
                setWorkMode("create");
                handleBack();
              }}
            />
            <div className="grid grid-col-1 gap-4 ">
              <ul className="work-list grid grid-col-1 gap-5 lg:gap-6">
                {jobList(jobs)}
              </ul>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add another position"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={() => {
                    setWorkMode("create");
                    handleWorkArray();
                  }}
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
            openWorkArray || workMode === "edit" ? "hidden" : "flex"
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
          className={`work-edit-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            openWorkArray || workMode === "create" ? "hidden" : "flex"
          } flex-col md:flex-row  justify-end gap-3 mt-auto py-4`}
        >
          <div className="order-1 md:order-0 ">
            {/* <Button
              type={"secondary"}
              label={"Preview"}
              preIcon={false}
              postIcon={false}
              onClick={handlePreview}
            /> */}
          </div>
          <div className="order-0 md:order-1">
            <Button
              type={"primary"}
              label={"Update"}
              preIcon={false}
              postIcon={false}
              onClick={() => {
                console.log("updated");
                handleUpdateJob(editingItemId, workData);
              }}
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
