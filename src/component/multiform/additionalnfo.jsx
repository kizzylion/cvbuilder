import { useEffect, useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Button } from "../utilities/button";

import Checkbox from "../utilities/checkbox";

import { checkIfValueHasBeenInputted } from "./multiform";

const AdditionalSection = ({
  setCurrentFormIndex,
  handleBack,
  handleNext,
  handleSettingsNext,
  resumeData,
  formSettings,
  filterFalseDisplaySettings,
  filterTrueDisplaySettings,
  setFormInfo,
  setCurrentStep,
  addedForms,
  selectedTemplate,
  accomplishment,
  softwares,
  webLinks,
  setAccomplishmentInfo,
  setSoftwareData,
  setWebLinkData,
  handleFinalize,
}) => {
  const [openTemplate, setOpenTemplate] = useState(false);

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  let editable = filterTrueDisplaySettings.filter((item) => item.optional);
  console.log("Editable", editable);

  const optionList = (arr) => {
    if (arr.length) {
      return arr.map((item) => (
        <Checkbox
          key={item.name}
          withText={item.name}
          handleToggle={(data) => {
            if (data) {
              setFormInfo((prevInfo) => ({
                ...prevInfo,
                [item.name]: data,
              }));
              setCurrentFormIndex(() => 0);
            } else {
              setFormInfo((prevInfo) => ({
                ...prevInfo,
                [item.name]: false,
              }));
            }
          }}
        />
      ));
    } else {
      return (
        <p className="py-4 px-1 text-center bg-gray-50 text-400 text-xs">
          Nothing to add
        </p>
      );
    }
  };
  const optionListTrue = (arr) => {
    if (arr.length) {
      return arr.map((item) => (
        <Checkbox
          key={item.name}
          withText={item.name}
          check={"true"}
          handleToggle={(data) => {
            if (data) {
              setFormInfo((prevInfo) => ({
                ...prevInfo,
                [item.name]: data,
              }));
            } else {
              formSettings
                .find((obj) => obj.name === item.name)
                .toggleDisplay();
            }
          }}
        />
      ));
    }
  };

  // function addedFormBack() {
  //   if (addedForms[0].name === selectedTemplate) {
  //     setSelectedTemplate(() => "finalize");
  //     setCurrentStep(() => 4);
  //   } else {
  //     SetCurrentFormIndex(--currentFormIndex);
  //   }
  // }

  // let [currentFormIndex, SetCurrentFormIndex] = useState(0);

  // function handleNextForm() {
  //   if (addedForms.length > 0) {
  //     setSelectedTemplate(addedForms[currentFormIndex].name);
  //   }
  // }

  function displayActiveForm() {
    switch (selectedTemplate) {
      case "Accomplishment":
        return formSettings[5].form;
      case "Software":
        return formSettings[6].form;
      case "Weblink":
        return formSettings[7].form;
      default:
        return (
          <div className="flex flex-col h-full justify-between relative">
            <div
              className={`AdditionalSection grid  grid-cols-1  gap-16 pb-20 md:pb-0 lg:pb-20 mb-5`}
            >
              <div
                className={`content-with-array ${
                  openTemplate ? "hidden" : " "
                } w-full h-fit`}
              >
                <div className={`grid settings w-full lg:w-[58%]`}>
                  <FormHeading
                    title={"Do you have anything else to add?"}
                    subtitle={"These sections are optional"}
                    instruction={false}
                    handleBack={handleBack}
                  />
                  <div className="grid grid-col-1 gap-4 ">
                    <div className="form-list grid grid-col-1 gap-5 lg:gap-6">
                      <div className="w-fit">
                        <h4 className="w-full bg-gray-100 p-1 text-center">
                          Add sections
                        </h4>
                        <div className="flex flex-col  w-full">
                          {optionList(filterFalseDisplaySettings)}
                        </div>
                        <h4 className="w-full bg-gray-100 mt-4 p-1 text-center">
                          Remove sections
                        </h4>
                        <div className="flex flex-col  w-full">
                          {optionListTrue(editable)}
                        </div>
                      </div>
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
                  <TemplatePaper
                    isOpen={openTemplate}
                    resumeData={resumeData}
                  />
                </div>
              </div>
            </div>
            <div className="skill-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
              <footer
                className={`education-array-action action-section w-full
              ${
                openTemplate ? "hidden" : "flex"
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
                    label={
                      (checkIfValueHasBeenInputted(
                        filterTrueDisplaySettings.filter(
                          (item) => item.optional
                        ),
                        addedForms
                      ) &&
                        "Finalize") ||
                      (addedForms.length > 0 && "Next")
                    }
                    preIcon={false}
                    postIcon={false}
                    onClick={() => {
                      handleFinalize(addedForms, resumeData);
                      handleSettingsNext();
                    }}
                  />
                </div>
              </footer>
            </div>
          </div>
        );
    }
  }

  return <div>{displayActiveForm()}</div>;
};

export default AdditionalSection;
