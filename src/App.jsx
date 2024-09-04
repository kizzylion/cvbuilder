import { useState, useEffect } from "react";
import "./app.scss";

import Header from "./component/header/header";
import { FilterSection } from "./component/filtersection/filtersection";

import { MultiForm } from "./component/multiform/multiform";
export default function App() {
  const headerRef = document.getElementById("Logo-header");
  const [headerHeight, setHeaderHeight] = useState(0);

  const [openMultiForm, setOpenMultiForm] = useState(false);

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
      <Header ref={headerRef} />
      <main
        id="library"
        className={`bg-white h-full ${openMultiForm && "hidden"}`}
      >
        <div className="bg-white" style={{ paddingTop: `${headerHeight}px` }}>
          <FilterSection
            isOpen={!openMultiForm}
            handleMultiForm={handleMultiForm}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col px-4 md:px-6 lg:px-8 py-5 ">
          <div className="hidden md:flex justify-between mb-1 gap-4 w-full h-fit font-semibold uppercase text-base text-900 pl-8 py-3">
            <div className="flex w-full gap-4 ">
              <p className="w-1/2">NAME</p>
              <p className="w-1/2">CREATION</p>
            </div>
            <p className="w-1/3">ACTION</p>
          </div>
          <div className="resume-list flex flex-col gap-0 w-full py-3 pl-4 md:pl-8">
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
            </article>
          </div>
        </div>
      </main>
      <div
        className={`bg-gray-50 ${!openMultiForm ? " hidden" : " "} `}
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <MultiForm isOpen={openMultiForm} closeMultiform={handleMultiForm} />
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
  );
}
