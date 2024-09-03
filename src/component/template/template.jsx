import { useEffect, useRef } from "react";
import "./template.scss";

export default function TemplatePaper() {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const scaleToFitParent = () => {
    const parentWidth = parentRef.current.clientWidth;
    const childWidth = childRef.current.clientWidth;

    // Calculate the scale factor needed to fit the child into the parent's width
    const scaleFactor = parentWidth / childWidth;

    // Apply the scale transformation
    childRef.current.style.transform = `scale(${scaleFactor})`; // Scale only horizontally
    childRef.current.style.transformOrigin = "left"; // Optional: Set the origin to left
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
  return (
    <div className="docParent  items-start w-full h-full" ref={parentRef}>
      <div
        id="previewPaper"
        ref={childRef}
        className="grid grid-cols-[1fr_3fr] leading-normal mx-auto bg-indigo-50 mb-auto"
      >
        <div
          id="paperAside"
          className="flex flex-col h-full justify-start bg-indigo-800 py-4 "
        >
          <div id="identity" className=" px-5 pb-5">
            <h1 className="text-2xl font-bold mb-3">CHUKWUMA IHEANACHO</h1>
            <h4>Web developer</h4>
          </div>
          <div id="contact" className="pb-3">
            <div className="bg-indigo-900 px-5 mb-2">
              <h3 className="text-lg font-semibold">Contact</h3>
            </div>
            <div id="address" className="text-xs px-5 mb-3">
              <h4 className="font-semibold">Address</h4>
              <p className="text-indigo-200">Lagos, Nigeria. 100101 LA</p>
            </div>
            <div id="telephone" className="text-xs px-5 mb-3">
              <h4 className="font-semibold">Phone</h4>
              <a href="tel:+2349023456789" className="text-indigo-200">
                +2349023456789
              </a>
            </div>
            <div id="mail" className="text-xs px-5">
              <h4 className="font-semibold">Email</h4>
              <a href="mailto:kztchm@gmail.com" className="text-indigo-200">
                kztchm@gmail.com
              </a>
            </div>
          </div>
          <div id="weblinks" className="pb-3">
            <div className="bg-indigo-900 px-5 mb-2">
              <h3 className="text-lg font-semibold">Weblinks</h3>
            </div>
            <div className="flex flex-col px-5 text-indigo-200 text-xs gap-3">
              <a href="#">link1</a>
              <a href="#">link2</a>
              <a href="#">link3</a>
            </div>
          </div>
          <div id="skills" className="pb-3">
            <div className="bg-indigo-900 px-5 mb-2">
              <h3 className="text-lg font-semibold">Skills</h3>
            </div>
            <div className="flex flex-col px-5 text-indigo-200 text-xs gap-3">
              <p>Skill 1</p>
              <p>Skill 2</p>
              <p>Skill 3</p>
              <p>Skill 4</p>
            </div>
          </div>

          <div id="software" className="pb-3">
            <div className="bg-indigo-900 px-5 mb-2">
              <h3 className="text-lg font-semibold">Software</h3>
            </div>
            <div className="flex flex-col px-5 text-indigo-200 text-xs gap-3">
              <p>tool 1</p>
              <p>tool 2</p>
              <p>tool 3</p>
              <p>tool 4</p>
            </div>
          </div>
          <div id="languages" className="pb-3">
            <div className="bg-indigo-900 px-5 mb-2">
              <h3 className="text-lg font-semibold">Languages</h3>
            </div>
            <div className="flex flex-col px-5 text-indigo-200 text-xs gap-3">
              <p>language 1: Native language</p>
              <p>Language 2</p>
            </div>
          </div>
        </div>
        <div
          id="paperMain"
          className="flex flex-col text-gray-600 justify-start py-4 px-4"
        >
          <div id="summary" className=" mb-4 text-xs">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              veniam temporibus in, pariatur dignissimos error perspiciatis amet
              labore officia, fugit quos doloribus libero laborum explicabo!
              Fugit qui itaque autem eius!
            </p>
          </div>
          <div id="work" className="pb-3">
            <div className="text-indigo-900 mb-3 border-y border-gray-300">
              <h3 className="text-lg font-semibold">Work History</h3>
            </div>
            <div className="flex flex-col text-xs gap-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                veniam temporibus in, pariatur dignissimos error perspiciatis
                amet labore officia, fugit quos doloribus libero la
              </p>
              <div id="workList" className="flex flex-col gap-3">
                <div id="work1" className="grid grid-cols-[1fr_3fr] gap-10">
                  <div className="duration text-sm">start - end</div>
                  <div>
                    <h4 className="text-base mb-1 font-semibold">Job Title</h4>
                    <p className="mb-2">
                      <span>Employer</span>, <span>Location</span>.
                    </p>
                    <p className="">
                      • Lorem, ipsum dolor sit amet consectetur adipisicing
                      elit.
                      <br />
                      Provident, qui. Lorem, ipsum dolor sit amet consectetur{" "}
                      <br />
                      adipisicing elit. Provident, qui. Lorem, ipsum dolor sit{" "}
                      <br />
                      amet consectetur adipisicing elit. Provident, qui.
                    </p>
                  </div>
                </div>
                <div id="work2" className="grid grid-cols-[1fr_3fr] gap-10">
                  <div className="duration text-sm">start - end</div>
                  <div>
                    <h4 className="text-base mb-1 font-semibold">Job Title</h4>
                    <p className="mb-2">
                      <span>Employer</span>, <span>Location</span>.
                    </p>
                    <p className="">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
                      <br />
                      Provident, qui. Lorem, ipsum dolor sit amet consectetur{" "}
                      <br />
                      adipisicing elit. Provident, qui. Lorem, ipsum dolor sit{" "}
                      <br />
                      amet consectetur adipisicing elit. Provident, qui.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="education" className="pb-3">
            <div className="text-indigo-900 mb-3 border-y border-gray-300">
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div id="eductionList" className="flex flex-col gap-3">
              <div id="education1" className="grid grid-cols-[1fr_3fr] gap-10">
                <div className="duration text-sm">date - end</div>
                <div>
                  <h4 className="text-base mb-1 font-semibold">
                    <span>Bachelors of Science:</span>
                    <span>Physics Science</span>
                  </h4>
                  <p className=" text-xs">
                    <span>University of Nigeria</span> -{" "}
                    <span>Nsukka, Nigeria</span>.
                  </p>
                </div>
              </div>
              <div id="education1" className="grid grid-cols-[1fr_3fr] gap-10">
                <div className="duration text-sm">start - end</div>
                <div>
                  <h4 className="text-base mb-1 font-semibold">
                    <span>Bachelors of Science:</span>
                    <span>Physics Science</span>
                  </h4>
                  <p className=" text-xs">
                    <span>University of Nigeria</span> -{" "}
                    <span>Nsukka, Nigeria</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="accomplishment" className="pb-3">
            <div className="text-indigo-900 mb-3 border-y border-gray-300">
              <h3 className="text-lg font-semibold">Accomplishment</h3>
            </div>

            <div id="eductionList" className="flex flex-col gap-3">
              <div id="education1" className="grid grid-cols-[1fr_3fr] gap-10">
                <div className="duration text-sm"></div>
                <div>
                  <p className=" text-xs">
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
          <div id="certificate" className="pb-3">
            <div className="text-indigo-900 mb-3 border-y border-gray-300">
              <h3 className="text-lg font-semibold">Certificate</h3>
            </div>

            <div id="eductionList" className="flex flex-col gap-3">
              <div id="education1" className="grid grid-cols-[1fr_3fr] gap-10">
                <div className="duration text-sm">
                  <span>2020</span>
                </div>
                <div>
                  <p className=" text-xs">Google Ux Design Certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
