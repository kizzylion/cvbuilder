import { useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { MonthInput } from "../utilities/monthinput";
import { ExperienceCard } from "../utilities/experience-card";

export function WorkHistory({ handleBack, handleNext }) {
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openWorkArray, setOpenWorkArray] = useState(false);

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };
  const handleWorkArray = () => {
    setOpenWorkArray(!openWorkArray);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className={`work grid  grid-cols-1  gap-16 mb-5`}>
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
              <div className="grid grid-cols-2 gap-5 lg:gap-6">
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Job Title"}
                    type={"text"}
                    id={"jobTitle"}
                    placeholder={"eg. Web Developer"}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Employer"}
                    type={"text"}
                    id={"employer"}
                    placeholder={"eg. Microsoft"}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    label={"Job Location"}
                    type={"text"}
                    id={"jobLocationn"}
                    placeholder={"eg. Lagos, Nigeria"}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"Start Date"}
                    type={"month"}
                    id={"startDate"}
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <MonthInput
                    label={"End Date"}
                    type={"month"}
                    id={"endDate"}
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <Input
                    label={"Job Description"}
                    type={"textarea"}
                    id={"jobDescription"}
                    placeholder={"Add your job description here"}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className={` ${
              !openWorkArray ? "hidden" : "grid"
            } work-array w-full lg:w-[58%]`}
          >
            <FormHeading
              title={"Work History Sumary"}
              subtitle={""}
              instruction={false}
              handleBack={handleWorkArray}
            />
            <div>
              <div className="work-list grid grid-col-1 gap-5 lg:gap-6">
                <ExperienceCard cardTitle={"Work Experience 1"} />
                <ExperienceCard cardTitle={"Work Experience 2"} />
                <ExperienceCard cardTitle={"Work Experience 3"} />
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
            <TemplatePaper isOpen={openTemplate} />
          </div>
        </div>
      </div>
      <div className="work-action-section flex">
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
              onClick={handleWorkArray}
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
