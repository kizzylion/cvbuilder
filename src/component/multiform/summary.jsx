import { useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Button } from "../utilities/button";
import { Input } from "../utilities/input";
export function Summary({ handleBack, handleNext, resumeData }) {
  const [openTemplate, setOpenTemplate] = useState(false);

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };

  return (
    <div className="flex flex-col h-full justify-between relative">
      <div
        className={`Professional-summary grid  grid-cols-1  gap-16 pb-20 md:pb-0 lg:pb-20 mb-5`}
      >
        <div
          className={`content-with-array ${
            openTemplate ? "hidden" : " "
          } w-full h-fit`}
        >
          <div className={`grid summary w-full lg:w-[58%]`}>
            <FormHeading
              title={"Professional Summary"}
              subtitle={""}
              instruction={false}
              handleBack={handleBack}
            />
            <div className="grid grid-col-1 gap-4 ">
              <div className="skill-list grid grid-col-1 gap-5 lg:gap-6">
                <Input type="textarea" placeholder="Enter summary here" />
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
      <div className="skill-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
        <footer
          className={`education-array-action action-section w-full 
            flex flex-col md:flex-row  justify-end gap-3 mt-auto py-4`}
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
              onClick={handleNext}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
