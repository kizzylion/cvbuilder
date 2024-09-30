import { useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Button } from "../utilities/button";
import { SkillCard } from "../utilities/skill-card";

export function Software({
  handleBack,
  handleNext,
  resumeData,
  softwares,
  handleNewSoftware,
  setSoftwareData,
  setDisplaySoftware,
  addedForms,
}) {
  const [openTemplate, setOpenTemplate] = useState(false);

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };

  const handleOnChange = (e, toEditSoftware) => {
    console.log(e.target.value);

    //get the skill by id that needs to be edited  and edit it, return the others as they are

    const updateSoftwares = softwares.map((software) =>
      software.id == toEditSoftware.id
        ? { ...software, name: e.target.value }
        : software
    );
    // Update the software history state with he filtered array
    setSoftwareData(() => updateSoftwares);
    if (softwares[0].name) {
      setDisplaySoftware(true);
    } else {
      setDisplaySoftware(false);
    }
  };

  const handleDeleteSkill = (toDeleteSkill) => {
    console.log("deleted");

    //filter out the skill that needs to be deleted
    const filteredSoftware = softwares.filter(
      (skill) => skill.id !== toDeleteSkill.id
    );

    //Update the skill history state with he filtered array
    setSoftwareData(filteredSoftware);
  };

  function skillList(skillArr) {
    const listItems = skillArr.map((skill, index) => (
      <SkillCard
        key={skill.id}
        cardTitle={`Software ${index + 1}`}
        placeholder={"Enter Software here"}
        value={skill.name}
        handleChange={(e) => {
          handleOnChange(e, skill);
        }}
        handleDelete={() => {
          handleDeleteSkill(skill);
        }}
      />
    ));
    return listItems;
  }

  return (
    <div className="flex flex-col h-full justify-between relative">
      <div className={`skills grid  grid-cols-1  gap-16 pb-20 `}>
        <div
          className={`content-with-array ${
            openTemplate ? "hidden" : " "
          } w-full h-fit`}
        >
          <div className={`grid skill-array w-full lg:w-[58%]`}>
            <FormHeading
              title={"What skill would you like to highlight?"}
              subtitle={""}
              instruction={false}
              handleBack={handleBack}
            />
            <div className="grid grid-col-1 gap-4 ">
              <div className="skill-list grid grid-col-1 gap-5 lg:gap-6">
                {skillList(resumeData.softwareData)}
              </div>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add one more"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={handleNewSoftware}
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
                (addedForms[addedForms.length - 1].name === "Software" &&
                  "Finalize") ||
                (addedForms.length > 0 && "Next")
              }
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
