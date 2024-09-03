import { FormHeading } from "../utilities/formheading";
import TemplatePaper from "../template/template";
import "./contactInfo.scss";
import { Input } from "../utilities/input";

export function ContactInfo() {
  return (
    <div className="contact grid grid-cols-1 lg:grid-cols-[58%_38%] gap-16">
      <div className="content w-full">
        <FormHeading
          title={"What's the best way for employers to contact you?"}
          subtitle={"We suggest including an email and phone number."}
          instruction={true}
        />
        <form action="#">
          <div className="grid grid-cols-2 gap-5 lg:gap-6">
            <Input
              label={"First Name"}
              type={"text"}
              id={"firstName"}
              placeholder={"eg. John"}
            />
            <Input
              label={"Last Name"}
              type={"text"}
              id={"lastName"}
              placeholder={"eg. Doe"}
            />
            <div className="col-span-2">
              <Input
                label={"Profession"}
                type={"text"}
                id={"profession"}
                placeholder={"Web Developer"}
              />
            </div>
            <Input
              label={"State, Country"}
              type={"text"}
              id={"location"}
              placeholder={"Lagos, Nigeria"}
            />
            <Input
              label={"Zip Code"}
              type={"text"}
              id={"zipcode"}
              placeholder={"eg. 123101"}
            />
            <div className="col-span-2 md:col-span-1">
              <Input
                label={"Phone"}
                type={"tel"}
                id={"phone"}
                placeholder={"eg. +2349023456789"}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Input
                label={"Email"}
                type={"email"}
                id={"email"}
                placeholder={"eg. johndoe@example.com"}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="preview_area hidden md:flex justify-center p-5 w-full">
        <div className="preview aspect-[8.5/11] flex md:w-1/3 lg:w-2/3 h-fit border border-gray-500 shadow-md shadow-gray-400 bg-gray-100 overflow-hidden">
          <TemplatePaper />
        </div>
      </div>
    </div>
  );
}
