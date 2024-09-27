import { useState, useEffect } from "react";
import "./app.scss";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./component/header/header";
import { FilterSection } from "./component/filtersection/filtersection";
import { format } from "date-fns";

import { MultiForm } from "./component/multiform/multiform";
import TemplatePaper from "./component/template/template";
import { WorkHistory } from "./component/multiform/Work";
import { Button } from "./component/utilities/button";
import { summary } from "framer-motion/client";
import { generateUUID } from "./component/utilities/uuid";

export default function App() {
  const [resumes, setResumes] = useState([demoObject()]);

  const headerRef = document.getElementById("Logo-header");
  const [headerHeight, setHeaderHeight] = useState(0);

  function demoObject() {
    return {
      id: generateUUID(),
      dateCreated: new Date(),

      contactInfo: {
        email: "",
        firstName: "monday",
        lastName: "Tolu",
        location: "",
        phone: "",
        profession: "Frontend Developer",
        zipCode: "",
      },
      educationData: [
        {
          degreeDescription: "",
          fieldStudied: "Mathematics and Statistics",
          gradDate: "2024-09",
          id: "9b783a19-d7a9-4785-98f6-b016a318b9c8",
          schoolDegree: "Bachelor of Science",
          schoolLocation: "Manchester, Uk",
          schoolName: "Manchester Pet University",
        },
        {
          schoolName: "University of Port-Harcourt",
          schoolLocation: "Rivers State, Nigeria",
          schoolDegree: "Bachelor in Medicine",
          fieldStudied: "Medicine and Surgery",
          gradDate: "2021-02",
          degreeDescription: "",
          id: "f3dd607f-cd40-4461-9492-d4102dd98921",
        },
        {
          schoolName: "Manchester Pet University",
          schoolLocation: "Manchester, Uk",
          schoolDegree: "Bachelor in Medicine",
          fieldStudied: "Medicine and Surgery",
          gradDate: "2022-11",
          degreeDescription: "",
          id: "71588f66-c58e-4209-8391-afeddb3567c0",
        },
      ],
      skillData: [
        { id: "7450dae8-1d55-4252-8ddb-45bcc5049607", name: "Javascript" },
      ],
      workHistory: [
        {
          jobTitle: "Doctor",
          employer: "Awesome Grace Hospital",
          jobLocation: "Surulere, Lagos",
          startDate: "2024-09",
          endDate: "2024-09",
          jobDescription: "",
          id: "452acd7e-2ef6-4e12-8579-819b6798bb88",
        },
        {
          jobTitle: "Cleaner",
          employer: "Guiness",
          jobLocation: "Surulere, Lagos",
          startDate: "2015-03",
          endDate: "2016-03",
          jobDescription: "",
          id: "e1a45045-b9e7-4f39-ae08-27254dfa0957",
        },
        {
          jobTitle: "Cleaner",
          employer: "Firstbank",
          jobLocation: "Surulere, Lagos",
          startDate: "2014-07",
          endDate: "2015-10",
          jobDescription: "",
          id: "8e539271-2508-4e69-b24e-95e962fe6300",
        },
      ],
      summary:
        "Highly motivated and experienced doctor with a passion for providing excellent care to patients. Experienced in a wide variety of medical settings, with particular expertise in diagnostics, primary care and emergency medicine. Skilled in using the latest technology to streamline patient care. Committed to delivering compassionate, personalized care to each and every patient",
    };
  }
  function generateItemId(date) {
    const hash = new Date(date);
    const itemId = format(hash, "yyyyMMddHHmmss");
    return itemId;
  }

  function resumeList(arr) {
    if (arr.length) {
      const listItems = arr.map((resume) => {
        const itemId = generateItemId(resume.dateCreated);
        return (
          <article
            key={resume.id}
            className="resume-item flex w-full  text-base gap-4 py-4 "
          >
            <div className="w-full flex flex-col text-gray-900 md:flex-row gap-0.5 md:gap-4">
              <p className="w-1/2 font-medium ">{`${resume.contactInfo.firstName}_${resume.contactInfo.lastName}_${itemId}`}</p>
              <p className="w-1/2 text-gray-600 font-medium text-xs md:text-sm">
                <span className="md:hidden">Created:</span>
                {format(new Date(resume.dateCreated), "MMM d, yyyy")}
              </p>
            </div>
            <p className="w-1/3 text-indigo-700">
              <i className="bi bi-pencil-square"></i>
            </p>
          </article>
        );
      });
      return listItems;
    } else {
      return (
        <div className="text-center italic font-medium text-gray-600 h-full ">
          <div className="w-full grid place-content-center h-64 p-3 rounded-lg bg-gray-100">
            List is empty
          </div>
        </div>
      );
    }
  }

  const [openMultiForm, setOpenMultiForm] = useState(false);
  const [displayPreview, setDisplayPreview] = useState(false);
  const [previewObject, setPreviewObject] = useState(demoObject());

  useEffect(() => {
    console.log(resumes);
  }, [resumes]);
  //push new resumes to resumes

  function generateDateTime(formatString) {
    const now = new Date();
    const formattedDateTime = format(now, formatString);
    return formattedDateTime;
  }

  const handleAddResume = (newResume) => {
    newResume.dateCreated = generateDateTime("yyyy-MM-dd HH:mm:ss");
    newResume.id = generateUUID();
    setResumes((resumes) => [...resumes, newResume]);
    setPreviewObject(() => newResume);
    setDisplayPreview((prev) => !prev);
    setOpenMultiForm((prev) => !prev);
  };

  function calculateHeaderHeight() {
    const headerRef = document.getElementById("Logo-header");
    if (headerRef) {
      setHeaderHeight(headerRef.clientHeight);
    }
  }

  useEffect(() => {
    // Calculate header height on initial render
    calculateHeaderHeight();

    window.addEventListener("DOMContentLoaded", calculateHeaderHeight);
    // Add event listener to recalculate header height on window resize
    window.addEventListener("resize", calculateHeaderHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", calculateHeaderHeight);
    };
  }, []);

  const handleMultiForm = () => {
    setOpenMultiForm((openMultiForm) => !openMultiForm);
  };

  return (
    <div className={`App bg-gray-50 flex flex-col h-full `}>
      <SpeedInsights />
      <Analytics />
      <div className={`${openMultiForm && "hidden md:block"}`}>
        <Header ref={headerRef} />
      </div>
      <main id="library" className={`bg-white h-full  flex flex-col`}>
        {!openMultiForm && !displayPreview && (
          <>
            <div
              className="bg-white md:pt-[]"
              style={{ paddingTop: `${headerHeight}px` }}
            >
              <FilterSection
                isOpen={!openMultiForm}
                handleMultiForm={handleMultiForm}
              />
            </div>

            <div className="max-w-7xl mx-auto w-full h-full flex flex-col px-4 md:px-6 lg:px-8 pt-5 ">
              <div className="hidden md:flex justify-between mb-1 gap-4 w-full h-fit font-semibold uppercase text-base text-900 pl-8 py-3">
                <div className="flex w-full gap-4 ">
                  <p className="w-1/2">NAME</p>
                  <p className="w-1/2">CREATION</p>
                </div>
                <p className="w-1/3">ACTION</p>
              </div>
              <div className="resume-list flex flex-col gap-0 w-full h-full py-3 pl-4 md:pl-8">
                {resumeList(resumes)}
                {/* <article className="resume-item flex w-full  text-base gap-4 py-4 ">
                  <div className="w-full flex flex-col text-gray-900 md:flex-row gap-0.5 md:gap-4">
                    <p className="w-1/2 font-medium ">John_Doe_Resume_1</p>
                    <p className="w-1/2 text-gray-600 font-medium text-xs md:text-sm">
                      <span className="md:hidden">Created:</span> 12/05/2022
                    </p>
                  </div>
                  <p className="w-1/3 text-indigo-700">
                    <i className="bi bi-pencil-square"></i>
                  </p>
                </article>
                <article className="resume-item flex w-full  text-base gap-4 py-4 ">
                  <div className="w-full flex flex-col text-gray-900 md:flex-row gap-0.5 md:gap-4">
                    <p className="w-1/2 font-medium ">John_Doe_Resume_1</p>
                    <p className="w-1/2 text-gray-600 font-medium text-xs md:text-sm">
                      <span className="md:hidden">Created:</span> 12/05/2022
                    </p>
                  </div>
                  <p className="w-1/3 text-indigo-700">
                    <i className="bi bi-pencil-square"></i>
                  </p>
                </article> */}
              </div>
              <footer className="bg-white">
                <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:justify-between px-4 md:px-6 lg:px-8 py-5 gap-3">
                  <div className="socials flex text-xl text-gray-900 gap-6 w-fit">
                    <a href="mailto:kztchm@gmail.com">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <p className="text-gray-600 font-normal text-sm">
                    Copyright &copy;2024. All rights reserved.
                  </p>
                </div>
              </footer>
            </div>
          </>
        )}

        {openMultiForm && !displayPreview && (
          <div
            className={`bg-gray-50 pt-[${headerHeight}px]`}
            style={{ paddingTop: `${headerHeight}px` }}
          >
            <MultiForm
              isOpen={openMultiForm}
              closeMultiform={handleMultiForm}
              handleAddResume={handleAddResume}
            />
          </div>
        )}

        {displayPreview && (
          <div className="max-w-7xl mx-auto w-full h-full flex flex-col items-center px-4 md:px-6 lg:px-8 pt-5 ">
            <div className="w-full" style={{ paddingTop: `${headerHeight}px` }}>
              <div className="flex justify-between w- flex w-full lg:w-5/12 mx-auto mb-4">
                <Button
                  type={"tertiary"}
                  label={"Go home"}
                  onClick={() => setDisplayPreview((prev) => !prev)}
                />
                <Button type={"tertiary"} label={"Edit Template"} />
              </div>
              <div className="preview aspect-[8.5/11] flex w-full lg:w-5/12 h-fit border border-gray-500 shadow-md shadow-gray-400 bg-gray-100 overflow-auto mx-auto mb-32">
                <TemplatePaper
                  isOpen={displayPreview}
                  resumeData={previewObject}
                />
              </div>
              <div className="preview-action-section flex fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
                <footer
                  className={`education-array-action action-section w-full 
            flex flex-col md:flex-row  justify-end gap-3 mt-auto py-4`}
                >
                  <div className="order-1 md:order-0 ">
                    <Button
                      type={"secondary"}
                      label={"Edit resume content"}
                      preIcon={false}
                      postIcon={false}
                    />
                  </div>
                  <div className="order-0 md:order-1">
                    <Button
                      type={"primary"}
                      label={"Print"}
                      preIcon={false}
                      postIcon={false}
                    />
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
