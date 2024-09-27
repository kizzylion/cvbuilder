import { useEffect, useRef } from "react";
import "./template.scss";
import { format } from "date-fns";

export default function TemplatePaper({ isOpen, resumeData }) {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const scaleToFitParent = () => {
    // const parentWidth = parentRef.current.clientWidth;
    const childWidth = childRef.current.clientWidth;

    // Calculate the scale factor needed to fit the child into the parent's width
    // const scaleFactor = parentWidth / childWidth;

    // Apply the scale transformation
    // childRef.current.style.transform = `scale(${scaleFactor})`; // Scale only horizontally
    // childRef.current.style.transformOrigin = "center top"; // Optional: Set the origin to left

    childRef.current.style.fontSize = `${(childWidth * 12) / 595}px`;
    return true;
  };

  useEffect(() => {
    // Call the function on component mount
    scaleToFitParent();

    // Attach the resize event listener to handle window resizing
    window.addEventListener("resize", scaleToFitParent);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", scaleToFitParent);
    };
  }, []);

  const jobList = (jobArr) => {
    if (jobArr && jobArr.length) {
      const listItems = jobArr.map((job) => (
        <div key={job.id} className="grid grid-cols-[1fr_3fr] gap-[2.5em]">
          <div className="duration text-[1.125em]">
            <p>
              {format(new Date(job.startDate), "MMM-yyyy")} - <br />
              {format(new Date(job.endDate), "MMM-yyyy")}
            </p>
          </div>
          <div>
            <h4 className="text-[1.3em] mb-[0.2em] font-semibold">
              {job.jobTitle}
            </h4>
            <p className="text[1.125em] mb-[0.5em]">
              <span>{job.employer}</span>, <span>{job.jobLocation}</span>.
            </p>
            <p className={`${job.jobDescription ? "block" : "hidden"}`}>
              {job.jobDescription.split("\n").map((line, index) => (
                <span key={index}>
                  • {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ));
      return listItems;
    } else {
      return (
        <div id="work2" className="grid grid-cols-[1fr_3fr] gap-[2.5em]">
          <div className="duration text-[1.25em]">start - end</div>
          <div>
            <h4 className="text-[1.3em] mb-[0.2em] font-semibold">Job Title</h4>
            <p className="text-[1.125em] mb-[0.5em]">
              <span>Employer</span>, <span>Location</span>.
            </p>
            <p className="">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Provident, qui. Lorem, ipsum dolor sit amet consectetur <br />
              adipisicing elit. Provident, qui. Lorem, ipsum dolor sit <br />
              amet consectetur adipisicing elit. Provident, qui.
            </p>
          </div>
        </div>
      );
    }
  };
  function degreeList(degArr) {
    if (degArr && degArr.length) {
      const listItems = degArr.map((degree) => (
        <div key={degree.id} className="grid grid-cols-[1fr_3fr] gap-[2.5em]">
          <div className="duration text-[1.125em]">
            {format(new Date(degree.gradDate), "MMM-yyyy")}
          </div>
          <div>
            <h4 className="text-[1.3em] mb-[0.2em] font-semibold">
              <span>{degree.schoolDegree}:</span>
              <span>{degree.fieldStudied}</span>
            </h4>
            <p className=" text-[1.125em]">
              <span>{degree.schoolName}</span> -{" "}
              <span>{degree.schoolLocation}</span>.
            </p>
            <p
              className={`${
                degree.degreeDescription ? "block" : "hidden"
              } text-[1em]`}
            >
              {degree.degreeDescription.split("\n").map((line, index) => (
                <span key={index}>
                  • {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      ));
      return listItems;
    } else {
      return (
        <div id="education1" className="grid grid-cols-[1fr_3fr] gap-[2.5em]">
          <div className="duration text-[1.125em]">date - end</div>
          <div>
            <h4 className="text-[1.3em] mb-[0.2em] font-semibold">
              <span>Bachelors in Accounting:</span>
              <span>Accounting</span>
            </h4>
            <p className=" text-[1.125em]">
              <span>University of Nigeria</span> - <span>Nsukka, Nigeria</span>.
            </p>
          </div>
        </div>
      );
    }
  }
  function skillList(skillArr) {
    if (skillArr && skillArr.length) {
      if (skillArr.length === 1 && !skillArr[0].name) {
        return <p>Skill 1</p>;
      } else {
        const listItems = skillArr.map((skill) => (
          <p key={skill.id}>{skill.name}</p>
        ));
        return listItems;
      }
    } else {
      return <p>Skill 1</p>;
    }
  }

  return (
    <div
      className={`docParent items-start aspect-[8.5/11] flex  w-full h-full ${
        isOpen ? setTimeout(scaleToFitParent, 500) : " "
      }  ease-out `}
      ref={parentRef}
    >
      <div
        id="previewPaper"
        ref={childRef}
        className="grid grid-cols-[25%_75%] min-h-full leading-normal mx-auto bg-indigo-50  md:origin-[center_top] lg:origin-top-left leading-[150%]"
      >
        <div
          id="paperAside"
          className="flex flex-col h-full justify-start bg-indigo-800 py-[1em] "
        >
          <div id="identity" className=" px-[1.25em] pb-[1.25em]">
            <h1 className="text-[150%] font-bold mb-[0.75em]">
              {resumeData && resumeData.contactInfo.firstName
                ? `${resumeData.contactInfo.firstName} ${resumeData.contactInfo.lastName}`
                : "John Doe"}
            </h1>
            <h4 className="text-[1.1em]">
              {resumeData && resumeData.contactInfo.profession
                ? `${resumeData.contactInfo.profession}`
                : "Accountant"}
            </h4>
          </div>
          <div id="contact" className="pb-[0.75em] flex flex-col">
            <div className="bg-indigo-900 px-[1.25em] py-[0.25em] mb-[0.5em]">
              <h3 className="text-[1.5em] font-semibold">Contact</h3>
            </div>
            <div id="address" className="text-[1em] px-[1.125em] mb-[0.75em]">
              <h4 className="font-semibold">Address</h4>
              <p className="text-indigo-200">
                {resumeData && resumeData.contactInfo.location
                  ? `${resumeData.contactInfo.location}, ${resumeData.contactInfo.zipCode}.`
                  : "Lagos, Nigeria. 123456"}
              </p>
            </div>
            <div
              id="telephone"
              className="flex flex-col w-full text-[1em] px-[1.125em] mb-[0.75em]"
            >
              <h4 className="font-semibold">Phone</h4>
              <a
                href="tel:+2349023456789"
                className="text-indigo-200 flex flex-wrap text-wrap"
              >
                {resumeData && resumeData.contactInfo.phone
                  ? `${resumeData.contactInfo.phone}
                `
                  : "+2349023456789"}
              </a>
            </div>
            <div
              id="mail"
              className="text-[1em] flex flex-col px-[1.125em] flex-wrap"
            >
              <h4 className="font-semibold">Email</h4>
              <p className="flex w-full text-wrap box-border white-space:pre-wrap word-wrap:break-word ">
                <a
                  href={
                    resumeData && resumeData.contactInfo.email
                      ? `mailto:${resumeData.contactInfo.email}`
                      : "mailto:johndoe@example.com"
                  }
                  className="text-indigo-200 block w-full text-wrap white-space:pre-wrap word-wrap:break-word"
                >
                  {resumeData && resumeData.contactInfo.email
                    ? `${resumeData.contactInfo.email}`
                    : "johndoe@example.com"}
                </a>
              </p>
            </div>
          </div>
          <div id="weblinks" draggable="true" className="pb-[0.75em]">
            <div className="bg-indigo-900 px-[1.25em] py-[0.25em] mb-[0.5em]">
              <h3 className="text-[1.5em] font-semibold">Weblinks</h3>
            </div>
            <div className="flex flex-col px-[1.25em] text-indigo-200 text-[1em] gap-[0.75em]">
              <a href="#">link1</a>
              <a href="#">link2</a>
              <a href="#">link3</a>
            </div>
          </div>
          <div id="skills" draggable="true" className="pb-[0.75em]">
            <div className="bg-indigo-900 px-[1.25em] py-[0.25em] mb-[0.5em]">
              <h3 className="text-[1.5em] font-semibold">Skills</h3>
            </div>
            <div className="skillList flex flex-col px-[1.25em] text-indigo-200 text-[1em] gap-[0.75em]">
              {skillList(resumeData.skillData)}
            </div>
          </div>

          <div id="software" draggable="true" className="pb-[0.75em]">
            <div className="bg-indigo-900 px-[1.25em] py-[0.25em] mb-[0.5em]">
              <h3 className="text-[1.5em] font-semibold">Software</h3>
            </div>
            <div className="flex flex-col px-[1.25em] text-indigo-200 text-[1em] gap-[0.75em]">
              <p>tool 1</p>
              <p>tool 2</p>
              <p>tool 3</p>
              <p>tool 4</p>
            </div>
          </div>
          <div id="languages" draggable="true" className="pb-[0.75em]">
            <div className="bg-indigo-900 px-[1.25em] py-[0.25em] mb-[0.5em]">
              <h3 className="text-[1.5em] font-semibold">Languages</h3>
            </div>
            <div className="flex flex-col px-[1.25em] text-indigo-200 text-[1em] gap-[0.75em]">
              <p>language 1: Native language</p>
              <p>Language 2</p>
            </div>
          </div>
        </div>
        <div
          id="paperMain"
          className="flex flex-col text-gray-600 h-fit justify-start pt-[1em] pb-[1.5em] px-[1em]"
        >
          <div id="summary" className=" mb-[1em] text-[1em]">
            {resumeData.summary && <p>{resumeData.summary}</p>}
            {!resumeData.summary && (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                veniam temporibus in, pariatur dignissimos error perspiciatis
                amet labore officia, fugit quos doloribus libero laborum
                explicabo! Fugit qui itaque autem eius!
              </p>
            )}
          </div>
          <div id="work" draggable="true" className="pb-[0.75em]">
            <div className="text-indigo-900 mb-[0.75em] border-y border-gray-300">
              <h3 className="text-[1.5em]  py-[0.25em] font-semibold">
                Work History
              </h3>
            </div>
            <div className="flex flex-col text-[1em] gap-[1em]">
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                veniam temporibus in, pariatur dignissimos error perspiciatis
                amet labore officia, fugit quos doloribus libero la
              </p> */}
              <div id="workList" className="flex flex-col gap-[1em]">
                {jobList(resumeData.workHistory)}
              </div>
            </div>
          </div>
          <div id="education" draggable="true" className="pb-[0.75em]">
            <div className="text-indigo-900 mb-[0.75em] border-y border-gray-300">
              <h3 className="text-[1.5em] py-[0.25em] font-semibold">
                Education
              </h3>
            </div>

            <div id="eductionList" className="flex flex-col gap-[1em]">
              {degreeList(resumeData.educationData)}
            </div>
          </div>
          <div id="accomplishment" draggable="true" className="pb-[0.75em]">
            <div className="text-indigo-900 mb-[0.75em] border-y border-gray-300">
              <h3 className="text-[1.5em] py-[0.25em] font-semibold">
                Accomplishment
              </h3>
            </div>

            <div id="accomplishmentList" className="flex flex-col gap-[1em]">
              <div
                id="accomplishment1"
                className="grid grid-cols-[1fr_3fr] gap-[2.5em]"
              >
                <div className="duration text-[1.25em]"></div>
                <div>
                  <p className=" text-[1em]">
                    <li>
                      Wrote custom HTML and JavaScript for existing websites.
                    </li>
                    <li>
                      Developed user interfaces with modern JavaScript
                      frameworks, HTML5, and CSS3.
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="certificate" draggable="true" className="pb-[0.75em]">
            <div className="text-indigo-900 mb-[0.75em] border-y border-gray-300">
              <h3 className="text-[1.5em] py-[0.25em] font-semibold">
                Certificate
              </h3>
            </div>

            <div id="eductionList" className="flex flex-col gap-[1em]">
              <div
                id="education1"
                className="grid grid-cols-[1fr_3fr] gap-[2.5em]"
              >
                <div className="duration text-[1.125em]">
                  <span>2020</span>
                </div>
                <div>
                  <p className=" text-[1.125em]">
                    Google Ux Design Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
