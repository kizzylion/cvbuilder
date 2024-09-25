import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import "./contactInfo.scss";
import { Input } from "../utilities/input";
import { Button } from "../utilities/button";
import { useState, useEffect } from "react";

export function ContactInfo({
  isOpen,
  closeMultiform,
  handleNext,
  resumeData,
  contact,
  handleContactChanges,
}) {
  const [firstName, setFirstName] = useState(
    contact.firstName ? contact.firstName : ""
  );
  const [lastName, setLastName] = useState(
    contact.lastName ? contact.lastName : ""
  );
  const [profession, setProfession] = useState(
    contact.profession ? contact.profession : ""
  );
  const [location, setLocation] = useState(
    contact.location ? contact.location : ""
  );
  const [zipCode, setZipCode] = useState(
    contact.zipCode ? contact.zipCode : ""
  );
  const [phone, setPhone] = useState(contact.phone ? contact.phone : "");
  const [email, setEmail] = useState(contact.email ? contact.email : "");

  const contactData = {
    firstName: firstName,
    lastName: lastName,
    profession: profession,
    location: location,
    zipCode: zipCode,
    phone: phone,
    email: email,
  };

  // console.log(resumeData);
  // console.log(resumeData.contactInfo);

  useEffect(() => {
    handleContactChanges(contactData);
  }, [firstName, lastName, profession, location, zipCode, phone, email]); // Runs whenever firstName changes

  const handleFirstName = (e) => {
    setFirstName(() => e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleProfession = (e) => {
    setProfession(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const isValid = () => {
    return (
      firstName && lastName
      // profession &&
      // location &&
      // zipCode &&
      // phone &&
      // email
    );
  };

  const handleNextClick = () => {
    if (isValid()) {
      handleNext(contactData);
    } else {
      alert("Please fill in all the required fields.");
    }
  };

  return (
    <>
      <div className="contact grid grid-cols-1 lg:grid-cols-[58%_38%] gap-16 mb-5">
        <div className="content w-full">
          <FormHeading
            title={"What's the best way for employers to contact you?"}
            subtitle={"We suggest including an email and phone number."}
            instruction={true}
            handleBack={closeMultiform}
          />
          <form action="#">
            <div className="grid grid-cols-2 gap-5 lg:gap-6 pb-20 md:pb-0 lg:pb-20">
              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"First Name"}
                  type={"text"}
                  id={"firstName"}
                  placeholder={"eg. John"}
                  require={true}
                  value={firstName}
                  onChange={handleFirstName}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"Last Name"}
                  type={"text"}
                  id={"lastName"}
                  placeholder={"eg. Doe"}
                  require={true}
                  value={lastName}
                  onChange={handleLastName}
                />
              </div>
              <div className="col-span-2">
                <Input
                  label={"Profession"}
                  type={"text"}
                  id={"profession"}
                  placeholder={"Web Developer"}
                  require={true}
                  value={profession}
                  onChange={handleProfession}
                />
              </div>
              <Input
                label={"State, Country"}
                type={"text"}
                id={"location"}
                placeholder={"Lagos, Nigeria"}
                require={true}
                value={location}
                onChange={handleLocation}
              />
              <Input
                label={"Zip Code"}
                type={"text"}
                id={"zipcode"}
                placeholder={"eg. 123101"}
                require={true}
                value={zipCode}
                onChange={handleZipCode}
              />
              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"Phone"}
                  type={"tel"}
                  id={"phone"}
                  placeholder={"eg. +2349023456789"}
                  require={true}
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input
                  label={"Email"}
                  type={"email"}
                  id={"email"}
                  placeholder={"eg. johndoe@example.com"}
                  require={true}
                  value={email}
                  onChange={handleEmail}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="preview_area hidden md:flex justify-center p-5 w-full">
          <div className="preview aspect-[8.5/11] flex md:w-1/3 lg:w-full h-fit border border-gray-500 shadow-md shadow-gray-400 bg-gray-100 overflow-hidden">
            <TemplatePaper isOpen={isOpen} resumeData={resumeData} />
          </div>
        </div>
      </div>
      <footer className="action-section w-full flex-col md:flex-row flex justify-end gap-3 mt-auto py-4 fixed w-full  mx-auto  bottom-0 right-0 px-4 md:px-6 lg:px-8  bg-gray-50 border-t border-gray-300">
        <div className="order-0 md:order-1">
          <Button
            type={"primary"}
            label={"Next: Work History"}
            preIcon={false}
            postIcon={false}
            onClick={() => {
              handleNextClick();
            }}
          />
        </div>
      </footer>
    </>
  );
}
