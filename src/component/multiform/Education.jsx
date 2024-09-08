import { useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";
import { ExperienceCard } from "../utilities/experience-card";
import { generateUUID } from "../utilities/uuid";

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

  return (
    <div className="flex flex-col h-full justify-between relative">
      <div className={`education grid  grid-cols-1  gap-16 md:pb-0  pb-20 `}>
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
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"School Location"}
                    type={"text"}
                    id={"schoolLocation"}
                    placeholder={"eg. Manchester, Uk"}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    label={"Degree"}
                    type={"text"}
                    id={"degree"}
                    placeholder={"eg. Bachelors of Science"}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Field of Study"}
                    type={"text"}
                    id={"fieldStudied"}
                    placeholder={"eg. Mathematics And Statistics"}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"Graduation Date / Expected Date of Grad"}
                    type={"month"}
                    id={"endDate"}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Degree Description"}
                    type={"textarea"}
                    id={"degreeDescription"}
                    placeholder={"Add your degree description here"}
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
              handleBack={handleArray}
            />
            <div className="grid grid-col-1 gap-4 ">
              <div className="education-list grid grid-col-1 gap-5 lg:gap-6">
                <ExperienceCard
                  cardTitle={"Education 1"}
                  title="Bachelor of Science - Feb 2019"
                  title2="Mathematics And Statistics"
                  subtitle1="University of Port Harcourt"
                  subtitle2="Rivers State, Nigeria"
                  description=""
                />
                <ExperienceCard
                  cardTitle={"Education 2"}
                  title="Bachelor of Science - Feb 2019"
                  title2="Mathematics And Statistics"
                  subtitle1="University of Port Harcourt"
                  subtitle2="Rivers State, Nigeria"
                  description=""
                />
                <ExperienceCard
                  cardTitle={"Education 3"}
                  title="Bachelor of Science - Feb 2019"
                  title2="Mathematics And Statistics"
                  subtitle1="University of Port Harcourt"
                  subtitle2="Rivers State, Nigeria"
                  description=""
                />
              </div>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add one more"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={handleArray}
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
      <div className="education-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
        <footer
          className={`education-form-action action-section w-full ${
            openTemplate ? "hidden" : "flex"
          } ${
            openEducationArray ? "hidden" : "flex"
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
              onClick={handleArray}
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
