import { useState } from "react";
import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import { Button } from "../utilities/button";
import { SkillCard } from "../utilities/skill-card";

export function WebLink({
  handleBack,
  handleNext,
  resumeData,
  webLinks,
  handleNewWebLink,
  setWebLinkData,
  setDisplayWebLink,
  addedForms,
}) {
  const [openTemplate, setOpenTemplate] = useState(false);

  const handlePreview = () => {
    setOpenTemplate(!openTemplate);
  };

  const handleOnChange = (e, toEditLink) => {
    console.log(e.target.value);

    //get the skill by id that needs to be edited  and edit it, return the others as they are

    const updateWebLinks = webLinks.map((link) =>
      link.id == toEditLink.id ? { ...link, name: e.target.value } : link
    );
    // Update the software history state with he filtered array
    setWebLinkData(() => updateWebLinks);
    if (webLinks[0].name) {
      setDisplayWebLink(true);
    } else {
      setDisplayWebLink(false);
    }
  };

  const handleDeleteLink = (toDeleteLink) => {
    console.log("deleted");

    //filter out the skill that needs to be deleted
    const filteredLink = webLinks.filter((link) => link.id !== toDeleteLink.id);

    //Update the skill history state with he filtered array
    setWebLinkData(filteredLink);
  };

  function linkList(linkArr) {
    const listItems = linkArr.map((link, index) => (
      <SkillCard
        key={link.id}
        cardTitle={`Weblinks ${index + 1}`}
        placeholder={"eg. https://example-link.com/"}
        value={link.name}
        handleChange={(e) => {
          handleOnChange(e, link);
        }}
        handleDelete={() => {
          handleDeleteLink(link);
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
              title={"Website, Portfolio, Profiles?"}
              subtitle={
                "We recommend adding social networks like Linkedin to your header, to help employers get to know you better."
              }
              instruction={false}
              handleBack={handleBack}
            />
            <div className="grid grid-col-1 gap-4 ">
              <div className="skill-list grid grid-col-1 gap-5 lg:gap-6">
                {linkList(resumeData.webLinkData)}
              </div>
              <div className="justify-self-center">
                <Button
                  type={"tertiary"}
                  label={"Add one more"}
                  preIcon={<i className="bi bi-plus"></i>}
                  postIcon={false}
                  onClick={handleNewWebLink}
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
                (addedForms[addedForms.length - 1].name === "Weblink" &&
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
