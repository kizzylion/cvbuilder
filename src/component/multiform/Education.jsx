import { useState, useEffect } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";
import { ExperienceCard } from "../utilities/experience-card";
import { generateUUID } from "../utilities/uuid";
import { format } from "date-fns";

export function Education({
  handleBack,
  handleNext,
  resumeData,
  degrees,
  handleNewDegree,
  setEducationData,
}) {
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openEducationArray, setOpenEducationArray] = useState(
    resumeData.educationData.length > 0 ? true : false
  );
  const [educationMode, setEducationMode] = useState("create");

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };
  const handleArray = () => {
    setOpenEducationArray(!openEducationArray);
  };

  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [schoolDegree, setSchoolDegree] = useState("");
  const [fieldStudied, setFieldStudied] = useState("");
  const [gradDate, setGradDate] = useState("");
  const [degreeDescription, setDegreeDescription] = useState("");

  const isValid = () => {
    return (
      schoolName !== "" &&
      schoolLocation !== "" &&
      schoolDegree !== "" &&
      fieldStudied !== "" &&
      gradDate !== ""
      // degreeDescription !== ""
    );
  };

  const degreeData = {
    schoolName: schoolName,
    schoolLocation: schoolLocation,
    schoolDegree: schoolDegree,
    fieldStudied: fieldStudied,
    gradDate: gradDate,
    degreeDescription: degreeDescription,
  };

  const handleSaveNewDegree = () => {
    if (isValid()) {
      const uuid = generateUUID();
      degreeData.id = uuid;
      handleNewDegree(degreeData);
      emptyDegreeData();
      handleArray();
    } else {
      alert("Please fill all the fields");
    }
  };
  const emptyDegreeData = () => {
    setSchoolName("");
    setSchoolLocation("");
    setSchoolDegree("");
    setFieldStudied("");
    setGradDate("2024-02");
    setDegreeDescription("");
  };

  console.log(resumeData);
  console.log(resumeData.educationData);
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Add leading zero if necessary
    return `${year}-${month}`;
  };

  useEffect(() => {
    // Set the initial value to the current month
    setGradDate(getCurrentMonth());
  }, []);

  const handleSchoolName = (e) => {
    setSchoolName(e.target.value);
  };

  const handleSchoolLocation = (e) => {
    setSchoolLocation(e.target.value);
  };

  const handleSchoolDegree = (e) => {
    setSchoolDegree(e.target.value);
  };

  const handleFieldStudied = (e) => {
    setFieldStudied(e.target.value);
  };

  const handleGradDate = (e) => {
    setGradDate(e.target.value);
  };

  const handleDegreeDescription = (e) => {
    setDegreeDescription(e.target.value);
  };

  degreeDescription;
  const [editingItemId, setEditingItemId] = useState("");
  const handleEdit = (degree) => {
    setEducationMode("edit");
    handleArray();
    setEditingItemId(() => degree.id);
    setSchoolName(() => degree.schoolName);
    setSchoolLocation(() => degree.schoolLocation);
    setSchoolDegree(() => degree.schoolDegree);
    setFieldStudied(() => degree.fieldStudied);
    setGradDate(() => degree.gradDate);
    setDegreeDescription(() => degree.degreeDescription);

    console.log(degree);
  };

  const handleDeleteDegree = (toDeleteDegree) => {
    console.log("Deleted");

    // Filter out the degree that needs to be deleted
    const filteredDegrees = degrees.filter(
      (degree) => degree.id !== toDeleteDegree.id
    );

    // Update the work history state with the filtered array
    setEducationData(filteredDegrees);

    //Set the education mode to create
    setEducationMode("create");

    //check if there are any degrees left in the degree data
    if (filteredDegrees.length === 0) {
      //if no degrees left, call handleArray
      handleArray();
    }
  };

  const handleUpdateDegree = (id, data) => {
    console.log(degreeData);
    const updatedJobs = degrees.map((degree) =>
      degree.id === id ? { ...degree, ...data } : degree
    );
    setEducationData(updatedJobs);
    setEducationMode("create");
    handleArray();
    emptyDegreeData();
  };

  function degreeList(degArr) {
    const listItems = degArr.map((degree, index) => (
      <ExperienceCard
        key={degree.id}
        cardTitle={`Degree ${index + 1}`}
        title={degree.schoolDegree}
        title2={`${format(new Date(degree.gradDate), "MMM-yyyy")}, ${
          degree.fieldStudied
        }`}
        subtitle1={degree.schoolName}
        subtitle2={`${degree.schoolLocation}`}
        description={degree.degreeDescription.split("\n").map((line, index) => (
          <span key={index}>
            • {line}
            <br />
          </span>
        ))}
        handleEdit={() => {
          handleEdit(degree);
        }}
        handleDelete={() => {
          handleDeleteDegree(degree);
        }}
      />
    ));
    return listItems;
  }

  return (
    <div className="flex flex-col h-full justify-between relative">
      <div
        className={`education grid  grid-cols-1  gap-16 pb:20 md:pb-0  lg:pb-20 `}
      >
        <div
          className={`content-with-array ${
            openTemplate ? "hidden" : " "
          } w-full h-fit`}
        >
          <div
            className={` ${
              openEducationArray ? "hidden" : "grid"
            } content w-full lg:w-[58%]`}
          >
            <FormHeading
              title={"Tell us about your education."}
              subtitle={
                "Enter your education experience so far, even if you are a current student or did not graduate."
              }
              instruction={true}
              handleBack={handleBack}
            />
            <form action="#">
              <div className="grid grid-cols-2 gap-5 lg:gap-6 pb-20 md:pb-0 lg:pb-20">
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"School Name"}
                    type={"text"}
                    id={"schoolName"}
                    placeholder={"eg. Manchester Met University"}
                    onChange={handleSchoolName}
                    value={schoolName}
                    require={true}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"School Location"}
                    type={"text"}
                    id={"schoolLocation"}
                    placeholder={"eg. Manchester, Uk"}
                    onChange={handleSchoolLocation}
                    value={schoolLocation}
                    require={true}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    label={"Degree"}
                    type={"text"}
                    id={"degree"}
                    placeholder={"eg. Bachelors of Science"}
                    onChange={handleSchoolDegree}
                    value={schoolDegree}
                    require={true}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Field of Study"}
                    type={"text"}
                    id={"fieldStudied"}
                    placeholder={"eg. Mathematics And Statistics"}
                    onChange={handleFieldStudied}
                    value={fieldStudied}
                    require={true}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"Graduation Date / Expected Date of Grad"}
                    type={"month"}
                    id={"endDate"}
                    onChange={handleGradDate}
                    value={gradDate}
                    require={true}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Degree Description"}
                    type={"textarea"}
                    id={"degreeDescription"}
                    placeholder={"Add your degree description here"}
                    onChange={handleDegreeDescription}
                    value={degreeDescription}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className={` ${
              !openEducationArray ? "hidden" : "grid"
            } work-array w-full lg:w-[58%]`}
          >
            <FormHeading
              title={"Education History Summary"}
              subtitle={""}
              instruction={false}
              handleBack={() => {
                setEducationMode("create");
                handleBack();
              }}
            />
            <div className="grid grid-col-1 gap-4 ">
              <ul className="education-list grid grid-col-1 gap-5 lg:gap-6">
                {degreeList(degrees)}
              </ul>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add one more"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={() => {
                    setEducationMode("create");
                    handleArray();
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
          <div className="preview aspect-[8.5/11] flex w-full lg:w-5/12 h-fit border border-gray-500 shadow-md shadow-gray-400 bg-gray-100 overflow-auto">
            <TemplatePaper isOpen={openTemplate} resumeData={resumeData} />
          </div>
        </div>
      </div>
      <div className="education-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
        <footer
          className={`education-form-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            openEducationArray || educationMode === "edit" ? "hidden" : "flex"
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
              onClick={handleSaveNewDegree}
            />
          </div>
        </footer>

        <footer
          className={`education-edit-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            openEducationArray || educationMode === "create" ? "hidden" : "flex"
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
                handleUpdateDegree(editingItemId, degreeData);
              }}
            />
          </div>
        </footer>

        <footer
          className={`education-array-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            !openEducationArray ? "hidden" : "flex"
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
              label={"Next: Skill"}
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
